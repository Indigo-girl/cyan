import pubfunc from '../utils/pubfunc';

let _id = 0;

class BaseBullet{

    constructor(info){
        this.id = _id;
        _id++;
        this.info = info;
        this.effects = info.effects || [];
        this.buffs = info.buffs || [];
        this.selector = info.selector;
    }

    reach(){
        // 即时生效
        return true;
    }

    getTargets(entity, world){
        return this.selector.getTargets(entity, world);
    }

    update(){
        if (this.reach()) {
            this._doEffects();
            this._addBuffs();
            this.destroy();
        }
    }

    _addBuffs(){
        const buffs = this.buffs;
        if(buffs && buffs.length > 0){
            const targets = this.getTargets();
            for(const target of targets){
                target.addBuffs(buffs);
            }
        }
    }

    // effect和buff不一样的是，子弹中的直接effect不会被回退，buff中的effect在buff被清除后会回退
    _doEffects(){
        const effects = this.effects;
        if(effects && effects.length > 0){
            const targets = this.getTargets();
            for (const target of targets) {
                target.doEffects(effects);
            }
        }
    }

}

export default BaseBullet;