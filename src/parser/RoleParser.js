import RoleContext from '../logic/context/RoleContext';
import RoleEntity from '../logic/entity/RoleEntity';
import ViewEntity from '../view/ViewEntity';
import stateConfig from '../../config/stateConfig';

class RoleParser{

    parse(config, info){
        const context = new RoleContext(config.props, info.level);
        const logicEntity = new RoleEntity(context, info.camp);
        const entity = new ViewEntity(logicEntity, {
            spinePath: config.spinePath,
            skin: config.skin,
            scale: config.scale,
            hitPoint: cc.v2(config.hitPoint.x, config.hitPoint.y)
        }, stateConfig[config.stateTrans]);
        entity.setNormalSkillIds(config.skills);
        entity.setEnergySkillId(config.energySkill);
        entity.setPassiveSkillIds(config.passiveSkills);
        return entity;
    }

}

const parser = new RoleParser();

export default parser;