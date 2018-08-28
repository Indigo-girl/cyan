import BaseSelector from "./BaseSelector";

class DistSorter extends BaseSelector {

    constructor(desc) {
        super();
        this.desc = !!desc;
    }

    getDist(a, b){
        return a.getPosition().sub(b.getPosition()).mag();
    }

    sort(targets, atker) {
        targets.sort((a, b) => {
            if (this.desc) {
                return this.getDist(a, atker) - this.getDist(b, atker);
            } else {
                return this.getDist(b, atker) - this.getDist(a, atker);
            }
        });
        return targets;
    }

}

export default DistSorter;