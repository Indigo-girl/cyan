import BezierTrace from './BezierTrace';
import Vec2 from '../utils/vec2';

class BezierBuilder{

    /**
     * points中除start和end是真实坐标，其他都是标准化的
     * @static
     * @param {Array<vec2>} points
     * @param {number} duration -帧数
     * @memberof BezierBuilder
     */
    static getTraceFromNomalize(points, duration){
        const start = points[0];
        const end = points[points.length - 1];
        const delta = end.sub(start);
        const length = delta.mag();
        if(length<=0){
            return new BezierTrace([start, end]);
        }
        const sintheta = delta.y / length;
        const costheta = delta.x / length;
        for(let i = 1; i < points.length - 1; i++){
            const point = points[i];
            const tp = point.mul(length);
            const x = tp.x * costheta + tp.y * sintheta;
            const y = tp.x * -sintheta + tp.y * costheta;
            points[i] = new Vec2(x + start.x, y + start.y);
        }
        return new BezierTrace(points, duration);
    }

    static getTraceFRomNormal(points, duration){
        return new BezierTrace(points, duration);
    }

}

export default BezierBuilder;