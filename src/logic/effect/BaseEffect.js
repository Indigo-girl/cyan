class BaseEffect{

    constructor(){
    }

    do(target){
        throw new Error('implement it');
    }

    undo(target){
        throw new Error('implement it');
    }

}

export default BaseEffect;