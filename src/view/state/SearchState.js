import BaseState from './BaseState';

// 索敌
class SearchState extends BaseState{

    constructor(){
        super('search');
    }

    onEnter(sm){
        super.onEnter(sm);
        // TODO  初始化技能/获取目标/发出移动事件
        const skill = sm.viewEntity.nextSkill();
        // const atkPos = skill.getAtkPos();
        // sm.viewEntity.handleEvent({
        //     type: 'moveToPos',
        //     detail: atkPos
        // });
        sm.viewEntity.handleEvent({
            type: 'moveInRadius',
            detail: {
                radius: skill.radius,
                target: skill.getFirstTarget(),
                alignY: true
            }
        });
    } 

}

export default SearchState;