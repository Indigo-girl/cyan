let _id = 0;

class BaseCommand{

    constructor(ctype, cseq, info){
        this.id = _id;
        _id++;
        this.ctype = ctype;
        this.seq = cseq;
        this.info = info;
    }

    do(){
        
    }

    undo(){
        // TODO 暂不考虑
    }
}

export default BaseCommand;