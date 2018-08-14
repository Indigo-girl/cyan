import BaseState from "./BaseState";

class WalkState extends BaseState {

    constructor() {
        super('walk');
    }

    onEnter(sm) {
        super.onEnter(sm);
        sm.viewEntity.playAnim('walk');
    }

    update(sm) {
        // 向指定方向移动
        sm.viewEntity.view.x += 1;
    } 
}

export default WalkState;