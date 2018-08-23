import BaseEffect from './BaseEffect';
import ContextConst from '../../logic/const/ContextConst';

class HurtEffect extends BaseEffect{

    constructor(base, prosInfo, scaleInfo, owner){
        super();
        this.owner = owner;
        this.base = base || 0;
        this.prosInfo = prosInfo || [];
        this.scaleInfo = scaleInfo || [];
        this.delta = 0;
    }

    doEffect(target){
        const proValue = ContextConst.getEffectValue(this.prosInfo, target, this.owner);
        const scaleValue = ContextConst.getEffectValue(this.scaleInfo, target, this.owner);
        this.delta = Math.floor((this.base + proValue) * scaleValue / 1000);
        console.log(`${this.owner.id}对${target.id}造成base:${this.base},pro:${proValue},scale:${scaleValue}，最终伤害为：${this.delta}`);
        target.logicEntity.changeHp(-this.delta);
    }

    undoEffect(target){
        target.logicEntity.changeHp(this.delta);
    }

}

export default HurtEffect;