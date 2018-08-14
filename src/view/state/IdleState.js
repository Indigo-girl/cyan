import BaseState from "./BaseState";

class IdleState extends BaseState{

    constructor(){
        super('idle');
    }

    onEnter(sm){
        super.onEnter(sm);
        sm.viewEntity.playAnim('wait');
    }
    
}

export default IdleState;