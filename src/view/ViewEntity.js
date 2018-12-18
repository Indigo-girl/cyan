import StateMachine from './state/StateMachine';
import MoveComponent from './MoveComponent';
import SkillComponent from './SkillComponent';
import BuffComponent from './BuffComponent';
import AtkUtils from './AtkUtils';
import ContextConst from '../logic/const/ContextConst';
import Log from '../lib/Log';
import WorldUtil from '../logic/utils/WorldUtils'
import CommonConst from '../logic/const/CommonConst';

class ViewEntity{

    constructor(entity, modelInfo, stateConfig){
        this.id = entity.id;
        // 逻辑实体，用于管理数值状态
        this.logicEntity = entity;
        // 初始化状态机
        this._initState = stateConfig.initState || 'idle';
        this.sm = new StateMachine(this, stateConfig);
        this.modelInfo = modelInfo;
        this._initView(modelInfo);
        this.moveComp = new MoveComponent(this);
        this.skillComp = new SkillComponent(this);
        this.buffComp = new BuffComponent(this);
        // 子弹需要在索敌的时候就准备
        this._bullets = [];
        this._direct = -1;
        this._viewComponentsVisible = true;
    }

    _initView(modelInfo){
        this.view = new cc.Node();
        this.hitPoint = modelInfo.hitPoint;
        const node = new cc.Node(this.id);
        node.setScale(modelInfo.scale);
        node.parent = this.view;
        this.spineNode = node;
        cc.loader.loadRes(modelInfo.spinePath, sp.SkeletonData, (err, res) => {
            if(err){
                Log.warn(err);
                return;
            }
            const skeleton = node.addComponent(sp.Skeleton);
            skeleton.skeletonData = res;
            skeleton.loop = true;
            skeleton.setToSetupPose();
            skeleton.premultipliedAlpha = false;
            skeleton.setCompleteListener(() => this.onAnimCompleted());
            skeleton.setEventListener((trace, event)=>{
                Log.log('spine事件：', event.data);
                this.handleEvent({type: event.data.name});
            });
            skeleton.setSkin(modelInfo.skin);
            skeleton.paused = !!this._paused;
            this.sm.changeState(this._initState);
        });
        this.addEnergyBar();
        this.addHpBar();
        if(this._viewComponentsVisible){
            this.spineNode.opacity = 255;
        }else{
            this.spineNode.opacity = 0;
        }
    }

    showViewComponent(comp){
        if (comp && cc.isValid(comp)) {
            comp.opacity = 255;
        }
    }

    hideViewComponent(comp){
        if (comp && cc.isValid(comp)) {
            comp.opacity = 0;
        }
    }

    hideViewComponents(){
        this._viewComponentsVisible = false;
        const comps = [this.spineNode, this.hpBarNode, this.energyBarNode];
        for(const comp of comps){
            this.hideViewComponent(comp);
        }
    }

    showViewComponents(){
        this._viewComponentsVisible = true;
        const comps = [this.spineNode, this.hpBarNode, this.energyBarNode];
        for (const comp of comps) {
            this.showViewComponent(comp);
        }
    }

    onAnimCompleted(){
        this.handleEvent({ type: 'animCompleted'});
    }

    update() {
        this.buffComp.update();
        this.sm.update();
        this.view.zIndex = this.view.parent.height - this.getPosition().y;
        this.refreshHpBar();
        this.refreshEnergyBar();
    }

    playAnim(name, loop) {
        this.spineNode.getComponent(sp.Skeleton).setAnimation(0, name, !!loop);
    }
    
    pauseAnim() {
        this._paused = true;
        if(cc.isValid(this.spineNode)){
            const skeleton = this.spineNode.getComponent(sp.Skeleton);
            if(skeleton){
                skeleton.paused = true;
            }
        }
    }

    resumeAnim() {
        this._paused = false;
        if(cc.isValid(this.spineNode)){
            const skeleton = this.spineNode.getComponent(sp.Skeleton);
            if (skeleton) {
                skeleton.paused = false;
            }
        }
    }

    // vec2.x>0为x轴方向
    setHead(dir){
        if(dir.x===0 && dir.y===0){
            return;
        }
        dir = dir.normalize();
        if(dir.x < 0){
            this._direct = -1;
            this.view.scaleX = Math.abs(this.view.scaleX);
        }else if(dir.x > 0){
            this._direct = 1;
            this.view.scaleX = -Math.abs(this.view.scaleX);
        }
        this.head = dir;
        for(const bar of [this.hpBarNode, this.energyBarNode]){
            if (cc.isValid(bar)) {
                const scale = this.getDirect() >= 0 ? -1 : 1;
                bar.scaleX = scale * Math.abs(bar.scaleX);
            }
        }
    }

    getHead(){
        return this.head || cc.v2(1, 0);
    }

    // 身体方向，向右为1，向左为-1
    getDirect(){
        return this._direct;
    }

    getPosition(){
        return this.view.getPosition();
    }

