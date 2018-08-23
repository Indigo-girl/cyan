import BaseEntity from './BaseEntity';

class RoleEntity extends BaseEntity{

    constructor(context, camp){
        super();
        this._contextStack = [context];
        this.setCamp(camp);
    }

    setCamp(camp) {
        this.camp = camp;
    }

    getCamp(camp) {
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

    getRealProp(proId){
        return this.getContext().getRealProp(proId);
    }

    getBaseProp(){
        return this.getContext().getBaseProp();
    }

    getExtraProp(proId){
        return this.getContext().getExtraProp(proId);
    }

    replaceContext(context){
        this._contextStack[this._contextStack.length - 1] = context;
        this.onContextChanged();
    }

    pushContext(context){
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
}

export default RoleEntity;
