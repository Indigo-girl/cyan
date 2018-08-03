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

    calculate(){
        // TODO 暂时只考虑一个力
        let force = this.seek(this._target.geoInfo.pos);
        let destV = this.geoInfo.head.mul(this.geoInfo.maxSpeed).add(force);
        let head = destV.normalize();
        this.geoInfo.head = head;
    }

    update(){
        // 仅在有目标的时候进行计算，否则按照速度行进
        if(this._target && !this.geoInfo.pos.equals(this._target.geoInfo.pos)){
            this.calculate();
        }
        this.geoInfo.pos = this.geoInfo.pos.add(this.geoInfo.head.mul(this.geoInfo.maxSpeed));
    }

}

export default MoveEntity;