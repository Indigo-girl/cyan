import CommonConst from '../const/CommonConst';
import Log from '../../lib/Log';

let _id = CommonConst.ENTITY_MIN_ID;
// 所有的BaseEntity的锚点都在cc.v2(0.5, 0)
class BaseEntity{

    constructor(){
        this._id = _id;
        _id++;
    }

    // id不可以被修改
    get id(){
        return this._id;
    }

    handleEvent(event){
        Log.log(`entity id: ${this.id} recieve event:`, event);
    }
}

export default BaseEntity;