import WorldUtils from '../../logic/utils/WorldUtils';
import Log from '../../lib/Log';

let _id = 0;

class BaseBuff{

    /**
     * Creates an instance of BaseBuff.
     * @param {ViewEntity} caster
     * @param {BaseEffect} effects
     * @param {BaseTrigger} trigger
     * @param {Object} info
     * @memberof BaseBuff
     */
    constructor(caster, effects, trigger, info){
        this.id = _id;
        _id++;
        this.caster = caster;
        this.effects = effects || [];
        this.trigger = trigger;
        this.info = info || {};
        this.maxTriggerCount = info.maxTriggerCount || 1;
        this.enableUndo = !!info.enableUndo;
        this.triggerCount = 0;
        // 同configId可叠加最大层数
        this.overlapCount = info.overlapCount;
        // 同configId叠加类型：移除旧buff、无法叠加
        this.overlapType = info.overlapType;
    }

    /**
     * @param {ViewEntity} target
     * @memberof BaseBuff
     */
    onEnter(target){
        this.target = target;
        this.tryTrigger();
        Log.log(`buff:${this.configId}-${this.id}  onEnter`);
    }

    onExit(){
        this.target.rmBuff(this);
        if(this.enableUndo){
            for(let i = 0; i < this.triggerCount; i++){
                this.target.undoEffects(this.effects);
            }
        }
        Log.log(`buff:${this.configId}-${this.id}   onExit`);
    }

    tryTrigger(){
        // 超过最大触发次数就移除此buff
        if (this.triggerCount >= this.maxTriggerCount) {
            return;
        }
        if (this.trigger.trigger(this.caster, [this.target], WorldUtils.getWorld())) {
            this.target.doEffects(this.effects);
            this.triggerCount++;
            this.trigger.clear();
        }
    }

    update(){
        // 计时器在这里生效，时间单位为帧
        this.trigger.update();
        this.tryTrigger();
        if(this.checkRm()){
            this.onExit();
        }
    }

    /**
     * 处理事件
     * @param {Object} event
     * @memberof BaseBuff
     * @returns {bool} -是否允许event继续传递
     */
    handleEvent(event){
        Log.log(`${this.configId}接收到事件${event.type}`);
        this.trigger.handleEvent(event);
        this.tryTrigger();
        return true;
    }

    /**
     * 检查是否应该被移除
     * @returns
     * @memberof BaseBuff
     */
    checkRm(){
        return this.triggerCount >= this.maxTriggerCount;
    }
}

export default BaseBuff;