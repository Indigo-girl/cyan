import IdleState from './IdleState';
import WalkState from './WalkState';
import AtkState from './AtkState';

const StateMap = {
    'idle': IdleState,
    'walk': WalkState,
    'atk': AtkState
}

class StatePool{

    constructor(){
        this._pool = {};
    }

    getState(name){
        if(!StateMap[name]){
            throw new Error('找不到对应的类型:', name);
        }
        if(!this._pool[name]){
            this._pool[name] = new StateMap[name]();
        }
        return this._pool[name];
    }
}

const pool = new StatePool();

export default pool;