import MoveEntity from '../../logic/entity/MoveEntity';
import Vec2 from '../../logic/utils/vec2';
import GeoInfo from '../../logic/info/GeoInfo';

const geo1 = new GeoInfo(new Vec2(0, 0), new Vec2(0, 1), 10);
const geo2 = new GeoInfo(new Vec2(300, -100), new Vec2(-1, 0), 5);

const e1 = new MoveEntity(geo1);
const e2 = new MoveEntity(geo2);

e1.setTarget(e2);

let i = 0;
while(i < 30){
    e2.update();
    e1.update();
    console.log('--------------------------------');
    console.log('e2.pos:', geo2.pos.x, geo2.pos.y);
    console.log('e1.pos:', geo1.pos.x, geo1.pos.y);
    i++;
}