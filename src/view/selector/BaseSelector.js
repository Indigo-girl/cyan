class BaseSelector{

    constructor(){}

    /**
     * 获取目标。模板方法，请不要重写
     * @param {ViewEntity} entity -施法者
     * @param {ViewBullet} bullet
     * @param {ViewWorld} world
     * @returns
     * @memberof BaseSelector
     */
    getTargets(entity, bullet, world){
        let targets = world.getAllEntity();
        targets = targets.filter((e)=>{
            return this.filter(e, entity, bullet, world);
        });
        targets = this.sort(targets, entity);
        targets = this.truncate(targets);
        return targets;
    }

    /**
     * 筛选方法
     * @param {ViewEntity} target
     * @param {ViewEntity} entity
     * @param {ViewBullet} bullet
     * @param {ViewWorld} world
     * @return {bool}
     * @memberof BaseSelector
     */
    filter(target, entity, bullet, world){
        return true;
    }

    /**
     * 对目标进行排序
     * @param {Array.<ViewEntity>} targets
     * @param {ViewEntity} atker
     * @return {Array.<ViewEntity>}
     * @memberof BaseSelector
     */
    sort(targets, atker){
        return targets;
    }

    /**
     * 截取前面的目标
     * @param {Array.<ViewEntity>} targets
     * @return {Array.<ViewEntity>}
     * @memberof BaseSelector
     */
    truncate(targets){
        return targets;
    }

}

export default BaseSelector;