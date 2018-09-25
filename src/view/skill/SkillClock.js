import GAME_CONST from "../../GameConst";

const STATE = {
    READY: 0,
    CAST: 1,
    SILENT: 2,
}

class SkillClock{

    constructor(firstCd, cd, silentTime){
        this.firstCdFrame = firstCd * GAME_CONST.FPS;
        this.normalCdFrame = cd * GAME_CONST.FPS;
        this.cdFrame = this.firstCdFrame;
        this.silentFrame = silentTime * GAME_CONST.FPS;
        this.elapseCd = 0;
        this.elapseSilent = 0;
    }

    reset(){
        this.elapseCd = 0;
        this.elapseSilent = 0;
        this.cdFrame = this.normalCdFrame();
        this.state = STATE.READY;
    }

    onSkillCast(){
        this.state = STATE.CAST;
    }

    afterSkillCast(){
        this.state = STATE.SILENT;
    }

    afterSilent(){
        this.reset();
    }

    update(){
        switch(this.state){
            case STATE.READY:
                this.elapseCd++;
                break;
            case STATE.CAST:
                break;
            case STATE.SILENT:
                this.elapseSilent++;
                this.elapseCd++;
                break;
        }
    }

    isReady(){
        return this.state = STATE.READY;
    }

    cdElapsed(){
        return this.elapseCd >= this.cdFrame;
    }

    silentElapsed(){
        return this.elapseSilent >= this.silentFrame;
    }

}

export default SkillClock;