import BaseState from "./BaseState";

class AtkState extends BaseState {

    constructor() {
        super('atk');
    }

    onEnter(sm) {
        super.onEnter(sm);
        const skill = sm.viewEntity.getCurSkill();
        sm.viewEntity.playAnim(skill.atkAnim);
        if(skill.jumpInfo){ 
            const pos = skill.getFirstTarget().getPosition();
            const posTo = cc.v2(pos.x - sm.viewEntity.getDirect() * skill.jumpInfo.dist, pos.y);
            console.log('jump info:', skill.jumpInfo, posTo);
            sm.viewEntity.view.runAction(cc.moveTo(skill.jumpInfo.duration / 30, posTo));
        }
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
        if(event.type === 'fire'){
            sm.viewEntity.castSkill();
        }
    }
    
}

export default AtkState;