import BaseState from "./BaseState";

class AtkState extends BaseState {

    constructor() {
        super('atk');
    }

    onEnter(sm) {
        super.onEnter(sm);
        const skill = sm.viewEntity.getCurSkill();
        sm.viewEntity.playAnim(skill.atkAnim);
        
    }

    onExit(sm) {
        const skill = sm.viewEntity.getCurSkill();
        if(skill.jumpInfo){
            sm.viewEntity.view.stopAllActions();
        }
        super.onExit(sm);
    }

    handleEvent(event, sm){
        super.handleEvent(event, sm);
        const skill = sm.viewEntity.getCurSkill();
        switch(event.type){
            case 'fire':
                sm.viewEntity.castSkill();
                break;
            case 'jump':
                if (skill.jumpInfo) {
                    const pos = skill.getFirstTarget().getPosition();
                    const posTo = cc.v2(pos.x - sm.viewEntity.getDirect() * skill.jumpInfo.dist, pos.y);
                    sm.viewEntity.view.runAction(cc.moveTo(skill.jumpInfo.duration / 30, posTo));
                }
                break;
            case 'prepare':
                skill.showPrepareEffect();
                break;
        }
    }
    
}

export default AtkState;