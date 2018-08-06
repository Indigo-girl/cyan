import Calculator from './Calculator';

class AddCalculator extends Calculator{

    constructor(proId, seq, add){
        super(proId, seq);
        this._add = add;
    }

    calculate(current, origin, target){
        return current + this._add;
    }

}

export default AddCalculator;