import BaseSelector from "./BaseSelector";
import ContextConst from '../../logic/const/ContextConst';

class CampSelector extends BaseSelector{

    constructor(camp){
        super();
        this.camp = camp;
    }

    getTargets(entity, world){
        let targets = super.getTargets(entity, world);
        let targetCamp = this.camp;
        if(this.camp == ContextConst.CAMP.ALL){
            return targets;
        }else if(this.camp == ContextConst.CAMP.FRIEND){
            targetCamp = entity.logicEntity.getCamp();
        } else if (this.camp == ContextConst.CAMP.ENEMY) {
            targetCamp = entity.logicEntity.getCamp() === ContextConst.CAMP.PLAYER ? ContextConst.CAMP.MONSTER : ContextConst.CAMP.PLAYER;
        }
        targets = targets.filter((e)=>{
            return e.logicEntity.isCamp(targetCamp);
        });
        return targets;
    }

}

export default CampSelector;