    setPosition(pos){
        this.view.setPosition(cc.v2(pos.x, pos.y));
    }

    moveTo(pos){
        this.moveComp.moveTo(pos);
    }

    moveInRadius(target, radius, alignY){
        this.moveComp.moveInRadius(target, radius, alignY);
    }

    moveForSkill(target, skill){
        this.moveComp.moveForSkill(target, skill);
    }

    handleEvent(event){
        if(this.buffComp.handleEvent(event)){
            // 存在buff阻止事件的传递
            return;
        }
        this.sm.handleEvent(event);
    }

    isAlive(){
        return this.logicEntity.isAlive();
    }

    setPassiveSkillIds(ids){
        this.skillComp.setPassiveSkillIds(ids);
    }

    setEnergySkillId(id){
        this.skillComp.setEnergySkill(id);
    }

    setNormalSkillIds(ids, index){
        this.skillComp.setNormalSkills(ids, index);
    }

    nextSkill(){
        this._curSkill = this.skillComp.nextSkill();
        return this._curSkill;
    }

    getCurSkill(){
        return this._curSkill;
    }

    castSkill(){
        if(!this._curSkill){
            throw new Error('需要预先执行nextSkill');
        }
        this._curSkill.fireBullets();
        Log.log(`${this.id}释放技能${this._curSkill.configId}`);
        // 释放链式技能时，获得100点基础怒气
        if (this.skillComp.isSkillType(this._curSkill.configId, ContextConst.SKILL_TYPE.NORMAL)){
            this.handleEvent({type: 'castNormalSkill'});
            const energyExtraScale = this.logicEntity.getRealProp(ContextConst.PRO_ID.ENERGY_EXTRA_SCALE) || 0;
            this.logicEntity.setEnergy(this.logicEntity.getEnergy() + 100 * (1+energyExtraScale/1000));
            Log.log(`${this.id}释放链式技能，怒气加100，当前为:${this.logicEntity.getEnergy()}`);
        }
    }

    applyPassiveSkills(){
        this.skillComp.applyPassiveSkills();
    }

    addBuffs(buffs){
        for(const buff of buffs){
            this.buffComp.addBuff(buff);
        }
    }

    rmBuff(buff){
        this.buffComp.rmBuff(buff);
    }

    doEffects(effects){
        for(const effect of effects){
            effect.doEffect(this);
        }
    }

    undoEffects(effects){
        for (const effect of effects) {
            effect.undoEffect(this);
        }
    }

    checkDead(){
        if(!this.isAlive()){
            this.handleEvent({
                type: 'dead'
            });
        }
    }

    onHurt(hurtValue, atker){
        // 已经死亡的不会受伤
        if(!this.isAlive()){
            return 0
        }
        let role = this.logicEntity
        const hurtInfo = AtkUtils.getHurt(hurtValue, atker, this);
        let hurt = hurtInfo.value;
        const realHurt = role.changeHp(-hurt);
        // 设置统计信息
        this.logicEntity.setExtraInfo(ContextConst.EXTRA_ID.LAST_HURT_VALUE, -realHurt);
        const hurtPercent = Math.floor(-realHurt / role.getMaxHp() * 100);
        this.logicEntity.setExtraInfo(ContextConst.EXTRA_ID.LAST_HURT_PERCENT, hurtPercent);
        const energyExtraScale = role.getRealProp(ContextConst.PRO_ID.ENERGY_EXTRA_SCALE) || 0;
        const energy = hurtPercent * 10 * (1+energyExtraScale/1000);
        role.setEnergy(role.getEnergy() + energy);
        Log.log(`${this.id}受到来自${atker.id}的${hurt}点伤害,怒气值增加${energy},当前为${role.getEnergy()}`);
        this.handleEvent({
            type: 'onHurt',
            value: -realHurt
        });
        if (hurtInfo.crit) {
            // 显示暴击文字
            this.showCrit();
        }
        this.checkDead();
        return -realHurt;
    }

    onDead(){
        this.view.active = false;
        this.deadPos = this.view.position;
        this.spineNode.destroy();
    }

    onResurrect(){
        this.view.destroy();
        this._initView(this.modelInfo);
        this.view.position = this.deadPos;
    }

    getSize(){
        return cc.size(50, 50);
    }

    /**
     * 获取碰撞矩形
     * @returns
     * @memberof ViewEntity
     */
    getCollisionRect(){
        const edgeLen = 50;
        return cc.rect(this.view.x - edgeLen / 2, this.view.y - edgeLen/ 2, edgeLen, edgeLen);
    }

