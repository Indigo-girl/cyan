import SkillParser from '../parser/SkillParser';
import skills from '../../config/skills';
import ContextConst from '../logic/const/ContextConst';

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
        let skillId;
        if (this.owner.logicEntity.energyIsFull()){
            this.owner.logicEntity.setEnergy(0);
            skillId = this.energySkill;
        }else{
            // 根据施法条件来判定下一次的施法
            if (this.normalIndex >= this.normalSkillIds.length) {
                this.normalIndex = 0;
            }
            skillId = this.normalSkillIds[this.normalIndex];
            this.normalIndex++;
        }
        return this.getSkillById(skillId);
    }

    getSkillById(skillId){
        const skillConfig = skills[skillId];
        let configSkill = SkillParser.parse(skillConfig, this.owner);
        return configSkill;
    }

    setEnergySkill(skillId){
        this.energySkill = skillId;
    }

    setPassiveSkillIds(skillIds){
        skillIds = skillIds || [];
        this.passiveSkillIds = skillIds.slice();
    }

    applyPassiveSkills(){
        for(const id of this.passiveSkillIds){
            const skill = this.getSkillById(id);
            skill.fireBullets();
        }
    }

}

export default SkillComponent;