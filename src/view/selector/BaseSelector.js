class BaseSelector{

    constructor(){}

    /**
     * 获取目标
     * @param {ViewEntity} entity -施法者
     * @param {ViewWorld} world
     * @returns
     * @memberof BaseSelector
     */
    getTargets(entity, world){
        let targets = world.getAllEntity();
        targets = targets.filter((e)=>{
            return this.filter(e, entity, world);
        });
        return targets;
    }

    /**
     * 筛选方法
     * @param {ViewEntity} target
     * @param {ViewEntity} entity
     * @param {ViewWorld} world
     * @return {bool}
     * @memberof BaseSelector
     */
    filter(target, entity, world){
        return true;
    }

}

export default BaseSelector;