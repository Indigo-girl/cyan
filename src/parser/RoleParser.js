import RoleContext from '../logic/context/RoleContext';
import RoleEntity from '../logic/entity/RoleEntity';
import ViewEntity from '../view/ViewEntity';
import stateConfig from '../../config/stateConfig';

class RoleParser{

    parse(config, camp){
        const context = new RoleContext(config.props);
        const logicEntity = new RoleEntity(context, camp);
        const entity = new ViewEntity(logicEntity, {
            spinePath: config.spinePath,
            skin: config.skin,
            scale: config.scale
        }, stateConfig[config.stateTrans]);
        entity.setNormalSkillIds(config.skills);
        entity.setEnergySkillId(config.energySkill);
        return entity;
    }

}

const parser = new RoleParser();

export default parser;