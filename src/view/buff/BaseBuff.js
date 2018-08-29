let _id = 0;

class BaseBuff{

    /**
     * Creates an instance of BaseBuff.
     * @param {ViewEntity} caster
     * @memberof BaseBuff
     */
    constructor(caster){
        this.id = _id;
        _id++;
        this.caster = caster;
    }

    /**
     * @param {ViewEntity} target
     * @memberof BaseBuff
     */
    onEnter(target){
        this.target = target;
    }

    onExit(){
        this.target.rmBuff(this);
    }

    update(){
        // 计时器在这里生效，时间单位为帧
    }

    /**
     * 处理事件
     * @param {Object} event
     * @memberof BaseBuff
     * @returns {bool} -是否允许event继续传递
     */
    handleEvent(event){
        return true;
    }
}

export default BaseBuff;