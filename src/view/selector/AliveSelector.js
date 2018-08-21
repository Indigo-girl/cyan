import BaseSelector from "./BaseSelector";

class AliveSelector extends BaseSelector{

    constructor(alive){
        super();
        this.alive = !!alive;
    }

    /**
     * 筛选方法
     * @param {ViewEntity} target
     * @param {ViewEntity} entity
     * @param {ViewWorld} world
     * @return {bool}
     * @memberof BaseSelector
     */
    filter(target, entity, world) {
        return this.alive === !!target.isAlive();
    }

}

export default AliveSelector;