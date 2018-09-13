import ViewBullet from "./ViewBullet";
import BulletParser from '../../../parser/BulletParser';

class SplitViewBullet extends ViewBullet{

    constructor(atker, info){
        super(atker, info);
        this.subBulletConf = info.subBulletConf;
    }

    onTrigger(){
        const triggerTargets = this.trigger.getTriggeredTargets();
        for (const target of triggerTargets) {
            const sub = BulletParser.parseSubBullet(this.subBulletConf ,this.atker, target);
            sub.fire();
        }
    }

}

export default SplitViewBullet;