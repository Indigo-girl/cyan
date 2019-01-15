import SkillParser from '../parser/SkillParser';
import skills from '../../config/skills';
import Log from '../lib/Log';
import CONTEXT_CONST from '../logic/const/ContextConst';

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
        this.passiveSkillIds = [];
        this.normalSkillIds = [];
    }

    setNormalSkills(skillIds, index){
        skillIds = skillIds || [];
        this.normalSkillIds = skillIds.slice();
        this.normalIndex = index || 0;
    }

    nextSkill(){
        let skillId;
        if (this.owner.logicEntity.energyIsFull()){
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
        if(!skillConfig){
            console.error(`找不到技能:${skillId}的配置`);
        }
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
            Log.log(`${this.owner.id}使用被动技能${id}`);
            const skill = this.getSkillById(id);
            skill.fireBullets();
        }
    }

    isSkillType(id, type){
        switch (type) {
            case CONTEXT_CONST.SKILL_TYPE.NORMAL:
                if (this.normalSkillIds.find((e) => e == id)) {
                    return true;
                } else {
                    return false;
                }
            case CONTEXT_CONST.SKILL_TYPE.ENERGY:
                return id == this.energySkill;
            case CONTEXT_CONST.SKILL_TYPE.PASSIVE:
                if (this.passiveSkillIds.find((e) => e == id)) {
                    return true;
                } else {
                    return false;
                }
            default:
                break;
        }
        return false;
    }

}

export default SkillComponent;