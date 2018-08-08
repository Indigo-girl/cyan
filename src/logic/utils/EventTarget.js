/**
 * @author yangqi
 * @email txzm2018@gmail.com
 * @create date 2018-08-07 04:57:22
 * @modify date 2018-08-07 04:57:22
 * @desc [description]
*/
class EventTarget{

    constructor(){
        this._eventsQueue = {};
        this._targetEvents = {};
    }

    on(eventName, callback, target, isOnce){
        this._prepareEventQueue(eventName);
        this._eventsQueue[eventName].push({
            callback: callback,
            target: target,
            isOnce: !!isOnce
        });
        if(target){
            this._prepareTargetSet(target);
            this._targetEvents[target].add(eventName);
        }
    }

    off(eventName, callback){
        if(this._eventsQueue[eventName]){
            this._eventsQueue[eventName] = this._eventsQueue[eventName].filter((e) => e.callback !== callback);
        }
    }

    once(eventName, callback, target){
        this.on(eventName, callback, target, true);
    }

    targetOff(target){
        if (!this._targetEvents[target]){
            return;
        }
        for (const eventName of this._targetEvents[target]){
            this._eventTargetOff(eventName, target);
        }
        this._targetEvents[target] = null;
    }

    dispatchEvent(event){
        const queue = this._eventsQueue[event.type]
        if(queue && queue.length > 0){
            for(const cbInfo of queue){
                cbInfo.callback.call(cbInfo.target, event);
            }
            // 移除once cbInfo
            this._eventsQueue[event.type] = queue.filter((e)=>!e.isOnce);
        }
    }

    _prepareEventQueue(eventName){
        if(!this._eventsQueue[eventName]){
            this._eventsQueue[eventName] = [];
        }
    }

    _prepareTargetSet(target){
        if (!this._targetEvents[target]) {
            this._targetEvents[target] = new Set();
        }
    }

    _eventTargetOff(eventName, target) {
        if (this._eventsQueue[eventName] && this._targetEvents[target]) {
            this._eventsQueue[eventName] = this._eventsQueue[eventName].filter((e) => e.target !== target);
            this._targetEvents[target].delete(eventName);
        }
    }
}

export default EventTarget;