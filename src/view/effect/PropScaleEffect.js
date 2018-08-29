import BaseEffect from './BaseEffect';
import ScaleCalculator from '../../logic/calculator/ScaleCalculator';
import Log from '../../lib/Log';

class PropScaleEffect extends BaseEffect {

    /**
     *Creates an instance of PropScaleEffect.
     * @param {number} proId - 目标对象生效的属性ID
     * @param {number} scale
     * @param {ViewEntity} owner - 生成此效果的对象
     * @memberof PropScaleEffect
     */
    constructor(proId, scale, owner) {
        super();
        this.owner = owner;
        this.context = owner.logicEntity.getContext();
        this.scale = scale;
        this.proId = proId;
    }

    doEffect(target) {
        const roleContext = target.logicEntity.getContext();
        this.cal = new ScaleCalculator(this.proId, 1, this.scale);
        const oldValue = roleContext.getRealProp(this.proId);
        roleContext.addCalculator(this.cal);
        Log.log(`PropScaleEffect生效,属性${this.proId}:${oldValue}=>${roleContext.getRealProp(this.proId)}`);
    }

    undoEffect(target) {
        const roleContext = target.logicEntity.getContext();
        roleContext.rmCalculator(this.cal);
    }

}

export default PropScaleEffect;
