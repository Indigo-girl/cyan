import SkillParser from '../parser/SkillParser';
import skills from '../../config/skills';

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

    setNormalSkills(skillIds, index){
        this.normalSkillIds = skillIds.slice();
        this.normalIndex = index || 0;
    }

    nextSkill(){
        // 根据施法条件来判定下一次的施法
        if(this.normalIndex >= this.normalSkillIds.length){
            this.normalIndex = 0;
        }
        const skillId = this.normalSkillIds[this.normalIndex];
        const skillConfig = skills[skillId];
        let configSkill = SkillParser.parse(skillConfig, this.owner);
        this.normalIndex++;
        return configSkill;
    }

}

export default SkillComponent;