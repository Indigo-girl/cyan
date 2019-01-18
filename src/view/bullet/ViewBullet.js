import WorldUtils from '../../logic/utils/WorldUtils';
import FollowTrace from '../../view/trace/FollowTrace';
import AtkUtils from '../AtkUtils';
import Log from '../../lib/Log';
import BlinkTrace from '../trace/BlinkTrace';
import CONTEXT_CONST from '../../logic/const/ContextConst';

let _id = 0;

class ViewBullet{

    constructor(atker, info){
        this.id = _id;
        _id++;
        // effect和buff不一样的是，子弹中的直接effect不会被回退，buff中的effect在buff被清除后会回退
        this.effects = info.effects || [];
        this.buffs = info.buffs || [];
        this.selector = info.selector;
        this.atker = atker;
        this.trigger = info.trigger;
        this.traceConf = info.trace;
        this.spinePath = info.spinePath;
        this.hitEffect = info.hitEffect;
        this.explodeEffectPath = info.explodeEffectPath;
        this.groundEffectPath = info.groundEffectPath;
        this.explodeEffects = info.explodeEffects || [];
        this.explodeSelector = info.explodeSelector;
        // 爆炸事件，如果没有设置，默认子弹销毁时触发
        this.explodeEvents = info.explodeEvents || [];
        // 爆炸是否波及子弹选定的目标
        this.explodeIncludeTargets = info.explodeIncludeTargets;
        // 必定命中
        this.mustHit = !!info.mustHit; 
        this.offset = info.offset || cc.v2(0, 0);
        this.offsetType = info.offsetType;
        this._fired = false;
        const node = new cc.Node(this.id);
        this.view = node;
        node.position = this.offset;
        WorldUtils.getWorld().addBullet(this);
    }

    fireDelay(frames){
        if(frames <= 0){
            return this.fire();
        }
        this._remainFrame = frames;
    }

    fire() {
        this._fired = true;
        WorldUtils.getWorld().fireBullet(this);
        this.direct = this.atker.getDirect();
        if(!this.spinePath || this.spinePath === ''){
            Log.log('bullet without spine effect');
        }else{
            cc.loader.loadRes(this.spinePath, sp.SkeletonData, (err, res) => {
                if (err) {
                    Log.warn(this.spinePath, err);
                    return;
                }
                WorldUtils.getWorld().registAsset(res);
                if(!cc.isValid(this.view)){
                    return;
                }
                const skeleton = this.view.addComponent(sp.Skeleton);
                skeleton.skeletonData = res;
                skeleton.loop = true;
                skeleton.setToSetupPose();
                skeleton.premultipliedAlpha = false;
                skeleton.setCompleteListener(() => this.handleEvent({ type: 'animCompleted' }));
                skeleton.setEventListener((_, event) => {
                    Log.log('子弹spine事件：', event.data);
                    this.handleEvent({ type: event.data.name });
                });
                skeleton.setAnimation(0, 'effect', true);
                skeleton.paused = !!this._paused;
            });
        }
        // 创建trace
        const traceConf = this.traceConf;
        const target = this.getFirstTarget();
        if(traceConf && target){
            switch(traceConf.type){
                case 'follow':
                    const head = traceConf.initHead;
                    this.trace = new FollowTrace(this, target, cc.v2(head.x, head.y), traceConf.speed, traceConf.useRolePos);
                    break;
                case 'blink':
                    // 这里子弹前往的是人物的pos而不是hitPos
                    this.trace = new BlinkTrace(this, target.getPosition());
                    break;
            }
        }
        // 追踪型子弹在没有目标时自动销毁
        if(traceConf && !target && this.offsetType !== 2){
            this.handleEvent({
                type: 'targetNotFound'
            });
        }
    }

    handleEvent(event){
        if(this.explodeEvents.find((e)=>e==event.type)){
            this.explode();
        }
        Log.log('子弹接收到事件:', event);
        if(event.type === 'targetNotFound'){
            // 当追踪目标消失时，直接销毁子弹
            this.destroy();
        }else{
            this.trigger.handleEvent(event);
            this.tryTrigger();
        }
    }

    update(){
        if(!this._fired){
            if(this._remainFrame && this._remainFrame > 0){
                this._remainFrame--;
                if(this._remainFrame === 0){
                    this.fire();
                }
            }
            return;
        }else{
            this.trigger.update();
            this.tryTrigger();
            let zIndex = 0;
            let targets = this.getTargets();
            for(const target of targets){
                zIndex = Math.max(zIndex, target.view.zIndex);
            }
            this.view.zIndex = zIndex;
            if(this.trace){
                this.trace.update();
            }
        }
    }

    pauseAnim() {
        this._paused = true;
        const skeleton = this.view.getComponent(sp.Skeleton)
        if (skeleton) {
            skeleton.paused = true;
        }
    }

    resumeAnim() {
        this._paused = false;
        const skeleton = this.view.getComponent(sp.Skeleton)
        if (skeleton) {
            skeleton.paused = false;
        }
    }

    tryTrigger(){
        if(!this._fired){
            return;
        }
        const targets = this.getTargets();
        if (this.trigger.trigger(this.atker, targets, WorldUtils.getWorld(), this)) {
            this.onTrigger();
            // 每个子弹可以爆炸一次，爆炸后消失
            if (this.trigger.triggerDestroy()){
                if(this.explodeEvents.length < 1 || this.explodeEvents.find((e)=>e=="destroy")){
                    this.explode();
                }
                this.destroy();
            }
        }
    }

