import Calculator from './Calculator';
import CONTEXT_CONST from '../const/ContextConst';

class ProsCalculator extends Calculator {

    /**
     *Creates an instance of ProsCalculator.
     * @param {number} proId
     * @param {number} seq
     * @param {Object} prosInfo
     * @param {RoleContext} caster
     * @memberof ProsCalculator
     */
    constructor(proId, seq, prosInfo, caster) {
        super(proId, seq);
        this.prosInfo = prosInfo || [];
        this.dirty = true;
        this.caster = caster;
    }

    calculate(current, origin, target) {
        return current + CONTEXT_CONST.getProsInfoValue(this.prosInfo, target, this.caster);
    }

}

export default ProsCalculator;