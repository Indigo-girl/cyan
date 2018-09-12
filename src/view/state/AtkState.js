import BaseState from "./BaseState";

class AtkState extends BaseState {

    constructor() {
        super('atk');
    }

    onEnter(sm) {
        super.onEnter(sm);
        const skill = sm.viewEntity.getCurSkill();
        sm.viewEntity.playAnim(skill.atkAnim);
        const target = skill.getFirstTarget();
        if(target){
            sm.viewEntity.setHead(target.getPosition().sub(sm.viewEntity.getPosition()));
        }
        if(skill.backAfterAtk){
            sm.atkPos = sm.viewEntity.getPosition();
        }
        this.move(sm);
    }

    onExit(sm) {
        sm.viewEntity.view.stopAllActions();
        this.back(sm);
        super.onExit(sm);
    }

    handleEvent(event, sm){
        super.handleEvent(event, sm);
        const skill = sm.viewEntity.getCurSkill();
        switch(event.type){
            case 'fire':
                sm.viewEntity.castSkill();
                break;
            case 'up':
                this.jump(sm);
                break;
            case 'prepare':
                skill.showPrepareEffect();
                break;
        }
        // 在攻击状态中传递角色事件给子弹
        skill.handleEvent({type: `role-${event.type}`});
    }

    move(sm){
        const skill = sm.viewEntity.getCurSkill();
        if (skill.moveInfo) {
            const target = skill.getFirstTarget();
            if (!target) {
                return;
            }
            const pos = target.getPosition();
            const posTo = cc.v2(pos.x - sm.viewEntity.getDirect() * skill.moveInfo.dist, pos.y);
            sm.viewEntity.view.stopAllActions();
            sm.viewEntity.view.runAction(cc.moveTo(skill.moveInfo.duration / 30, posTo));
        }
    }

    jump(sm){
        const skill = sm.viewEntity.getCurSkill();
        if (skill.jumpInfo) {
            const target = skill.getFirstTarget();
            if (!target) {
                return;
            }
            const pos = target.getPosition();
            const posTo = cc.v2(pos.x - sm.viewEntity.getDirect() * skill.jumpInfo.dist, pos.y);
            sm.viewEntity.view.stopAllActions();
            sm.viewEntity.view.runAction(cc.jumpTo(skill.jumpInfo.duration / 30, posTo, skill.jumpInfo.height, 1));
        }
    }
    
    back(sm){
        const skill = sm.viewEntity.getCurSkill();
        if (skill.backAfterAtk) {
            sm.viewEntity.view.stopAllActions();
            sm.viewEntity.setPosition(sm.atkPos);
        }
    }
}

export default AtkState;