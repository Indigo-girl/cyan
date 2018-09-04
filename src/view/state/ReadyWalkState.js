import BaseState from "./BaseState";

class ReadyWalkState extends BaseState{

    constructor(){
        super('readyWalk');
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

export default ReadyWalkState;