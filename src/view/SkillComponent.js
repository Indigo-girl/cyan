/**
 * 技能组件
 * 用于控制技能的注册和实例化
 * @class SkillComponent
 */
class SkillComponent{
    /**
     * Creates an instance of SkillComponent.
     * @param {ViewEntity} owner
     * @memberof SkillComponent
     */
    constructor(owner){
        this.owner = owner;
    }

    addSkill(skillInfo){
        
    }

    removeSkill(skillId){

    }

    nextSkill(){
        // 根据施法条件来判定下一次的施法
    }

}

export default SkillComponent;