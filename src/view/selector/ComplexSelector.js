import BaseSelector from "./BaseSelector";

class ComplexSelector extends BaseSelector{

    constructor(selectors){
        super();
        this.selectors = selectors;
    }

    /**
     * 获取目标。模板方法，请不要重写
     * @param {ViewEntity} entity -施法者
     * @param {ViewWorld} world
     * @returns
     * @memberof ComplexSelector
     */
    getTargets(entity, world) {
        let targets = super.getTargets(entity, world);
        for(const selector of this.selectors){
            targets = selector.sort(targets);
        }
        for (const selector of this.selectors) {
            targets = selector.truncate(targets);
        }
        return targets;
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