import BaseState from './BaseState';
import Log from '../../lib/Log';

// 索敌
class SearchState extends BaseState{

    constructor(){
        super('search');
    }

    onEnter(sm){
        super.onEnter(sm);
        // TODO  初始化技能/获取目标/发出移动事件
        const skill = sm.viewEntity.nextSkill();
        const firstTarget = skill.getFirstTarget()
        if(firstTarget){
            Log.log(sm.viewEntity.id, 'search target is:', firstTarget.id, firstTarget.logicEntity.getHp());
            sm.viewEntity.handleEvent({
                type: 'moveForSkill',
                detail: {
                    target: firstTarget,
                    skill: skill
                }
            });
        }else{
            sm.viewEntity.handleEvent({
                type: 'targetNotFound'
            });
        }
    } 

}

export default SearchState;