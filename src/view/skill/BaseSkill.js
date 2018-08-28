class BaseSkill{

    constructor(owner, bullets, radius, info){
        this.owner = owner;
        this.radius = radius || 120;
        if(!bullets || bullets.length<1){
            throw new Error('技能至少需要一个子弹');
        }
        this.bullets = bullets;      
        this.atkAnim = info.atkAnim;
        this.prepareEffect = info.prepareEffect;
        this.preparePoint = info.preparePoint;
        this._fired = false;  
    }

    showPrepareEffect(){
        if (!this.prepareEffect || this.prepareEffect === ''){
            console.warn('非法的受击特效：', this.prepareEffect);
            return;
        }
        // TODO 受击特效的位置应该在每个英雄的受击点，每个模型都需要配置受击点
        const node = new cc.Node('effect');
        node.parent = this.owner.view;
        node.position = this.preparePoint || cc.v2(0, 0);
        // TODO 设置位置
        cc.loader.loadRes(this.prepareEffect, sp.SkeletonData, (err, res) => {
            if (err) {
                console.warn(effectPath, err);
                return;
            }
            const skeleton = node.addComponent(sp.Skeleton);
            skeleton.skeletonData = res;
            skeleton.loop = false;
            skeleton.setToSetupPose();
            skeleton.premultipliedAlpha = false;
            skeleton.setCompleteListener(() => node.destroy());
            skeleton.setAnimation(0, 'effect', false);
        });
    }

    fireBullets(delay){
        delay = delay || 0;
        if(this._fired){
            throw new Error('已经发射过子弹了');
        }
        this._fired = true;
        for(const bullet of this.bullets){
            bullet.fireDelay(delay);
        }
    }

    getFirstTarget(){
        const firstBullet =  this.bullets[0];
        return firstBullet.getFirstTarget();
    }

    setJumpInfo(dist, duration){
        this.jumpInfo = {
            dist: dist,
            duration: duration
        }
    }

}

export default BaseSkill;