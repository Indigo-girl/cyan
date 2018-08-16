import StateMachine from './state/StateMachine';
import MoveComponent from './MoveComponent';
import ViewBullet from './ViewBullet';
import Bullet from '../logic/bullet/BaseBullet';
import pubfunc from '../logic/utils/pubfunc';

class ViewEntity{

    constructor(entity, spinePath, stateConfig){
        this.id = entity.id;
        this.logicEntity = entity;
        // for test
        this.sm = new StateMachine(this, stateConfig);
        this._initView(spinePath);
        this.moveComp = new MoveComponent(this);
        // 子弹需要在索敌的时候就准备
        this._bullets = [];
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
            this.sm.changeState('idle');
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
            this.view.scaleX = Math.abs(this.view.scaleX);
        }else if(dir.x > 0){
            this.view.scaleX = -Math.abs(this.view.scaleX);
        }
        this.head = dir;
    }

    getHead(){
        return this.head || cc.v2(1, 0);
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

    handleEvent(event){
        this.sm.handleEvent(event);
    }

    isAlive(){
        return this.logicEntity.isAlive();
    }

    prepareBullets(){
        // for test
        const bullet = new Bullet({});
        const viewBullet = new ViewBullet(bullet, 'DFP/DFP', cc.v2(0, 100));
        this._bullets.push(viewBullet);
        pubfunc.getWorld().addBullet(viewBullet, this);
    }

    fireBullets(delay){
        delay = delay || 0;
        for(const e of this._bullets){
            if(delay > 0){
                e.fireDelay(delay);
            }else{
                e.fire();
            }
        }
    }

}

export default ViewEntity;