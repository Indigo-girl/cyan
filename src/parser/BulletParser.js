import ViewBullet from '../view/ViewBullet';
import EffectParser from './EffectParser';
import BuffParser from './BuffParser';
import SelectorParser from './SelectorParser';
import TriggerParser from './TriggerParser';

class BulletParser{

    parse(bulletConfig, owner){
        const effects = [];
        for(const config of bulletConfig.effects){
            effects.push(EffectParser.parse(config, owner));
        }
        const buffs = [];
        for(const config of bulletConfig.buffs){
            buffs.push(BuffParser.parse(config, owner));
        }
        const selector = SelectorParser.parseComplex(bulletConfig.selectors, owner);
        const trigger = TriggerParser.parse(bulletConfig.trigger, owner);
        const bullet = new ViewBullet(owner, {
            effects: effects,
            buffs: buffs,
            selector: selector,
            spinePath: bulletConfig.spinePath,
            offset: cc.v2(bulletConfig.offset.x, bulletConfig.offset.y),
            trigger: trigger
        });
        return bullet;
    }
}

const parser = new BulletParser();

export default parser;