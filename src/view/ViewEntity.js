import StateMachine from './state/StateMachine';

class ViewEntity{

    constructor(entity, spinePath, parent){
        this.id = entity.id;
        this.logicEntity = entity;
        // for test
        this.sm = new StateMachine(this, {
            'walk': {
                'animCompleted': 'atk'
            },
            'atk': {
                'animCompleted': 'walk'
            }
        });
        this.parent = parent;
        this._initView(spinePath);
    }

    _initView(spinePath){
        cc.loader.loadRes(spinePath, sp.SkeletonData, (err, res) => {
            if(err){
                console.err(err);
                return;
            }
            const node = new cc.Node(this.id);
            const skeleton = node.addComponent(sp.Skeleton);
            skeleton.skeletonData = res;
            skeleton.loop = true;
            skeleton.setToSetupPose();
            skeleton.premultipliedAlpha = false;
            this.view = node;
            node.parent = this.parent;
            skeleton.setCompleteListener(() => this.onAnimCompleted());
            this.sm.changeState('walk');
        });
    }

    onAnimCompleted(){
        this.sm.handleEvent({ type: 'animCompleted'});
    }

    update() {
        this.sm.update();
    }

    playAnim(name, loop) {
        this.view.getComponent(sp.Skeleton).setAnimation(0, name, !!loop);
    }
}

export default ViewEntity;