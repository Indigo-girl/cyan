import pubfunc from '../utils/pubfunc';
import Vec2 from '../utils/vec2';

class BaseSkill{

    constructor(radius, bullets){
        this.radius = radius || 120;
        if(!bullets || bullets.length<1){
            throw new Error('技能至少需要一个子弹');
        }
        this.bullets = bullets;        
    }

    fireBullets(){
        const world = pubfunc.getWorld();
        for(const bullet of this.bullets){
            world.addBullet(bullet);
        }
    }

    getFirstTarget(){
        return this.bullets[0].getTargets()[0];
    }

    getAtkPos(atk, def){
        const atkPos = atk.getPosition();
        const defPos = def.getPosition();
        if(defPos.x >= atkPos.x){
            const x = Math.max(atkPos.x, defPos.x - this.radius);
            return new Vec2(x, defPos.y);
        }else{
            const x = Math.min(defPos.x + this.radius, atkPos.x);
            return new Vec2(x, defPos.y);
        }
    }

}

export default BaseSkill;