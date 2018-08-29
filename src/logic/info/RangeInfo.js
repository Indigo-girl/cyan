class RangeInfo{

    constructor(type, info){
        this.type = type;
        // type为rect时，info:{x, y, width, height}
        // type为circle时，info:{center:v2, radius}
        // type为sector时, info:{center:v2, radius, beginDegree, endDegree}，其中beginDegree\endDegree∈[-180, 180]
        this.info = info;
    }

    inRange(pos){
        let toPos;
        switch(this.type){
            case RangeInfo.TYPE.RECT:
                if (pos.x < this.info.x) {
                    return false;
                }
                if (pos.y < this.info.y) {
                    return false;
                }
                if (pos.x > this.info.x + this.info.width) {
                    return false;
                }
                if (pos.y > this.info.y + this.info.height) {
                    return false;
                }
                return true;
            case RangeInfo.TYPE.CIRCLE:
                toPos = pos.sub(this.info.center);
                return toPos.mag() <= this.info.radius;
            case RangeInfo.TYPE.SECTOR:
                toPos = pos.sub(this.info.center);
                let dist = toPos.mag();
                if (dist > this.info.radius) {
                    return false;
                }
                let degree = Math.atan(toPos.y / toPos.x) / Math.PI * 180;
                if (toPos.x < 0 && degree < 0) {
                    degree = 180 + degree;
                } else if (toPos.x < 0 && degree > 0) {
                    degree = degree - 180;
                }
                return degree >= this.info.beginDegree && degree <= this.info.endDegree;
        }
        return false;
    }
}

RangeInfo.TYPE = {
    RECT: 0,
    CIRCLE: 1,
    SECTOR: 2
}

export default RangeInfo;