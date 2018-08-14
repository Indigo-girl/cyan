import pool from './StatePool';
import DefaultStateConfig from './DefaultStateConfig';

class StateMachine{

    constructor(initStateName, viewEntity, stateConfig){
        this._stateConfig = stateConfig || DefaultStateConfig;
        this.changeState(pool.getState(initStateName));
        this.viewEntity = viewEntity;
    }

    changeState(state){
        if(this._curState){
            this._curState.onExit(this);
        }
        this._lastState = this._curState;
        this._curState = state;
        this._curState.onEnter(this);
    }

    getCurState(){
        return this._curState;
    }

    handleEvent(event){
        // 状态关注自身的表现
        this.getCurState().handleEvent(event);
        // 状态机关注状态的转换
        const config = this._stateConfig;
        const targetStateName = config[this.getCurState().name][event.type];
        if(targetStateName){
            if(targetStateName === 'last'){
                this.changeState(this._lastState);
            }else{
                this.changeState(pool.getState(targetStateName));
            }
        }
    }

}

export default StateMachine;