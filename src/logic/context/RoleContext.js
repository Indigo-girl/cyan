import PriorityQueue from '../utils/PriorityQueue';
import limit from '../utils/RolePropLimit';
import ContextConst from '../const/ContextConst';
import Log from '../../lib/Log';

class RoleContext{

    constructor(props, info, importProps){
        this._calId = 0;
        this._cals = {};
        this._propDirty = {};
        this._realProp = {};
        this._extraInfo = {};
        this.level = info.level || 1;
        this.init(props, importProps);
    }

    init(props, importProps){
        let keys = Object.keys(props);
        for(const key of keys){
            const proId = ContextConst.PRO_ID[key];
            if(typeof proId === 'number'){
                this._setBaseProp(proId, props[key]);
            }else{
                Log.warn(`无法找到${key}对应proId`);
            }
        }
        if(importProps){
            let keys = Object.keys(importProps);
            for (const key of keys) {
                const proId = ContextConst.PRO_ID[key];
                if (typeof proId === 'number') {
                    this._setBaseProp(proId, importProps[key]);
                } else {
                    Log.warn(`无法找到${key}对应proId`);
                }
            }
        }
    }

    getExtraProp(id){
        return ContextConst.getExtraProp(id, this);
    }

    getExtraInfo(id){
        return this._extraInfo[id] || 0;
    }

    setExtraInfo(id, value){
        this._extraInfo[id] = value;
    }

    getBaseProp(id){
        return this['_prop' + id];
    }

    _setBaseProp(id, value){
        this['_prop' + id] = value;
        this._setPropDirty(id);
    }

    getRealProp(id) {
        if(ContextConst.isExtraId(id)){
            return this.getExtraProp(id);
        }
        if(ContextConst.isCostPro(id)){
            return this.getCostProp(id);
        }
        if(ContextConst.isCostMaxPro(id)){
            return this.getMaxCostProp(id);
        }
        if(this._isPropDirty(id)){
            this.updateProp(id);
        }
        return limit(id, this._realProp[id], this);
    }

    getCostProp(proId){
        let value = this.getBaseProp(proId);
        let max = this.getRealProp(ContextConst.getCostProMaxId(proId));
        value = Math.max(0, Math.min(max, value));
        return value;
    }

    setCostProp(proId, value){
        let max = this.getRealProp(ContextConst.getCostProMaxId(proId));
        value = Math.max(0, Math.min(max, value));
        this._setBaseProp(proId, value);
        return value; 
    }

    getMaxCostProp(proId){
        let value = this.getBaseProp(proId);
        return limit(proId, value, this);
    }

    setMaxCostProp(proId, value){
        const oldValue = this.getMaxCostProp(proId);
        value = limit(proId, value, this);
        this._setBaseProp(proId, value);
        const costProId = ContextConst.getMaxProCostId(proId);
        this.setCostProp(costProId, this.getCostProp(costProId) + value - oldValue);
        return value;
    }

    updateProp(proId) {
        const queue = this._getCalculatorQueue(proId);
        let base = this.getBaseProp(proId);
        let current = base;
        for(const cal of queue){
            current = cal.calculate(current, base, this);
        }
        this._realProp[proId] = current;
        Log.log(`${this.id} update proid:${proId}，value is:${current}`);
    }

    addCalculator(calculator){
        // 所有血量变更都会及时生效
        if(calculator.proId === ContextConst.PRO_ID.HP){
            let newHp = calculator(this.getHp(), this.getHp(), this);
            return this.changeHp(newHp - this.getHp());
        }
        const queue = this._getCalculatorQueue(calculator.proId);
        queue.push(calculator);
        this._setPropDirty(calculator.proId);
    }

    rmCalculator(calculator){
        const queue = this._getCalculatorQueue(calculator.proId);
        queue.filter((e)=>{
            return e.id !== calculator.id;
        });
        this._setPropDirty(calculator.proId);
    }

    getMaxHp(){
        return this.getRealProp(ContextConst.PRO_ID.MAX_HP);
    }

    setMaxHp(value){
        return this.setMaxCostProp(ContextConst.PRO_ID.MAX_HP, value);
    }

    getHp(){
        return this.getRealProp(ContextConst.PRO_ID.HP);
    }

    changeHp(delta){
        const oldHp = this.getHp();
        this.setCostProp(ContextConst.PRO_ID.HP, oldHp + delta);
        return this.getHp() - oldHp;
    }

    _getCalculatorQueue(id){
        if (!this._cals[id]) {
            this._cals[id] = new PriorityQueue();
        }
        return this._cals[id];
    }

    _setPropDirty(id){
        this._propDirty[id] = true;
    }

    _clearPropDirty(id){
        this._propDirty[id] = false;
    }

    _isPropDirty(id){
        if(this._propDirty[id]){
            return true;
        }
        const queue = this._getCalculatorQueue(id);
        for (const cal of queue) {
            if(cal.dirty){
                return true;
            }
        }
        return false;
    }

    doEffect(effect) {
        effect.doEffect(this);
    }

    doEffects(effects) {
        for (const effect of effects) {
            this.doEffect(effect);
        }
    }
}

export default RoleContext;