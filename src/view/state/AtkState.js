import BaseState from "./BaseState";

class AtkState extends BaseState {

    constructor() {
        super('atk');
    }

    onEnter(sm) {
        super.onEnter(sm);
        sm.viewEntity.playAnim('attack01');
    }
    
}

export default AtkState;