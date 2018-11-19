import RoleContext from '../logic/context/RoleContext';
import RoleEntity from '../logic/entity/RoleEntity';
import ViewEntity from '../view/ViewEntity';
import stateConfig from '../../config/stateConfig';
import CONTEXT_CONST from '../logic/const/ContextConst';

class RoleParser{

    parse(config, info, importInfo){
        const importProps = importInfo && importInfo.props || {};
        const context = new RoleContext(config.props, info.level, importProps);
        const logicEntity = new RoleEntity(context, info.camp);
        const entity = new ViewEntity(logicEntity, {
            spinePath: config.spinePath,
            skin: config.skin,
            scale: config.scale,
            hitPoint: cc.v2(config.hitPoint.x, config.hitPoint.y)
        }, stateConfig[config.stateTrans]);
        entity.setNormalSkillIds(config.skills);
        const energySkill = importInfo && importInfo.skills.find((e)=>e.skillType==CONTEXT_CONST.SKILL_TYPE.ENERGY);
        if(energySkill){
            entity.setEnergySkillId(energySkill.id);
        }else{
            console.error(`没有发现HeroId:${config.id}的怒气技能`);
        }
        const passiveSkillIds = importInfo && importInfo.skills.filter((e)=>e.skillType==CONTEXT_CONST.SKILL_TYPE.PASSIVE).map((e)=>e.id);
        entity.setPassiveSkillIds(passiveSkillIds);
        entity.configId = config.id;
        return entity;
    }

}

const parser = new RoleParser();

export default parser;