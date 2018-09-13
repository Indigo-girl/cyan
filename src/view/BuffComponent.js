import CONTEXT_CONST from '../logic/const/ContextConst';
import Log from '../lib/Log';

class BuffComponent {
    /**
     *Creates an instance of BuffComponent.
     * @param {ViewEntity} owner
     * @memberof BuffComponent
     */
    constructor(owner) {
        this.owner = owner;
        this._buffs = [];
    }

    update() {
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
        if (this.onOverlap(buff)) {
            return;
        }
        Log.log(`${this.owner.id}获得buff:${buff.configId}-${buff.id}`);
        // 需要注意buff的进入回调以及状态检查
        buff.onEnter(this.owner);
        this._buffs.push(buff);
    }

    rmBuff(buff) {
        Log.log(`${this.owner.id}移除buff:${buff.configId}-${buff.id}`);
        // 这里不需要调用buff的onExit方法，而是由buff自己管理自己的移除，在buff的onExit中调用此方法
        this._buffs = this._buffs.filter(e => e.id !== buff.id);
    }

    getSameBuff(buff) {
        return;
    }

    /**
     * buff重叠回调
     * @param {BaseBuff} buff
     * @return {bool} -是否拒绝此buff的加入
     * @memberof BuffComponent
     */
    onOverlap(buff) {
        const sameBuffs = this._buffs.filter(e => e.configId === buff.configId);
        if (sameBuffs.length < buff.overlapCount) {
            return false;
        } else {
            switch (buff.overlapType) {
                case CONTEXT_CONST.OVERLAP_TYPE.REPLACE:
                    Log.log(`${this.owner.id}buff[${buff.configId}超过最大叠加层数${buff.overlapCount}，移除最早的buff`);
                    sameBuffs[0].onExit();
                    return false;
                case CONTEXT_CONST.OVERLAP_TYPE.REJECT:
                    Log.log(`${this.owner.id}buff[${buff.configId}超过最大叠加层数${buff.overlapCount}，无法继续叠加`);
                    return true;
            }
        }
    }
}

export default BuffComponent;
