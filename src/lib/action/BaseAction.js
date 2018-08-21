import ActionConst from './ActionConst';

let _id = 0;

class BaseAction{

    constructor(type){
        this.id = _id;
        _id++;
        this.type = type;
        this.state = ActionConst.STATE.READY;
    }

    complete(){
        // 动作完成后需要调用此方法，用于通知其他待执行的Action
    }

    do(){
        // 执行此行为（为表现层的）
    }

}

export default BaseAction;