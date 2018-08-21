import BaseSelector from "./BaseSelector";

class ComplexSelector extends BaseSelector{

    constructor(selectors){
        super();
        this.selectors = selectors;
    }

    /**
     * 筛选方法
     * @param {ViewEntity} target
     * @param {ViewEntity} entity
     * @param {ViewWorld} world
     * @return {bool}
     * @memberof BaseSelectors
     */
    filter(target, entity, world) {
        for(const selector of this.selectors){
            if(!selector.filter(target, entity, world)){
                return false
            }
        }
        return true;
    }

}

export default ComplexSelector;