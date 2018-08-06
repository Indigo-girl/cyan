import RangeInfo from '../../logic/info/RangeInfo';
import Vec2 from '../../logic/utils/vec2';

const rect = new RangeInfo(RangeInfo.TYPE.RECT, {
    x: 0,
    y: 0,
    width: 100,
    height: 100
});

console.log('inRect:', 50, 50, rect.inRange(new Vec2(50, 50)));
console.log('inRect:', 100, 200, rect.inRange(new Vec2(100, 200)));

const circle = new RangeInfo(RangeInfo.TYPE.CIRCLE, {
    center: new Vec2(0, 0),
    radius: 100
});

console.log('inCircle:', 50, 50, circle.inRange(new Vec2(50, 50)));
console.log('inCircle:', 100, 10, circle.inRange(new Vec2(100, 10)));

const sector = new RangeInfo(RangeInfo.TYPE.SECTOR, {
    center: new Vec2(0, 0),
    radius: 100,
    beginDegree: -90,
    endDegree: 90
});

console.log('inSector:', -50, 50, sector.inRange(new Vec2(-50, 50)));
console.log('inSector:', 100, 0, sector.inRange(new Vec2(100, 0)));