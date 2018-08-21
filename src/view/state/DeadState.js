import BaseState from './BaseState';

class DeadState extends BaseState {

    constructor() {
        super('dead');
    }

    onEnter(sm) {
        super.onEnter(sm);
        sm.viewEntity.pauseAnim();
        sm.viewEntity.view.runAction(cc.sequence(cc.fadeOut(2), cc.callFunc(()=>{
            sm.viewEntity.onDead();
        })));
    }

    onExit(sm){
        sm.viewEntity.onResurrect();
    }

}

export default DeadState;