    onTrigger(){
        const buffs = this.buffs;
        const effects = this.effects;
        const triggerTargets = this.trigger.getTriggeredTargets();
        for (const target of triggerTargets) {
            // 判定命中
            let hit = this.mustHit;
            if (!hit) {
                const accProb = AtkUtils.getAccProb(this.atker, target);
                const rvalue = WorldUtils.getWorld().randFunc();
                hit = rvalue <= accProb;
                Log.log(`${this.atker.id}=>${target.id}命中判定:${hit},accProb:${accProb},rvalue:${rvalue}`);
            } else {
                Log.log(`${this.atker.id}=>${target.id}命中判定:子弹必定命中`);
            }
            if (hit) {
                target.doEffects(effects);
                target.addBuffs(buffs);
                if (this.hitEffect && this.hitEffect != '') {
                    target.showHitEffect(this.hitEffect)
                }
                // 子弹造成目标死亡
                if (!target.isAlive()) {
                    const role = this.atker.logicEntity;
                    const energyExtraScale = role.getRealProp(CONTEXT_CONST.PRO_ID.ENERGY_EXTRA_SCALE) || 0;
                    role.setEnergy(role.getEnergy() + 300 * (1 + energyExtraScale / 1000));
                    Log.log(`${role.id}造成目标死亡，怒气加300，当前为:${role.getEnergy()}`);
                }
            } else {
                this.showMiss(target);
            }
        }
    }

    getAtkPos(atker, target, ratio1, ratio2) {
        return this.selector.getAtkPos(atker, target, ratio1, ratio2);
    }

    getFirstTarget(){
        // 需要排除范围选择器
        return this.selector.getTargets(this.atker, this, WorldUtils.getWorld(), true)[0];
    }

    getTargets() {
        return this.selector.getTargets(this.atker, this, WorldUtils.getWorld());
    }

    checkTarget(target){
        return this.selector.checkTarget(target, this.atker, this, WorldUtils.getWorld());
    }

    getPosition(){
        return this.view.getPosition();
    }

    setPosition(pos){
        this.view.position = pos;
    }

    getDirect(){
        if(this.direct){
            return this.direct
        }else{
            return this.atker.getDirect();
        }
    }

    getOffsetNode(){
        // TOFIX
        // 强制要求存在可以依托的节点
        let node;
        switch(this.offsetType){
            case 0:
                node = this.atker && this.atker.view;
                break;
            case 1:
                node = this.getFirstTarget() && this.getFirstTarget().view;
                break;
            case 2:
                node = WorldUtils.getWorld().node;
                break;
        }
        return node;
    }

    getOffsetDirect(){
        switch (this.offsetType) {
            case 0:
                return this.atker.getDirect();
            case 1:
                return this.getFirstTarget().getDirect();
            default:
                return this.atker.getDirect();
        }
    }

    explode(){
        this.showEffect(this.explodeEffectPath, this.getPosition(), this.view.zIndex);
        this.showEffect(this.groundEffectPath, this.getPosition(), 0);
        this.offset = cc.v2(0, 0);
        if(!this.explodeSelector){
            return;
        }
        let explodeTargets = this.explodeSelector.getTargets(this.atker, this, WorldUtils.getWorld());
        if (!this.explodeIncludeTargets){
            Log.log('爆炸移除子弹所有目标')
            let targets = this.getTargets();
            explodeTargets = explodeTargets.filter((e) => {
                const target = targets.find((target) => e === target);
                if (target) {
                    return false
                } else {
                    return true;
                }
            });
        }
        Log.log('子弹爆炸波及人数:', explodeTargets.length);
        for(const target of explodeTargets){
            target.doEffects(this.explodeEffects);
        }
    }

    showEffect(effectPath, pos, zIndex) {
        if (!effectPath || effectPath === '') {
            Log.warn('无效的子弹特效：', effectPath);
            return;
        }
        //  受击特效的位置应该在每个英雄的受击点，每个模型都需要配置受击点
        const node = new cc.Node('effect');
        node.parent = this.view.parent;
        node.zIndex = zIndex;
        node.position = pos;
        node.scaleX = -this.getDirect();
        cc.loader.loadRes(effectPath, sp.SkeletonData, (err, res) => {
            if (err) {
                Log.warn(effectPath, err);
                return;
            }
            WorldUtils.getWorld().registAsset(res);
            const skeleton = node.addComponent(sp.Skeleton);
            skeleton.skeletonData = res;
            skeleton.loop = false;
            skeleton.setToSetupPose();
            skeleton.premultipliedAlpha = false;
            skeleton.setCompleteListener(() => node.destroy());
            skeleton.setAnimation(0, 'effect', false);
        });
    }

    showMiss(target){
        cc.loader.loadRes('prefab/war/miss', (err, prefab) => {
            if (err) {
                Log.warn(err);
                return;
            }
            const node = cc.instantiate(prefab);
            node.parent = target.view.parent;
            node.zIndex = 10000;
            node.position = cc.v2(target.view.x, target.view.y + target.hitPoint.y * Math.abs(target.view.scaleX) * 1.4);
            node.runAction(cc.sequence(cc.moveBy(1, cc.v2(0, 100)).easing(cc.easeExponentialIn(0.1)),
                cc.fadeOut(0.2), cc.removeSelf()));
        });
    }

    destroy(){
        this._fired = false;
        this.view.destroy();
        WorldUtils.getWorld().removeBullet(this);
    }

}

export default ViewBullet;