import BaseEntity from './BaseEntity';

class RoleEntity extends BaseEntity{

    constructor(geoInfo, context){
        super(geoInfo);
        this.setContext(context);
    }

    setContext(context){
        this._context = context;
    }

    getContext(){
        return this._context;
    }

    update(){
        
    }

    isAlive(){
        return this.getContext().getHp() > 0;
    }
}

export default RoleEntity;
