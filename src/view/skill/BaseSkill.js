import pubfunc from '../../logic/utils/pubfunc';
import Vec2 from '../../logic/utils/vec2';

class BaseSkill{

    constructor(owner, bullets, radius){
        this.owner = owner;
        this.radius = radius || 120;
        if(!bullets || bullets.length<1){
            throw new Error('技能至少需要一个子弹');
        }
        this.bullets = bullets;      
        this._fired = false;  
    }

    fireBullets(delay){
        delay = delay || 0;
        if(this._fired){
            throw new Error('已经发射过子弹了');
        }
        this._fired = true;
        for(const bullet of this.bullets){
            bullet.fireDelay(delay);
        }
    }

    getFirstTarget(){
        const entity = this.owner;
        const world = pubfunc.getWorld();
        const firstBullet =  this.bullets[0];
        const targets = firstBullet.getTargets(entity, world);
        return targets[0];
    }

    getAtkPos(){
        const target = this.getFirstTarget();
        return this._getAtkPos(this.owner, target);
    }

    _getAtkPos(atk, def){
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