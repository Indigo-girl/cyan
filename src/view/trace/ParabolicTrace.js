import BaseTrace from "./BaseTrace";

class ParabolicTrace extends BaseTrace{

    constructor(bullet, initSpeed, targetPos, gravity){
        super(bullet);
        this.initSpeed = initSpeed;
        this.targetPos = targetPos;
        this.gravity = gravity;
        this.speed = cc.v2(initSpeed.x * this.owner.getDirect(), initSpeed.y);
    }

    update(){
        
    }


}

export default ParabolicTrace;