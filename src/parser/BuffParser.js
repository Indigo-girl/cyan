import BaseBuff from '../view/buff/BaseBuff';
import DurationBuff from '../view/buff/DurationBuff';
import EffectParser from './EffectParser';
import TriggerParser from './TriggerParser';

class BuffParser{

    parse(buffConfig, owner){
        const info = {
            maxTriggerCount: buffConfig.maxTriggerCount,
            enableUndo: buffConfig.enableUndo,
            duration: buffConfig.duration
        };
        const effects = [];
        for (const config of buffConfig.effects) {
            effects.push(EffectParser.parse(config, owner));
        }
        const trigger = TriggerParser.parse(buffConfig.trigger, owner);
        switch(buffConfig.type){
            case 'base':
                return new BaseBuff(owner, effects, trigger, info);
            case 'duration':
                return new DurationBuff(owner, effects, trigger, info);
            default:
                console.warn(`未知的buff类型:${buffConfig.type}`);
        }
    }

}

const parser = new BuffParser();

export default parser;