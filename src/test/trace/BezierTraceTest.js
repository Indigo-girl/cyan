import BezierTrace from '../../logic/trace/BezierTrace';
import Vec2 from '../../logic/utils/vec2';

const points = [];
points.push(new Vec2(0, 0));
points.push(new Vec2(100, 100));
points.push(new Vec2(200, 0));

const trace = new BezierTrace(points, 20);

console.log('vec2:', new Vec2(0, 5));
for(let i = 0; i < 20; i++){
    console.log(trace.nextPos());
}