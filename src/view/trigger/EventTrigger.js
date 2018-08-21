import BaseTrigger from "./BaseTrigger";

class EventTrigger extends BaseTrigger{

    constructor(targetEvents){
        super();
        this.targetEvents = targetEvents;
        this._triggered = false;
    }

    trigger(){
        return this._triggered;
    }

    handleEvent(event){
        const target = this.targetEvents.find((e)=> e===event.type);
        if(target){
            this._triggered = true;
        }
    }
}

export default EventTrigger;