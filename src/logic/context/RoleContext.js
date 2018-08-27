import PriorityQueue from '../utils/PriorityQueue';
import limit from '../utils/RolePropLimit';
import ContextConst from '../const/ContextConst';

class RoleContext{

    constructor(props){
        this._calId = 0;
        this._cals = {};
        this._propDirty = {};
        this._realProp = {};
        this.init(props);
    }

    init(props){
        const keys = Object.keys(props);
        for(const key of keys){
            const proId = ContextConst.PRO_ID[key];
            if(typeof proId === 'number'){
                this._setBaseProp(proId, props[key]);
            }else{
                console.warn(`无法找到${key}对应proId`);
            }
        } 
    }

    getExtraProp(id){
        return ContextConst.getExtraProp(id, this);
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

    updateProp(proId) {
        const queue = this._getCalculatorQueue(proId);
        let base = this.getBaseProp(proId);
        let current = base;
        for(const cal of queue){
            current = cal.calculate(current, base, this);
        }
        this._realProp[proId] = current;
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
        return this._propDirty[id];
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