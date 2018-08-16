import BaseSelector from "./BaseSelector";

class CampSelector extends BaseSelector{

    constructor(camp){
        super();
        this.camp = camp;
    }

    getTargets(entity, world){
        let targets = super.getTargets(entity, world);
        targets = targets.filter((e)=>{
            return e.logicEntity.isCamp(this.camp);
        });
        return targets;
    }

}

export default CampSelector;