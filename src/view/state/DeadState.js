import BaseState from './BaseState';

class DeadState extends BaseState {

    constructor() {
        super('dead');
    }

    onEnter(sm) {
        super.onEnter(sm);
        sm.viewEntity.pauseAnim();
        sm.viewEntity.view.runAction(cc.fadeOut(2));
    }

}

export default DeadState;