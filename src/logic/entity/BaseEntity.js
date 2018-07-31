let _id = 0;
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
}

export default BaseEntity;