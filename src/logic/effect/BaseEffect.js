class BaseEffect{

    constructor(){
    }

    /**
     * @param {RoleContext} target
     * @memberof BaseEffect
     */
    doEffect(target){
        throw new Error('implement it');
    }

    /**
     * @param {RoleContext} target
     * @memberof BaseEffect
     */
    undoEffect(target){
        throw new Error('implement it');
    }

}

export default BaseEffect;