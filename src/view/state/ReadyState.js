import BaseState from "./BaseState";

class ReadyState extends BaseState{

    constructor(){
        super('ready');
    }

    onEnter(sm) {
        super.onEnter(sm);
        sm.viewEntity.playAnim('wait', true);
    }
}

export default ReadyState;