import BaseEntity from './BaseEntity';
import ContextConst from '../const/ContextConst';

class RoleEntity extends BaseEntity{

    constructor(context, camp){
        super();
        context.id = this.id;
        this._contextStack = [context];
        this.setCamp(camp);
    }

    setCamp(camp) {
        this.camp = camp;
    }

    getCamp() {
        return this.camp;
    }

    isCamp(camp) {
        return this.camp === camp;
    }

    changeHp(delta){
        return this.getContext().changeHp(delta);
    }

    getHp(){
        return this.getContext().getHp();
    }

    getMaxHp(){
        return this.getContext().getMaxHp();
    }

    setMaxHp(value){
        return this.getContext().setMaxHp(value);
    }

    getEnergy(){
        return this.getRealProp(ContextConst.PRO_ID.ENERGY);
    }

    setEnergy(value){
        return this.getContext().setCostProp(ContextConst.PRO_ID.ENERGY, value);
    }

    energyIsFull(){
        const ctx = this.getContext();
        return ctx.getRealProp(ContextConst.PRO_ID.ENERGY) >= ctx.getRealProp(ContextConst.PRO_ID.MAX_ENERGY);
    }

    getRealProp(proId){
        return this.getContext().getRealProp(proId);
    }

    getBaseProp(){
        return this.getContext().getBaseProp();
    }

    getExtraProp(proId){
        return this.getContext().getExtraProp(proId);
    }

    setExtraInfo(proId, value){
        this.getContext().setExtraInfo(proId, value);
    }

    replaceContext(context){
        this._contextStack[this._contextStack.length - 1] = context;
        this.onContextChanged();
    }

    pushContext(context){
        context.id = this.id;
        this._contextStack.push(context);
        this.onContextChanged();
    }

    popContext(){
        if(this._contextStack.length > 1){
            this._contextStack.pop();
        }
    }

    getContext(){
        return this._contextStack[this._contextStack.length - 1];
    }

    onContextChanged(){
        // TODO 状态切换需要通知表现层切换模型
    }

    isAlive(){
        return this.getContext().getHp() > 0;
    }

    getLevel(){
        return this.getContext().level || 1;
    }
}

export default RoleEntity;
