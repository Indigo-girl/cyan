import BaseEffect from './BaseEffect';
import Log from '../../lib/Log';

class HpEffect extends BaseEffect{

    constructor(value){
        super();
        this.delta = value;
    }

    doEffect(target){
        Log.log('do hp effect:', this.delta);
        target.logicEntity.changeHp(this.delta);
    }

    undoEffect(target){
        target.logicEntity.changeHp(-this.delta);
    }
}

export default HpEffect;