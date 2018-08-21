import StateMachine from './state/StateMachine';
import MoveComponent from './MoveComponent';
import SkillFactory from './skill/SkillFactory';
import pubfunc from '../logic/utils/pubfunc';

class ViewEntity{

    constructor(entity, spinePath, stateConfig){
        this.id = entity.id;
        this.logicEntity = entity;
        entity.viewEntity = this;
        // for test
        this._initState = stateConfig.initState || 'idle';
        this.sm = new StateMachine(this, stateConfig);
        this._initView(spinePath);
        this.moveComp = new MoveComponent(this);
        // 子弹需要在索敌的时候就准备
        this._bullets = [];
        this._direct = -1;
    }

    _initView(spinePath){
        const node = new cc.Node(this.id);
        this.view = node;
        cc.loader.loadRes(spinePath, sp.SkeletonData, (err, res) => {
            if(err){
                console.err(err);
                return;
            }
            const skeleton = node.addComponent(sp.Skeleton);
            skeleton.skeletonData = res;
            skeleton.loop = true;
            skeleton.setToSetupPose();
            skeleton.premultipliedAlpha = false;
            skeleton.setCompleteListener(() => this.onAnimCompleted());
            this.sm.changeState(this._initState);
        });
    }

    onAnimCompleted(){
        this.handleEvent({ type: 'animCompleted'});
    }

    update() {
        this.sm.update();
    }

    playAnim(name, loop) {
        this.view.getComponent(sp.Skeleton).setAnimation(0, name, !!loop);
    }
    
    pauseAnim() {
        this.view.getComponent(sp.Skeleton).paused = true;
    }

    resumeAnim() {
        this.view.getComponent(sp.Skeleton).paused = false;
    }

    // vec2.x>0为x轴方向
    setHead(dir){
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
        // TODO 逻辑坐标和显示坐标转换
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

    handleEvent(event){
        this.sm.handleEvent(event);
    }

    isAlive(){
        return this.logicEntity.isAlive();
    }

    nextSkill(){
        // TODO 这里仅作为测试，应当读取配置生成技能
        const skill = SkillFactory.getHurtSkill(this, 100, 500);
        this._curSkill = skill;
        return skill;
    }

    getCurSkill(){
        return this._curSkill;
    }

    castSkill(){
        if(!this._curSkill){
            throw new Error('需要预先执行nextSkill');
        }
        this._curSkill.fireBullets(40);
    }

    addBuffs(buffs){
        // TODO buff应该在表现层存在ViewBuff，这个之后实现
        // this.logicEntity.addBuffs(buffs);
    }

    doEffects(effects){
        this.logicEntity.doEffects(effects);
        this.checkDead();
    }

    checkDead(){
        if(!this.isAlive()){
            this.handleEvent({
                type: 'dead'
            });
        }
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

}

export default ViewEntity;