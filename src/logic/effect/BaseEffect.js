class BaseEffect{

    constructor(){
    }

    doEffect(target){
        throw new Error('implement it');
    }

    undoEffect(target){
        throw new Error('implement it');
    }

}

export default BaseEffect;