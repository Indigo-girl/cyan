import BaseTrigger from "./BaseTrigger";

class InstantTrigger extends BaseTrigger{

    constructor(){
        super();
        this.fulfill = true;
    }

}

export default InstantTrigger;