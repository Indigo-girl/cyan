import BaseState from "./BaseState";

class WalkState extends BaseState {

    constructor() {
        super('walk');
    }

    onEnter(sm) {
        super.onEnter(sm);
        sm.viewEntity.playAnim('walk', true);
    }

    update(sm) {
        // update移动组件
        sm.viewEntity.moveComp.update();
    } 
}

export default WalkState;