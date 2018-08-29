import pubfunc from '../../logic/utils/pubfunc';

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
    }

    /**
     * @param {ViewEntity} target
     * @memberof BaseBuff
     */
    onEnter(target){
        this.target = target;
        this.tryTrigger();
        console.log(`buff:${this.id}  onEnter`);
    }

    onExit(){
        this.target.rmBuff(this);
        if(this.enableUndo){
            this.target.undoEffects(this.effects);
        }
        console.log(`buff:${this.id}   onExit`);
    }

    tryTrigger(){
        if (this.trigger.trigger(this.caster, [this.target], pubfunc.getWorld())) {
            this.target.doEffects(this.effects);
            this.triggerCount++;
            this.trigger.clear();
            // 超过最大触发次数就移除此buff
            if (this.maxTriggerCount <= this.triggerCount) {
                this.onExit();
            }
        }
    }

    update(){
        // 计时器在这里生效，时间单位为帧
        this.trigger.update();
        this.tryTrigger();
    }

    /**
     * 处理事件
     * @param {Object} event
     * @memberof BaseBuff
     * @returns {bool} -是否允许event继续传递
     */
    handleEvent(event){
        this.trigger.handleEvent(event);
        this.tryTrigger();
        return true;
    }
}

export default BaseBuff;