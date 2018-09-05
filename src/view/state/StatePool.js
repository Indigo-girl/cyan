import IdleState from './IdleState';
import WalkState from './WalkState';
import AtkState from './AtkState';
import DeadState from './DeadState';
import SearchState from './SearchState';
import ResearchState from './ResearchState';
import ReadyState from './ReadyState';
import ReadyWalkState from './ReadyWalkState';
import SettleState from './SettleState';

const StateMap = {
    'idle': IdleState,
    'walk': WalkState,
    'atk': AtkState,
    'dead': DeadState,
    'search': SearchState,
    'research': ResearchState,
    'ready': ReadyState,
    'readyWalk': ReadyWalkState,
    'settle': SettleState,
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