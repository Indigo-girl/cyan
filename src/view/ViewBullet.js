import pubfunc from '../logic/utils/pubfunc';

let _id = 0;

class ViewBullet{

    constructor(atker, info){
        this.id = _id;
        _id++;
        this.effects = info.effects || [];
        this.buffs = info.buffs || [];
        this.selector = info.selector;
        this.atker = atker;
        this.trigger = info.trigger;
        this.spinePath = info.spinePath;
        this.offset = info.offset || cc.v2(0, 0);
        this._fired = false;

        const node = new cc.Node(this.id);
        this.view = node;
        node.position = this.offset;
        pubfunc.getWorld().addBullet(this);
    }

    fireDelay(frames){
        if(frames <= 0){
            return this.fire();
        }
        this._remainFrame = frames;
    }

    fire() {
        this._fired = true;
        pubfunc.getWorld().fireBullet(this);
        this.direct = this.atker.getDirect();
        cc.loader.loadRes(this.spinePath, sp.SkeletonData, (err, res) => {
            if (err) {
                console.err(err);
                return;
            }
            const skeleton = this.view.addComponent(sp.Skeleton);
            skeleton.skeletonData = res;
            skeleton.loop = false;
            skeleton.setToSetupPose();
            skeleton.premultipliedAlpha = false;
            skeleton.setCompleteListener(() => this.handleEvent({type: 'animCompleted'}));
            skeleton.setAnimation(0, 'effect', false);
        });
    }

    handleEvent(event){
        this.trigger.handleEvent(event);
        this.tryTrigger();
        if(event.type === 'animCompleted'){
            // TODO 如果是范围伤害直接影响所有目标
            this.destroy();
        }
    }

    update(){
        if(!this._fired){
            if(this._remainFrame && this._remainFrame > 0){
                this._remainFrame--;
                if(this._remainFrame === 0){
                    this.fire();
                }
            }
            return;
        }else{
            this.trigger.update();
            this.tryTrigger();
            let zIndex = 0;
            let targets = this.getTargets();
            for(const target of targets){
                zIndex = Math.max(zIndex, target.view.zIndex);
            }
            this.view.zIndex = zIndex;
        }
    }

    tryTrigger(){
        if (this.trigger.trigger(this, this.getTargets(), pubfunc.getWorld())) {
            this._doEffects();
            this._addBuffs();
        }
    }

    _addBuffs() {
        const buffs = this.buffs;
        if (buffs && buffs.length > 0) {
            const targets = this.getTargets();
            for (const target of targets) {
                target.addBuffs(buffs);
            }
        }
    }

    // effect和buff不一样的是，子弹中的直接effect不会被回退，buff中的effect在buff被清除后会回退
    _doEffects() {
        const effects = this.effects;
        if (effects && effects.length > 0) {
            const targets = this.getTargets();
            if(targets.length < 1){
                console.warn('子弹没有对任何目标生效');
            }
            for (const target of targets) {
                target.doEffects(effects);
            }
        }
    }

    getFirstTarget(){
        // 需要排除范围选择器
        return this.selector.getTargets(this.atker, this, pubfunc.getWorld(), true)[0];
    }

    getTargets() {
        return this.selector.getTargets(this.atker, this, pubfunc.getWorld());
    }

    getPosition(){
        return this.view.getPosition();
    }

    getDirect(){
        if(this.direct){
            return this.direct
        }else{
            return this.atker.getDirect();
        }
    }

    destroy(){
        this._fired = false;
        this.view.destroy();
        pubfunc.getWorld().removeBullet(this);
    }

}

export default ViewBullet;