import Calculator from './AddCalculator';

class ScaleCalculator extends Calculator{

    constructor(proId, seq, scale){
        super(proId, seq);
        this._scale = scale;
    }

    calculate(current, origin, target){
        return current * this._scale;
    }
}

export default ScaleCalculator;