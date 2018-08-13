import BaseEffect from './BaseEffect';

class HpEffect extends BaseEffect{

    constructor(value){
        super();
        this.delta = value;
    }

    doEffect(target){
        console.log('do hp effect:', this.delta);
        target.changeHp(this.delta);
    }

    undoEffect(target){
        target.changeHp(-this.delta);
    }
}

export default HpEffect;