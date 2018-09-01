import BaseTrace from "./BaseTrace";

class BlinkTrace extends BaseTrace{

    constructor(bullet, pos){
        super(bullet);
        this.pos = pos;
    }

    update(){
        bullet.setPosition(this.pos);
        super.update();
    }

}

export default BlinkTrace;