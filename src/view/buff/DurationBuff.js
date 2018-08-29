import BaseBuff from "./BaseBuff";

class DurationBuff extends BaseBuff{

    constructor(caster, effects, trigger, info) {
        super(caster, effects, trigger, info);
        this.duration = info.duration * 60;
        this._elapse = 0;
    }

    update(){
        this._elapse++;
        if(this._elapse >= this.duration){
            this.onExit();
            return;
        }   
        super.update();
    }
}

export default DurationBuff;