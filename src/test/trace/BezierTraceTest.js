import BezierTrace from '../../logic/trace/BezierTrace';
import BezierBuilder from '../../logic/trace/BezierBuilder';
import Vec2 from '../../logic/utils/vec2';

const points = [];
points.push(new Vec2(0, 0));
points.push(new Vec2(100, 100));
points.push(new Vec2(200, 0));

let trace = new BezierTrace(points, 20);

console.log('direct trace print:');
for(let i = 0; i < 20; i++){
    console.log(trace.nextPos());
}

points[1] = new Vec2(0.5, 0.5);
trace = BezierBuilder.getTraceFromNomalize(points, 20);
console.log('builder trace print:');
for (let i = 0; i < 20; i++) {
    console.log(trace.nextPos());
}