    showHitEffect(effectPath){
        if(!effectPath || effectPath === ''){
            Log.warn('非法的受击特效：', effectPath);
            return;
        }
        //  受击特效的位置应该在每个英雄的受击点，每个模型都需要配置受击点
        const node = new cc.Node('effect');
        node.parent = this.view;
        node.position = this.hitPoint;
        cc.loader.loadRes(effectPath, sp.SkeletonData, (err, res) => {
            if (err) {
                Log.warn(effectPath, err);
                return;
            }
            const skeleton = node.addComponent(sp.Skeleton);
            skeleton.skeletonData = res;
            skeleton.loop = false;
            skeleton.setToSetupPose();
            skeleton.premultipliedAlpha = false;
            skeleton.setCompleteListener(() => node.destroy());
            skeleton.setAnimation(0, 'effect', false);
        });
    }

    getHitPosition(){
        let pos = this.view.convertToWorldSpaceAR(this.hitPoint);
        let wpos = this.view.parent.convertToNodeSpaceAR(pos);
        return wpos;
    }

    addHpBar(){
        const path = this.logicEntity.getCamp() === ContextConst.CAMP.PLAYER ? 'blood1p' : 'blood2p';
        this.hpBarNode = new cc.Node();
        this.hpBarNode.position = cc.v2(0, 200);
        this.hpBarNode.zIndex = 1;
        this.hpBarNode.parent = this.view;
        const scale = this.getDirect() >= 0 ? -1 : 1;
        this.hpBarNode.scaleX = scale;
        cc.loader.loadRes('prefab/war/' + path, (err, prefab) => {
            if (err) {
                Log.warn(err);
                return;
            }
            const node = cc.instantiate(prefab);
            node.parent = this.hpBarNode;
            const progressBar = node.getComponent(cc.ProgressBar);
            this.hpProgressBar = progressBar;
            const role = this.logicEntity;
            progressBar.progress = role.getHp() / role.getMaxHp();
        });
        if (this._viewComponentsVisible) {
            this.hpBarNode.opacity = 255;
        } else {
            this.hpBarNode.opacity = 0;
        }
    }

    addEnergyBar() {
        this.energyBarNode = new cc.Node();
        this.energyBarNode.position = cc.v2(0, 190);
        this.energyBarNode.zIndex = 1;
        this.energyBarNode.parent = this.view;
        const scale = this.getDirect() >= 0 ? -1 : 1;
        this.energyBarNode.scaleX = scale;
        cc.loader.loadRes('prefab/war/energyBar', (err, prefab) => {
            if (err) {
                Log.warn(err);
                return;
            }
            const node = cc.instantiate(prefab);
            node.parent = this.energyBarNode;
            const progressBar = node.getComponent(cc.ProgressBar);
            this.energyProgressBar = progressBar;
            const role = this.logicEntity;
            progressBar.progress = role.getRealProp(ContextConst.PRO_ID.ENERGY) /
                role.getRealProp(ContextConst.PRO_ID.MAX_ENERGY);
        });
        if (this._viewComponentsVisible) {
            this.energyBarNode.opacity = 255;
        } else {
            this.energyBarNode.opacity = 0;
        }
    }

    refreshHpBar(){
        if(cc.isValid(this.hpBarNode) && this.hpProgressBar){
            const role = this.logicEntity;
            this.hpProgressBar.progress = role.getHp() / role.getMaxHp();
        }
    }

    refreshEnergyBar(){
        if (cc.isValid(this.energyBarNode) && this.energyProgressBar) {
            const role = this.logicEntity;
            this.energyProgressBar.progress = role.getRealProp(ContextConst.PRO_ID.ENERGY) /
                role.getRealProp(ContextConst.PRO_ID.MAX_ENERGY);
        }
    }

    getCollisionVelocity(){
        // TODO 检测和其他角色的碰撞，根据嵌入深度获取速度，所有速度矢量和为最终速度
        const SAFE_MAG = 50;
        const entities = WorldUtil.getWorld().getEntitiesById(CommonConst.ALL_ALIVE_ENTITY_CHANNEL);
        const velocity = cc.v2(0, 0);
        entities.forEach((e)=>{
            if(e.id !== this.id){
                const dist = this.getPosition().sub(e.getPosition());
                const mag = dist.mag();
                if(mag < SAFE_MAG){
                    velocity.addSelf(dist.mul(SAFE_MAG - mag));
                }
            }
        });
        if(velocity.x!=0 || velocity.y!=0){
            velocity.normalizeSelf().mul(2)
        }
        return velocity
    }

    checkCollision(){
        const velocity = this.getCollisionVelocity();
        return velocity.x != 0 || velocity.y != 0
    }

    showCrit() {
        cc.loader.loadRes('prefab/war/crit', (err, prefab) => {
            if (err) {
                Log.warn(err);
                return;
            }
            const node = cc.instantiate(prefab);
            node.parent = this.view.parent;
            node.zIndex = 100000;
            node.position = cc.v2(this.view.x - 110, this.view.y + 4 + this.hitPoint.y * Math.abs(this.view.scaleX) * 1.4);
            node.runAction(cc.sequence(cc.moveBy(1, cc.v2(0, 100)).easing(cc.easeExponentialIn(0.2)),
                cc.fadeOut(0.3), cc.removeSelf()));
        });
    }

}

export default ViewEntity;