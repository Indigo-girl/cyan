import BaseTrigger from "./BaseTrigger";

class DelayTrigger extends BaseTrigger{

    /**
     *Creates an instance of DelayTrigger.
     * @param {number} delayFrame
     * @memberof DelayTrigger
     */
    constructor(delayFrame){
        super();
        this._delay = delayFrame;
        this._elapsed = 0;
    }

    /**
     * 需要在每帧update状态，然后调用trigger判定是否被出发
     * @memberof BaseTrigger
     */
    update() {
        this._elapsed++;
        this.fulfill = this._elapsed >= this._delay
    }
}

export default DelayTrigger;