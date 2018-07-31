import BaseEntity from './BaseEntity';

class MoveEntity extends BaseEntity{

    constructor(geoInfo){
        super();
        this.geoInfo = geoInfo;
    }

    move(trace){
        
    }

}

export default MoveEntity;