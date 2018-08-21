class BaseEffect{

    constructor(){
    }

    /**
     * @param {ViewEntity} target
     * @memberof BaseEffect
     */
    doEffect(target){
        throw new Error('implement it');
    }

    /**
     * @param {ViewEntity} target
     * @memberof BaseEffect
     */
    undoEffect(target){
        throw new Error('implement it');
    }

}

export default BaseEffect;