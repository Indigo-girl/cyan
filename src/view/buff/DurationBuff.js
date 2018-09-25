import BaseBuff from "./BaseBuff";
import GAME_CONST from "../../GameConst";

class DurationBuff extends BaseBuff{

    constructor(caster, effects, trigger, info) {
        super(caster, effects, trigger, info);
        this.duration = info.duration * GAME_CONST.FPS;
        this._elapse = 0;
    }

    update(){
        this._elapse++;
        super.update();
    }

    checkRm(){
        return this._elapse >= this.duration
    }
}

export default DurationBuff;