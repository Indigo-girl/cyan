import BaseEffect from './BaseEffect';
import ProsCalculator from '../../logic/calculator/ProsCalculator';
import Log from '../../lib/Log';

class PropDirtyEffect extends BaseEffect {

    /**
     *Creates an instance of PropDirtyEffect.
     * @param {number} proId - 目标对象生效的属性ID
     * @param {Array.<Object>} prosInfo - [{targetType: 0, proId: 1, scale: 1.5, step: 0}...]形式的数组，用于计算效果的值
     * @param {ViewEntity} owner - 生成此效果的对象
     * @memberof PropDirtyEffect
     */
    constructor(proId, prosInfo, owner) {
        super();
        this.owner = owner;
        this.context = owner.logicEntity.getContext();
        this.prosInfo = prosInfo;
        this.proId = proId;
    }

    doEffect(target) {
        const roleContext = target.logicEntity.getContext();
        this.cal = new ProsCalculator(this.proId, 1, this.prosInfo, this.context);
        const oldValue = roleContext.getRealProp(this.proId);
        roleContext.addCalculator(this.cal);
        Log.log(`PropDirtyEffect生效，${this.proId}:${oldValue}=>${roleContext.getRealProp(this.proId)}`);
    }

    undoEffect(target) {
        const roleContext = target.logicEntity.getContext();
        const oldValue = roleContext.getRealProp(this.proId);
        roleContext.rmCalculator(this.cal);
        Log.log(`PropDirtyEffect失效，${this.proId}:${oldValue}=>${roleContext.getRealProp(this.proId)}`);
    }

}

export default PropDirtyEffect;
