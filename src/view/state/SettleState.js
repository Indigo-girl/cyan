import BaseState from "./BaseState";

class SettleState extends BaseState{

    constructor(){
        super('settle');
    }

    onEnter(sm){
        super.onEnter(sm);
        sm.viewEntity.playAnim('wait', true);
    }
}

export default SettleState;