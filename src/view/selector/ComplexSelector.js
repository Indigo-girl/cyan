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
            targets = selector.sort(targets, entity);
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

    /**
     * 筛选方法
     * @param {ViewEntity} target
     * @param {ViewEntity} entity
     * @param {ViewBullet} bullet
     * @param {ViewWorld} world
     * @return {bool}
     * @memberof ComplexSelector
     */
    checkTarget(target, entity, bullet, world){
        let selectors = this.selectors.filter((e) => !e.isRange);
        for (const selector of selectors) {
            if (!selector.filter(target, entity, bullet, world)) {
                return false
            }
        }
        return true;
    }

    /**
     * 获取攻击位置
     * @param {ViewEntity} atker
     * @param {ViewEntity} target
     * @param {number} ratio1 -[0-1]
     * @param {number} ratio2 -[0-1]
     * @memberof ComplexSelector
     */
    getAtkPos(atker, target, ratio1, ratio2) {
        const selector = this.selectors.find((e)=>e.isRange);
        if(selector){
            return selector.getAtkPos(atker, target, ratio1, ratio2);
        }
        // 如果没有找到范围选择器则返回undefined
    }

}

export default ComplexSelector;