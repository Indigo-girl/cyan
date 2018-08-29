import ViewBullet from '../view/ViewBullet';
import EffectParser from './EffectParser';
import BuffParser from './BuffParser';
import SelectorParser from './SelectorParser';
import TriggerParser from './TriggerParser';
import buffs from '../../config/buff';

class BulletParser{

    parse(bulletConfig, owner){
        const effects = [];
        for(const config of bulletConfig.effects){
            effects.push(EffectParser.parse(config, owner));
        }
        const buffs = [];
        for(const buffId of bulletConfig.buffs){
            const config = this.getBuffConfigById(buffId);
            buffs.push(BuffParser.parse(config, owner));
        }
        const selector = SelectorParser.parseComplex(bulletConfig.selectors, owner);
        const trigger = TriggerParser.parse(bulletConfig.trigger, owner);
        const bullet = new ViewBullet(owner, {
            effects: effects,
            buffs: buffs,
            selector: selector,
            spinePath: bulletConfig.spinePath,
            hitEffect: bulletConfig.hitEffect,
            offset: cc.v2(bulletConfig.offset.x, bulletConfig.offset.y),
            trigger: trigger,
            trace: bulletConfig.trace
        });
        return bullet;
    }

    getBuffConfigById(id){
        return buffs[id];
    }
}

const parser = new BulletParser();

export default parser;