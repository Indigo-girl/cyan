import BaseTrigger from "./BaseTrigger";

class HorizonTrigger extends BaseTrigger{

    /**
     *Creates an instance of HorizonTrigger.
     * @param {number} length -子弹‘走过’总距离
     * @param {number} speed -子弹‘速度’(包括子弹特效的估算移动速度)
     * @param {bool} bulletIsMove -子弹是否是自己走(还有一种是特效看起来在移动)
     * @memberof HorizonTrigger
     */
    constructor(length, speed, bulletIsMove){
        super();
        this._destroyFlag = false;
        this.curDist = 0;
        this.totalDist = length;
        this.speed = speed || 0;
        this.bulletIsMove = !!bulletIsMove;
    }

    /**
     * 判断是否触发
     * @param {ViewEntity} atk
     * @param {Array.<ViewEntity>} targets
     * @param {ViewWorld} world
     * @param {ViewBullet} bullet
     * @return {bool}
     * @memberof BaseTrigger
     */
    trigger(atk, targets, world, bullet) {
        const direct = bullet.getDirect();
        // 和范围筛选器保持一致，使用角色发射子弹时的位置
        const center = bullet.getPosition().sub(bullet.offset);
        let bulletX = center.x;
        if(!this.bulletIsMove){
            bulletX += direct * this.curDist;
        }
        this.triggeredTargets = targets.filter((e)=>{
            let delta = direct * (bulletX - e.getPosition().x);
            return delta>0 && delta <= this.speed;
        });
        this.fulfill = true;
        return this.fulfill;
    }

    update(){
        this.curDist += this.speed;
        if(this.curDist > this.totalDist){
            this._destroyFlag = true;
        }
    }
}

export default HorizonTrigger;