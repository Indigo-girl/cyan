import PriorityQueue from '../utils/PriorityQueue';
import limit from '../utils/RolePropLimit';
import ContextConst from '../const/ContextConst';

class RoleContext{

    constructor(){
        this._calId = 0;
        this._cals = {};
        this._propDirty = {};
        this._realProp = {};
    }

    init(props){
        const ids = Object.keys(props);
        for(const proId of ids){
            this._setBaseProp(proId, props[proId]);
        }
    }

    getBaseProp(id){
        return this['_prop' + id];
    }

    _setBaseProp(id, value){
        this['_prop' + id] = value;
        this._setPropDirty(id);
    }

    getRealProp(id) {
        if(id === ContextConst.PRO_ID.HP){
            return this.getHp();
        }
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
        return this.getRealProp(ContextConst.PRO_ID.MAXHP);
    }

    getHp(){
        return this.getBaseProp(ContextConst.PRO_ID.HP);
    }

    changeHp(delta){
        if(delta < 0 && delta < -this.getHp()){
            delta = - this.getHp();
        }else if(delta > 0 && this.getHp() + delta > this.getMaxHp()){
            delta = this.getMaxHp() - this.getHp();
        }
        this._setBaseProp(ContextConst.PRO_ID.HP, this.getHp() + delta);
        return delta;
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

    handleEvent(event){
        if(this.viewEntity){
            this.viewEntity.handleEvent(event);
        }else{
            console.warn("没有绑定的ViewEntity用于处理事件:", event);
        }
    }
}

export default RoleContext;