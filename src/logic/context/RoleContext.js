import PriorityQueue from '../utils/PriorityQueue';
import limit from '../utils/RolePropLimit';

class RoleContext{

    constructor(){
        this._calId = 0;
        this._cals = {};
        this._propDirty = {};
        this._realProp = {};
    }

    getBaseProp(id){
        return this['_prop' + id];
    }

    _setBaseProp(id, value){
        this['_prop' + id] = value;
        this._setPropDirty(id);
    }

    getRealProp(id) {
        if(this._isPropDirty(id)){
            this.updateProp(id);
        }
        return limit(id, this._realProp[id], this);
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
}

export default RoleContext;