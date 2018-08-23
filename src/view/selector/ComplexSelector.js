import BaseSelector from "./BaseSelector";

class ComplexSelector extends BaseSelector{

    constructor(selectors){
        super();
        this.selectors = selectors;
    }

    /**
     * 获取目标。模板方法，请不要重写
     * @param {ViewEntity} entity -施法者
     * @param {ViewBullet} bullet
     * @param {ViewWorld} world
     * @param {bool} excludeRange -是否排除范围选择器
     * @returns
     * @memberof ComplexSelector
     */
    getTargets(entity, bullet, world, excludeRange) {
        this.excludeRange = !!excludeRange;
        let targets = super.getTargets(entity, bullet, world, excludeRange);
        let selectors = this.selectors;
        if (this.excludeRange) {
            selectors = selectors.filter((e) => { return !e.isRange;});
        }
        for (const selector of selectors){
            targets = selector.sort(targets);
        }
        for (const selector of selectors) {
            targets = selector.truncate(targets);
        }
        return targets;
    }

    /**
     * 筛选方法
     * @param {ViewEntity} target
     * @param {ViewEntity} entity
     * @param {ViewBullet} bullet
     * @param {ViewWorld} world
     * @return {bool}
     * @memberof ComplexSelector
     */
    filter(target, entity, bullet, world) {
        let selectors = this.selectors;
        if (this.excludeRange) {
            selectors = selectors.filter((e) => !e.isRange);
        }
        for(const selector of selectors){
            if(!selector.filter(target, entity, bullet, world)){
                return false
            }
        }
        return true;
    }

}

export default ComplexSelector;