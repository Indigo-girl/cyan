import StateMachine from './state/StateMachine';
import MoveComponent from './MoveComponent';
import SkillComponent from './SkillComponent';
import pubfunc from '../logic/utils/pubfunc';
import AtkUtils from './AtkUtils';
import ContextConst from '../logic/const/ContextConst';
import Log from '../lib/Log';

class ViewEntity{

    constructor(entity, modelInfo, stateConfig){
        this.id = entity.id;
        // 逻辑实体，用于管理数值状态
        this.logicEntity = entity;
        // 初始化状态机
        this._initState = stateConfig.initState || 'idle';
        this.sm = new StateMachine(this, stateConfig);
        this._initView(modelInfo);
        this.moveComp = new MoveComponent(this);
        this.skillComp = new SkillComponent(this);
        // 子弹需要在索敌的时候就准备
        this._bullets = [];
        this._buffs = [];
        this._direct = -1;
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
                console.warn(err);
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
            this.sm.changeState(this._initState);
        });
    }

    onAnimCompleted(){
        this.handleEvent({ type: 'animCompleted'});
    }

    update() {
        for(const buff of this._buffs){
            buff.update();
        }
        this.sm.update();
        this.view.zIndex = this.view.parent.height - this.getPosition().y;
    }

    playAnim(name, loop) {
        this.spineNode.getComponent(sp.Skeleton).setAnimation(0, name, !!loop);
    }
    
    pauseAnim() {
        this.spineNode.getComponent(sp.Skeleton).paused = true;
    }

    resumeAnim() {
        this.spineNode.getComponent(sp.Skeleton).paused = false;
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
        for(const buff of this._buffs){
            // buff可以阻止事件的传递
            if(!buff.handleEvent(event)){
                return;
            }
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
        if(this._curSkill.type === 0){
            this.logicEntity.setEnergy(this.logicEntity.getEnergy() + 100);
            Log.log(`${this.id}释放链式技能，怒气加100，当前为:${this.logicEntity.getEnergy()}`);
        }
    }

    applyPassiveSkills(){
        Log.log(`${this.id}使用被动技能========`);
        this.skillComp.applyPassiveSkills();
    }

    addBuff(buff){
        // 需要注意buff的进入回调以及状态检查
        buff.onEnter(this);
        this._buffs.push(buff);
    }

    rmBuff(buff){
        this._buffs = this._buffs.filter((e)=>e.id!==buff.id);
    }

    addBuffs(buffs){
        for(const buff of buffs){
            this.addBuff(buff);
        }
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
            return
        }
        let role = this.logicEntity
        let hurt = AtkUtils.getHurt(hurtValue, atker, this);
        const realHurt = role.changeHp(-hurt);
        // 设置统计信息
        this.logicEntity.setExtraInfo(ContextConst.EXTRA_ID.LAST_HURT_VALUE, -realHurt);
        const hurtPercent = Math.floor(-realHurt / role.getMaxHp() * 100);
        this.logicEntity.setExtraInfo(ContextConst.EXTRA_ID.LAST_HURT_PERCENT, hurtPercent);
        const energy = hurtPercent * 10;
        role.setEnergy(role.getEnergy() + energy);
        Log.log(`${this.id}受到来自${atker.id}的${hurt}点伤害,怒气值增加${energy},当前为${role.getEnergy()}`);
        this.handleEvent({
            type: 'onHurt',
            value: -realHurt
        });
        this.checkDead();
    }

    onDead(){
        this.view.active = false;
    }

    onResurrect(){
        this.view.active = true;
        this.view.opacity = 255;
        this.resumeAnim();
    }

    /**
     * 从世界中移除，并且销毁显示节点
     * @memberof ViewEntity
     */
    destroy(){
        pubfunc.getWorld().removeEntity(this.id);
        this.view.destroy();
    }

    getSize(){
        return cc.size(50, 50);
    }

    showHitEffect(effectPath){
        if(!effectPath || effectPath === ''){
            console.warn('非法的受击特效：', effectPath);
            return;
        }
        //  受击特效的位置应该在每个英雄的受击点，每个模型都需要配置受击点
        const node = new cc.Node('effect');
        node.parent = this.view;
        node.position = this.hitPoint;
        cc.loader.loadRes(effectPath, sp.SkeletonData, (err, res) => {
            if (err) {
                console.warn(effectPath, err);
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

}

export default ViewEntity;