import BaseTrigger from "./BaseTrigger";

class EventTrigger extends BaseTrigger{

    constructor(targetEvents){
        super();
        this.targetEvents = targetEvents;
    }

    handleEvent(event){
        const target = this.targetEvents.find((e)=> e===event.type);
        if(target){
            this.fulfill = true;
        }
    }
}

export default EventTrigger;