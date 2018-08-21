import BaseEffect from "./BaseEffect";

class ResurrectEffect extends BaseEffect{

    constructor(){
        super();
    }

    doEffect(target){
        target.handleEvent({
            type: 'resurrect'
        });
    }

    undoEffect(target){
        console.error("复活不可以被撤销");
    }

}

export default ResurrectEffect;