import SkillParser from '../parser/SkillParser';
import skills from '../../config/skills';
import Log from '../lib/Log';
import CONTEXT_CONST from '../logic/const/ContextConst';
import GAME_CONST from '../GameConst';

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
        this._skillCdInfo = {};
    }

    setNormalSkills(skillIds, index){
        skillIds = skillIds || [];
        this.normalSkillIds = skillIds.slice();
        this.normalIndex = index || 0;
        skillIds.forEach(e => {
            this._initSkillCdInfoById(e);
        });
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
        this._initSkillCdInfoById(skillId);
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
                if (this.normalSkillIds.find((e) => e === id)) {
                    return true;
                } else {
                    return false;
                }
            case CONTEXT_CONST.SKILL_TYPE.ENERGY:
                return id === this.energySkill;
            case CONTEXT_CONST.SKILL_TYPE.PASSIVE:
                if (this.passiveSkillIds.find((e) => e === id)) {
                    return true;
                } else {
                    return false;
                }
            default:
                break;
        }
        return false;
    }

    update(){
        this._refreshSkillCd();
    }

    _initSkillCdInfoById(skillId){
        const skillConfig = skills[skillId];
        this._skillCdInfo[skillId] = skillConfig.firstCd;
    }

    _resetSkillCdInfoById(skillId){
        const skillConfig = skills[skillId];
        this._skillCdInfo[skillId] = skillConfig.cd;
    }

    _refreshSkillCd(){
        Object.keys(this._skillCdInfo).forEach(key=>this._skillCdInfo[key]-=1/GAME_CONST.FPS);
    }

    getValidSkillIds(){
        return Object.keys(this._skillCdInfo).filter(e=>this._skillCdInfo[e]<=0);
    }

}

export default SkillComponent;