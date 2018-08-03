import BaseEntity from './BaseEntity';

class MoveEntity extends BaseEntity{

    constructor(geoInfo){
        super(geoInfo);
    }

    setTarget(target){
        this._target = target;
    }

    seek(pos){
        let geo = this.geoInfo;
        let desireHead = pos.sub(geo.pos).normalizeSelf();
        let desireSpeed = desireHead.mul(geo.maxSpeed);
        let force = desireSpeed.sub(geo.head.mul(geo.maxSpeed));
        return force;
    }

    getCombinForce(){
        // let force = this.seek(this._target.geoInfo.pos);
        // return force;
    }

    calculate(force){
        let destV = this.geoInfo.head.mul(this.geoInfo.maxSpeed).add(force);
        let head = destV.normalize();
        this.geoInfo.head = head;
    }

    update(){
        this.geoInfo.pos = this.geoInfo.pos.add(this.geoInfo.head.mul(this.geoInfo.maxSpeed));
    }

}

export default MoveEntity;