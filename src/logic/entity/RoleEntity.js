import BaseEntity from './BaseEntity';

class RoleEntity extends BaseEntity{

    constructor(context){
        super();
        this._contextStack = [context];
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
        return this._context;
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
