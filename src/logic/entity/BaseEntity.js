let _id = 0;
// 所有的BaseEntity的锚点都在cc.v2(0.5, 0)
class BaseEntity{

    constructor(){
        this.id = _id;
        _id++;
    }
}

export default BaseEntity;