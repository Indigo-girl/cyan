import pubfunc from '../../logic/utils/pubfunc';

class BaseSkill{

    constructor(owner, bullets, radius, atkAnim){
        this.owner = owner;
        this.radius = radius || 120;
        if(!bullets || bullets.length<1){
            throw new Error('技能至少需要一个子弹');
        }
        this.bullets = bullets;      
        this.atkAnim = atkAnim;
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
        const firstBullet =  this.bullets[0];
        return firstBullet.getFirstTarget();
    }

}

export default BaseSkill;