import BaseSelector from "./BaseSelector";
import ContextConst from '../../logic/const/ContextConst';

class CampSelector extends BaseSelector{

    /**
     * Creates an instance of CampSelector.
     * @param {ContextConst.CAMP} camp
     * @memberof CampSelector
     */
    constructor(camp){
        super();
        this.camp = camp;
    }

    /**
     * 筛选方法
     * @param {ViewEntity} target
     * @param {ViewEntity} entity
     * @return {bool}
     * @memberof CampSelector
     */
    filter(target, entity) {
        let targetCamp = this.camp;
        if (this.camp == ContextConst.CAMP.ALL) {
            return true;
        } else if (this.camp == ContextConst.CAMP.FRIEND) {
            targetCamp = entity.logicEntity.getCamp();
        } else if (this.camp == ContextConst.CAMP.ENEMY) {
            targetCamp = entity.logicEntity.getCamp() === ContextConst.CAMP.PLAYER ? ContextConst.CAMP.MONSTER : ContextConst.CAMP.PLAYER;
        } else if (this.camp === ContextConst.CAMP.SELF ){
            return target === entity;
        }
        return target.logicEntity.isCamp(targetCamp);
    }

}

export default CampSelector;