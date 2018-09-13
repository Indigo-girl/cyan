class BuffComponent{

    /**
     *Creates an instance of BuffComponent.
     * @param {ViewEntity} owner
     * @memberof BuffComponent
     */
    constructor(owner){
        this.owner = owner;
        this._buffs = [];
    }

    update(){
        for (const buff of this._buffs) {
            buff.update();
        }
    }

    /**
     * 处理owner接收到的事件
     * @param {Event} event
     * @return {bool} -是否忽略owner之后的事件处理
     * @memberof BuffComponent
     */
    handleEvent(event) {
        for (const buff of this._buffs) {
            // buff可以阻止事件的传递
            if (!buff.handleEvent(event)) {
                return true;
            }
        }
        return false;
    }

    addBuff(buff) {
        // 需要注意buff的进入回调以及状态检查
        buff.onEnter(this.owner);
        this._buffs.push(buff);
    }

    rmBuff(buff) {
        // 这里不需要调用buff的onExit方法，而是由buff自己管理自己的移除，在buff的onExit中调用此方法
        this._buffs = this._buffs.filter((e) => e.id !== buff.id);
    }

}

export default BuffComponent;