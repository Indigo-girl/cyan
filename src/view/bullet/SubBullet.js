import ViewBullet from "./ViewBullet";

class SubBullet extends ViewBullet{

    constructor(atker, info, target){
        super(atker, info);
        this.target = target;
    }

    getFirstTarget() {
        return this.target;
    }

    getTargets() {
        return [this.target];
    }

}

export default SubBullet;