import Vec2 from '../utils/vec2';

// 用于描述实体在世界中的地理信息
class GeoInfo{
    constructor(pos, head, maxSpeed){
        this.pos = pos || new Vec2();
        this.head = head || new Vec2();
        this.maxSpeed = maxSpeed || 0;
    }
}

export default GeoInfo;