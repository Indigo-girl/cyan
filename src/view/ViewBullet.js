import pubfunc from '../logic/utils/pubfunc';

class ViewBullet{

    constructor(bullet, spinePath, offset){
        this.id = bullet.id;
        this.bullet = bullet;
        const node = new cc.Node(this.id);
        this.view = node;
        node.position = offset || cc.v2(0, 0);
        this._spinePath = spinePath;
        this._fired = false;
    }

    fireDelay(frames){
        this._remainFrame = frames;
    }

    fire() {
        this._fired = true;
        cc.loader.loadRes(this._spinePath, sp.SkeletonData, (err, res) => {
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
            skeleton.setAnimation(0, 'effect-dfp', false);
        });
    }

    handleEvent(event){
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
        }
        // TODO 判定是否碰到目标，碰到则发出事件
        // TODO 判定是否存活
    }

    destroy(){
        this._fired = false;
        this.view.destroy();
        pubfunc.getWorld().removeBullet(this);
    }

}

export default ViewBullet;