class BaseTrigger{

    constructor(){
        this.fulfill = false;
        this.triggeredTargets = [];
        // 默认触发一次后即销毁
        this._destroyFlag = true;
    }

    /**
     * 判断是否触发
     * @param {ViewEntity} caster
     * @param {Array.<ViewEntity>} targets
     * @param {ViewWorld} world
     * @param {ViewBullet} bullet
     * @return {bool}
     * @memberof BaseTrigger
     */
    trigger(caster, targets, world, bullet){
        // 默认触发即全体目标生效
        this.triggeredTargets = targets;
        return this.fulfill;
    }

    clear(){
        this.fulfill = false;
    }
    
    /**
     * 获取被触发的对象
     * 仅子弹使用
     * @returns
     * @memberof BaseTrigger
     */
    getTriggeredTargets(){
        return this.triggeredTargets;
    }

    /**
     * 需要在每帧update状态，然后调用trigger判定是否被出发
     * @memberof BaseTrigger
     */
    update(){

    }

    /**
     * 监听事件，然后改变状态
     * @param {Event} event
     * @memberof BaseTrigger
     */
    handleEvent(event){
        
    }

    /**
     * 仅给子弹使用，当trigger成功后调用此方法判断是否销毁子弹
     * @returns
     * @memberof BaseTrigger
     */
    triggerDestroy(){
        return this._destroyFlag;
    }

}

export default BaseTrigger;