import pubfunc from '../logic/utils/pubfunc';
import FollowTrace from '../view/trace/FollowTrace';
import AtkUtils from './AtkUtils';
import Log from '../lib/Log';

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
        this.explodeEffects = info.explodeEffects || [];
        this.explodeSelector = info.explodeSelector;
        // 必定命中
        this.mustHit = !!info.mustHit; 
        this.offset = info.offset || cc.v2(0, 0);
        this._fired = false;

        const node = new cc.Node(this.id);
        this.view = node;
        node.position = this.offset;
        pubfunc.getWorld().addBullet(this);
    }

    fireDelay(frames){
        if(frames <= 0){
            return this.fire();
        }
        this._remainFrame = frames;
    }

    fire() {
        this._fired = true;
        pubfunc.getWorld().fireBullet(this);
        this.direct = this.atker.getDirect();
        if(!this.spinePath || this.spinePath === ''){
            Log.log('bullet without spine effect');
        }else{
            cc.loader.loadRes(this.spinePath, sp.SkeletonData, (err, res) => {
                if (err) {
                    console.warn(this.spinePath, err);
                    return;
                }
                if(!cc.isValid(this.view)){
                    return;
                }
                const skeleton = this.view.addComponent(sp.Skeleton);
                skeleton.skeletonData = res;
                skeleton.loop = true;
                skeleton.setToSetupPose();
                skeleton.premultipliedAlpha = false;
                skeleton.setCompleteListener(() => this.handleEvent({ type: 'animCompleted' }));
                skeleton.setAnimation(0, 'effect', true);
            });
        }
        // 创建trace
        const traceConf = this.traceConf
        if(traceConf){
            switch(traceConf.type){
                case 'follow':
                    const head = traceConf.initHead;
                    this.trace = new FollowTrace(this, this.getFirstTarget(), cc.v2(head.x, head.y), traceConf.speed);
            }
        }
    }

    handleEvent(event){
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

    tryTrigger(){
        const targets = this.getTargets();
        if (this.trigger.trigger(this, targets, pubfunc.getWorld())) {
            const buffs = this.buffs;
            const effects = this.effects;
            for (const target of targets) {
                // 判定命中
                let hit = this.mustHit;
                if(!hit){
                    const accProb = AtkUtils.getAccProb(this.atker, target);
                    const rvalue = pubfunc.getWorld().randFunc();
                    hit = rvalue <= accProb;
                    Log.log(`${this.atker.id}=>${target.id}命中判定:${hit},accProb:${accProb},rvalue:${rvalue}`);
                }else{
                    Log.log(`${this.atker.id}=>${target.id}命中判定:子弹必定命中`);
                }
                if (hit){
                    target.doEffects(effects);
                    target.addBuffs(buffs);
                    if (this.hitEffect && this.hitEffect != '') {
                        target.showHitEffect(this.hitEffect)
                    }
                    // 子弹造成目标死亡
                    if (!target.isAlive()){
                        const role = this.atker.logicEntity;
                        role.setEnergy(role.getEnergy() + 300);
                        Log.log(`${role.id}造成目标死亡，怒气加300，当前为:${role.getEnergy()}`);
                    }
                }
            }
            this.explode();
            // 每个子弹可以被触发一次，触发后就销毁
            this.destroy();
        }
    }

    getFirstTarget(){
        // 需要排除范围选择器
        return this.selector.getTargets(this.atker, this, pubfunc.getWorld(), true)[0];
    }

    getTargets() {
        return this.selector.getTargets(this.atker, this, pubfunc.getWorld());
    }

    checkTarget(target){
        return this.selector.checkTarget(target, this.atker, this, pubfunc.getWorld());
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

    explode(){
        this.offset = cc.v2(0, 0);
        if(!this.explodeSelector){
            return;
        }
        let targets = this.getTargets();
        let explodeTargets = this.explodeSelector.getTargets(this.atker, this, pubfunc.getWorld());
        explodeTargets = explodeTargets.filter((e)=>{
            const target = targets.find((target)=>e===target);
            if(target){
                return false
            }else{
                return true;
            }
        });
        Log.log('子弹爆炸波及人数:', explodeTargets.length);
        for(const target of explodeTargets){
            target.doEffects(this.explodeEffects);
        }
    }

    destroy(){
        this._fired = false;
        this.view.destroy();
        pubfunc.getWorld().removeBullet(this);
    }

}

export default ViewBullet;