import BaseBullet from './BaseBullet';

class DelayBullet extends BaseBullet{

    constructor(info, targets, delay){
        super(info)
        this.delay = delay || 0;
        this.elapse = 0;
        this.targets = targets;
    }

    reach(){
        return this.elapse > this.delay;
    }

    getTargets(){
        return this.targets || [];
    }

    update(){
        this.elapse++;
        super.update();
    }

}

export default DelayBullet;