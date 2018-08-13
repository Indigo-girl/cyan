import pubfunc from './utils/pubfunc';
import LogicWorld from './context/LogicWorld';
import Vec2 from './utils/vec2';
import RoleContext from './context/RoleContext';
import ContextConst from './const/ContextConst';
import RoleEntity from './entity/RoleEntity';
import HpEffect from './effect/HpEffect';
import DelayBullet from './bullet/DelayBullet';

// 初始化逻辑世界
const world = new LogicWorld({width: 100, height: 100}, 
    {width: 100, height: 100}, new Vec2(0, 0), 1);
pubfunc.setWorld(world);

const role1 = new RoleContext();
role1.init({
    [ContextConst.PRO_ID.HP]: 100,
    [ContextConst.PRO_ID.ATK]: 50,
});

const role2 = new RoleContext();
role2.init({
    [ContextConst.PRO_ID.HP]: 100,
    [ContextConst.PRO_ID.ATK]: 40,
});

world.addEntity(new RoleEntity({}, role1));
world.addEntity(new RoleEntity({}, role2));

const hurt1 = new HpEffect(-100);

const bullet = new DelayBullet({
    effects: [hurt1]
}, [role2], 0);

world.addBullet(bullet);

world.update();
world.update();
world.update();

console.log(role2.getHp());


