import BaseBuff from '../view/buff/BaseBuff';
import DurationBuff from '../view/buff/DurationBuff';
import EffectParser from './EffectParser';
import TriggerParser from './TriggerParser';
import Log from '../lib/Log';

class BuffParser {
    parse(buffConfig, owner) {
        const info = {
            maxTriggerCount: buffConfig.maxTriggerCount,
            enableUndo: buffConfig.enableUndo,
            duration: buffConfig.duration,
            configId: buffConfig.id,
            overlapCount: buffConfig.overlapCount,
            overlapType: buffConfig.overlapCount,
        };
        const effects = [];
        for (const config of buffConfig.effects) {
            effects.push(EffectParser.parse(config, owner));
        }
        const trigger = TriggerParser.parse(buffConfig.trigger, owner);
        let buff;
        switch (buffConfig.type) {
            case 'base':
                buff = new BaseBuff(owner, effects, trigger, info);
                break;
            case 'duration':
                buff = new DurationBuff(owner, effects, trigger, info);
                break;
            default:
                Log.warn(`未知的buff类型:${buffConfig.type}`);
        }
        return buff;
    }
}

const parser = new BuffParser();

export default parser;
