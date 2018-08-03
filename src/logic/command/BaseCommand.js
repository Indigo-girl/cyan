class BaseCommand{

    constructor(ctype, cseq, info){
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