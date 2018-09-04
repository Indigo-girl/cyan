import pool from './StatePool';
import DefaultStateConfig from './DefaultStateConfig';

class StateMachine{

    constructor(viewEntity, stateConfig){
        this._stateConfig = stateConfig || DefaultStateConfig;
        this.viewEntity = viewEntity;
        this._waitEvents = [];
    }

    changeState(state){
        if(typeof state === 'string'){
            state = pool.getState(state);
        }
        if(this._curState){
            this._curState.onExit(this);
        }
        this._lastState = this._curState;
        this._curState = state;
        this._curState.onEnter(this);
        while(this._waitEvents.length > 0){
            this.handleEvent(this._waitEvents.shift());
        }
    }

    getCurState(){
        return this._curState;
    }

    handleEvent(event){
        if(!this.getCurState()){
            this._waitEvents.push(event);
            return;
        }
        // 状态关注自身的表现
        this.getCurState().handleEvent(event, this);
        // 状态机关注状态的转换
        const config = this._stateConfig;
        const targetStateName = config[this.getCurState().name][event.type];
        console.log('sm handle event:', this.getCurState().name, event.type, targetStateName);
        if(targetStateName){
            if(targetStateName === 'last'){
                this.changeState(this._lastState);
            }else{
                this.changeState(pool.getState(targetStateName));
            }
        }
    }

    update(){
        if(!this.getCurState()){
            return;
        }
        this.getCurState().update(this);
    }

}

export default StateMachine;