import StateMachine from './state/StateMachine';
import MoveComponent from './MoveComponent';

class ViewEntity{

    constructor(entity, spinePath, parent){
        this.id = entity.id;
        this.logicEntity = entity;
        // for test
        this.sm = new StateMachine(this, {
            'idle': {
                'moveToPos': 'walk'
            },
            'walk': {
                'reachAtkArea': 'idle'
            },
            'atk': {
                'animCompleted': 'walk'
            },
            'dead': {}
        });
        this.parent = parent;
        this._initView(spinePath);
        this.moveComp = new MoveComponent(this);
    }

    _initView(spinePath){
        const node = new cc.Node(this.id);
        this.view = node;
        node.parent = this.parent;
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

}

export default ViewEntity;