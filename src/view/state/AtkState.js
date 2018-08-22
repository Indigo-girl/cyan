import BaseState from "./BaseState";

class AtkState extends BaseState {

    constructor() {
        super('atk');
    }

    onEnter(sm) {
        super.onEnter(sm);
        const skill = sm.viewEntity.getCurSkill();
        sm.viewEntity.playAnim(skill.atkAnim);
        sm.viewEntity.castSkill();
    }
    
}

export default AtkState;