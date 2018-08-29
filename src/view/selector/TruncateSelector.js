import BaseSelector from "./BaseSelector";

class TruncateSelector extends BaseSelector{

    constructor(maxCount){
        super();
        this.maxCount = maxCount;
    }

    /**
     * 截取前面的目标
     * @param {Array.<ViewEntity>} targets
     * @return {Array.<ViewEntity>}
     * @memberof TruncateSelector
     */
    truncate(targets){
        if(targets.length <= this.maxCount){
            return targets;
        }
        return targets.slice(0, this.maxCount);
    }

}

export default TruncateSelector;