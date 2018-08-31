import BaseState from './BaseState';
import Log from '../../lib/Log';

// 索敌
class ResearchState extends BaseState {

    constructor() {
        super('research');
    }

    onEnter(sm) {
        super.onEnter(sm);
        // 初始化技能/获取目标/发出移动事件
        const skill = sm.viewEntity.getCurSkill();
        const firstTarget = skill.getFirstTarget()
        if (firstTarget) {
            Log.log(sm.viewEntity.id, 'search target is:', firstTarget.id, firstTarget.logicEntity.getHp());
            sm.viewEntity.handleEvent({
                type: 'moveInRadius',
                detail: {
                    radius: skill.radius,
                    target: firstTarget,
                    alignY: true
                }
            });
        } else {
            sm.viewEntity.handleEvent({
                type: 'targetNotFound'
            });
        }
    }

}

export default ResearchState;