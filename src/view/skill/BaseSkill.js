import pubfunc from '../../logic/utils/pubfunc';
import Vec2 from '../../logic/utils/vec2';
import ViewBullet from '../ViewBullet';

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
        const world = pubfunc.getWorld();
        for(const bullet of this.bullets){
            // TODO 根据子弹配置来设置spine资源
            const viewBullet = new ViewBullet(bullet, 'DFP/DFP', cc.v2(0, 100));
            world.addBullet(viewBullet, this.owner);
            if(delay > 0){
                viewBullet.fireDelay(delay);
            }else{
                viewBullet.fire();
            }
        }
    }

    getFirstTarget(){
        const entity = this.owner;
        const world = pubfunc.getWorld();
        return this.bullets[0].getTargets(entity, world)[0];
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