import Vec2 from '../utils/vec2';

// 用于描述实体在世界中的地理信息
class GeoInfo{
    constructor(pos, head, maxSpeed){
        this.pos = new Vec2(pos.x, pos.y);
        this.head = new Vec2(head.x, head.y).normalizeSelf();
        this.maxSpeed = maxSpeed || 0;
    }
}

export default GeoInfo;