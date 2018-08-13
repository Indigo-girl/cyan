import BaseEffect from './BaseEffect';
import AddCalculator from '../calculator/AddCalculator';

const TARGET_TYPE = {
    OWNER: 0,
    TARGET: 1
};

class PropEffect extends BaseEffect {

    /**
     *Creates an instance of PropEffect.
     * @param {number} proId - 目标对象生效的属性ID
     * @param {RoleEntity} owner - 生成此效果的对象
     * @param {Array.<Object>} info - [{targetType: 0, proId: 1, scale: 1.5}...]形式的数组，用于计算效果的值
     * @memberof PropEffect
     */
    constructor(proId, owner, info) {
        this.owner = owner;
        this.info = info;
        this.proId = proId;
    }

    doEffect(target) {
        let value = this.calculateValue(target);
        this.cal = new AddCalculator(this.proId, 1, value);
        target.addCalculator(this.cal);
    }

    undoEffect(target){
        target.rmCalculator(this.cal);
    }

    calculateValue(target) {
        let total = 0;
        for (const item of this.info) {
            let context;
            switch (item[0]) {
            case TARGET_TYPE.OWNER:
                context = this.owner;
                break;
            case TARGET_TYPE.TARGET:
                context = target;
                break;
            }
            const delta = context.getRealProp(item.proId) * item.scale;
            total += delta;
        }
        return total;
    }

}

PropEffect.TARGET_TYPE = TARGET_TYPE;

export default PropEffect;
