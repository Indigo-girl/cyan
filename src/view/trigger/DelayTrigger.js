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
     * 判断是否触发
     * @param {ViewEntity} atk
     * @param {Array.<ViewEntity>} targets
     * @param {ViewWorld} world
     * @return {bool}
     * @memberof BaseTrigger
     */
    trigger(atk, targets, world) {
        return this._elapsed >= this._delay;
    }

    /**
     * 需要在每帧update状态，然后调用trigger判定是否被出发
     * @memberof BaseTrigger
     */
    update() {
        this._elapsed++;
    }
}

export default DelayTrigger;