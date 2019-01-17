import Log from "../../lib/Log";
import WorldUtils from '../../logic/utils/WorldUtils';

class BaseSkill{

    constructor(owner, bullets, radius, info){
        this.owner = owner;
        this.radius = radius || 120;
        if(!bullets || bullets.length<1){
            throw new Error('技能至少需要一个子弹');
        }
        this.bullets = bullets;    
        this.delays = info.delays || [];  
        this.atkAnim = info.atkAnim;
        this.prepareEffect = info.prepareEffect;
        this.preparePoint = info.preparePoint;
        this.type = info.type;
        this.backAfterAtk = info.backAfterAtk;
        this.backDuration = info.backDuration;
        this.configId = info.configId;
        this.alignY = info.alignY;
        this.ratio1 = info.ratio1;
        this.ratio2 = info.ratio2;
        this._fired = false;  
    }

    handleEvent(event){
        for(const bullet of this.bullets){
            bullet.handleEvent(event);
        }
    }

    showPrepareEffect(){
        if (!this.prepareEffect || this.prepareEffect === ''){
            Log.warn('非法的受击特效：', this.prepareEffect);
            return;
        }
        // 受击特效的位置应该在每个英雄的受击点，每个模型都需要配置受击点
        const node = new cc.Node('effect');
        node.parent = this.owner.view;
        node.position = this.preparePoint || cc.v2(0, 0);
        cc.loader.loadRes(this.prepareEffect, sp.SkeletonData, (err, res) => {
            if (err) {
                Log.warn(effectPath, err);
                return;
            }
            WorldUtils.getWorld().registAsset(res);
            const skeleton = node.addComponent(sp.Skeleton);
            skeleton.skeletonData = res;
            skeleton.loop = false;
            skeleton.setToSetupPose();
            skeleton.premultipliedAlpha = false;
            skeleton.setCompleteListener(() => node.destroy());
            skeleton.setAnimation(0, 'effect', false);
        });
    }

    fireBullets(){
        if(this._fired){
            throw new Error('已经发射过子弹了');
        }
        this._fired = true;
        let i = 0;
        for(const bullet of this.bullets){
            bullet.fireDelay(this.delays[i] || 0);
            i++;
        }
    }

    getFirstTarget(){
        const firstBullet =  this.bullets[0];
        return firstBullet.getFirstTarget();
    }

    /**
     * 获取范围筛选器建议的目标位置
     * @param {ViewEntity} target
     * @param {number} ratio1 -[0-1]
     * @param {number} ratio2 -[0-1]
     * @returns - 如果有建议的位置返回建议的位置，如果没有返回undefined
     * @memberof BaseSkill
     */
    getAtkPos(target, ratio1, ratio2) {
        const firstBullet = this.bullets[0];
        return firstBullet.getAtkPos(this.owner, target, ratio1, ratio2);
    }

    /**
     * 判定目标是否还满足技能指向
     * @param {ViewEntity} target
     * @returns
     * @memberof BaseSkill
     */
    checkTarget(target){
        for(const bullet of this.bullets){
            if(bullet.checkTarget(target)){
                return true;
            }
        }
        return false;
    }

    setJumpInfo(dist, duration, height){
        this.jumpInfo = {
            dist: dist,
            duration: duration,
            height: height
        }
    }

    setmoveInfo(dist, duration) {
        this.moveInfo = {
            dist: dist,
            duration: duration,
        }
    }

}

export default BaseSkill;