import BaseEffect from './BaseEffect';

class HpEffect extends BaseEffect{

    constructor(value){
        super();
        this.delta = value;
    }

    doEffect(target){
        console.log('do hp effect:', this.delta);
        const roleContext = target.logicEntity.getContext();
        roleContext.changeHp(this.delta);
    }

    undoEffect(target){
        const roleContext = target.logicEntity.getContext();
        roleContext.changeHp(-this.delta);
    }
}

export default HpEffect;