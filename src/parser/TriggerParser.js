import BaseTrigger from '../view/trigger/BaseTrigger';
import DelayTrigger from '../view/trigger/DelayTrigger';
import EventTrigger from '../view/trigger/EventTrigger';

class TriggerParser{

    parse(triggerConfig, owner){
        switch(triggerConfig.type){
            case 'base':
                return this._parseBase(triggerConfig);
            case 'delay':
                return this._parseDelay(triggerConfig);
            case 'event':
                return this._parseEvent(triggerConfig, owner);
            default:
                console.warn("未知的Trigger类型:", triggerConfig);
        }
    }

    _parseBase(config){
        return new BaseTrigger();
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