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

    doEffect(effect){
        this.getContext().doEffect(effect);
    }

    doEffects(effects){
        this.getContext().doEffects(effects);
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
        // TODO
    }

    update(){
        
    }

    isAlive(){
        return this.getContext().getHp() > 0;
    }
}

export default RoleEntity;
