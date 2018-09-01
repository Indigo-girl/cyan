import BaseEffect from './BaseEffect';
import ContextConst from '../../logic/const/ContextConst';
import Log from '../../lib/Log';

class ExtraHpEffect extends BaseEffect{

    constructor(prosInfo, owner){
        super();
        this.prosInfo = prosInfo;
        this.owner = owner;
        this.hpDelta = 0;
    }

    doEffect(target){
        this.hpDelta = ContextConst.getEffectValue(this.prosInfo, target, this.owner);
        const oldValue = target.logicEntity.getHp();
        target.logicEntity.changeHp(this.hpDelta);
        Log.log(`ExtraHpEffect生效，hp:${oldValue}=>${target.logicEntity.getHp()}`);
    }

    undoEffect(){
        target.logicEntity.changeHp(-this.hpDelta);
        this.hpDelta = 0;
    }
}

export default ExtraHpEffect;