import BaseEffect from './BaseEffect';
import ContextConst from '../../logic/const/ContextConst';

class ExtraHpEffect extends BaseEffect{

    constructor(prosInfo, owner){
        super();
        this.prosInfo = prosInfo;
        this.owner = owner;
        this.hpDelta = 0;
    }

    doEffect(target){
        this.hpDelta = ContextConst.getEffectValue(this.prosInfo, target, this.owner);
        target.logicEntity.changeHp(this.hpDelta);
    }

    undoEffect(){
        target.logicEntity.changeHp(-this.hpDelta);
        this.hpDelta = 0;
    }
}

export default ExtraHpEffect;