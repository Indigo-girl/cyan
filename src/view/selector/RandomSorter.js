import BaseSelector from "./BaseSelector";
import WorldUtils from '../../logic/utils/WorldUtils';

class RandomSorter extends BaseSelector {

    constructor() {
        super();
    }

    sort(targets, atker) {
        const rand = WorldUtils.getWorld().randFunc;
        WorldUtils.shuffle(targets, rand);
        return targets;
    }

}

export default RandomSorter;