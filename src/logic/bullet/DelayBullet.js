import BaseBullet from './BaseBullet';

class DelayBullet extends BaseBullet{

    constructor(info, delay){
        super(info)
        this.delay = delay || 0;
        this.elapse = 0;
    }

    reach(){
        return this.elapse > this.delay;
    }

    update(){
        this.elapse++;
        super.update();
    }

}

export default DelayBullet;