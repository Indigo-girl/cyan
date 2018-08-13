import pubfunc from '../utils/pubfunc';

class BaseSkill{

    constructor(effects, bullets){
        this.effects = effects || [];
        this.bullets = bullets || [];        
    }

    fireBullets(){
        const world = pubfunc.getWorld();
        for(const bullet of this.bullets){
            world.addBullet(bullet);
        }
    }

}

export default BaseSkill;