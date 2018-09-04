import InstantTrigger from '../view/trigger/InstantTrigger';
import DelayTrigger from '../view/trigger/DelayTrigger';
import EventTrigger from '../view/trigger/EventTrigger';
import HorizonTrigger from '../view/trigger/HorizonTrigger';
import Log from '../lib/Log';

class TriggerParser{

    parse(triggerConfig, owner){
        switch(triggerConfig.type){
            case 'instant':
                return new InstantTrigger();
            case 'delay':
                return this._parseDelay(triggerConfig);
            case 'event':
                return this._parseEvent(triggerConfig, owner);
            case 'horizon':
                return new HorizonTrigger(triggerConfig.length, triggerConfig.speed, triggerConfig.isBulletMove);
            default:
                Log.warn("未知的Trigger类型:", triggerConfig);
        }
    }

    _parseDelay(config){
        return new DelayTrigger(config.value);
    }

    _parseEvent(config){
        return new EventTrigger([config.value]);
    }

}

const parser = new TriggerParser();

export default parser;