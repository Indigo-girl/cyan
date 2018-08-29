let _id = 0;

class Calculator{

    constructor(proId, seq){
        this.id = _id;
        _id++;
        this.proId = proId;
        this.seq = seq;
    }

    calculate(current, origin, target){
        throw new Error('不要使用基类');
    }
}

export default Calculator;