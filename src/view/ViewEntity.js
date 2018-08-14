import StateMachine from './state/StateMachine';

class ViewEntity{

    constructor(entity, spinePath){
        this.id = entity.id;
        this.logicEntity = entity;
        this.sm = new StateMachine();
        this._initView();
    }

    _initView(){
        const node = new cc.Node(this.id);
        const skeleton = node.addComponent(sp.Skeleton);
        skeleton.skeletonData = spinePath;
        skeleton.loop = true;
        skeleton.setToSetupPose();
        skeleton.premultipliedAlpha = false;
        this.view = node;
        skeleton.setCompleteListener(() => this.onAnimCompleted());
    }

    onAnimCompleted(){
        this.sm.handleEvent({ type: 'animCompleted'});
    }

}

export default ViewEntity;