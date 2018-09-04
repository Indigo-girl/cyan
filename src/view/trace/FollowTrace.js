import BaseTrace from "./BaseTrace";

class FollowTrace extends BaseTrace{

    /**
     *Creates an instance of FollowTrace.
     * @param {ViewBullet} bullet
     * @param {ViewEntity} target
     * @param {vec2} initHead
     * @param {number} speed
     * @memberof FollowTrace
     */
    constructor(bullet, target, initHead, speed, useRolePos){
        super(bullet);
        this.target = target;
        this.speed = speed;
        this.setHead(initHead);
        this.useRolePos = !!useRolePos;
    }

    setHead(head){
        this.head = head.normalize();
        this.owner.view.rotation = -Math.atan(this.head.y / this.head.x) * 180 / Math.PI;
    }

    getHead(){
        return this.head;
    }

    checkReach(){
        let pos = this.owner.getPosition();
        let targetPos = this.target.getHitPosition();
        if (this.useRolePos) {
            targetPos = this.target.getPosition();
        }
        return targetPos.sub(pos).mag() < this.speed / 2;
    }

    seek(pos) {
        let selfPos = this.owner.getPosition();
        let desireHead = pos.sub(selfPos)
        if (desireHead.x !== 0 || desireHead.y !== 0) {
            desireHead.normalizeSelf();
        }
        let desireSpeed = desireHead.mul(this.speed);
        let force = desireSpeed.sub(this.getHead().mul(this.speed));
        return force;
    }

    update() {
        if(!this.target){
            this.owner.handleEvent({
                type: 'targetNotFound'
            });
            return;
        }
        if (this.reached){
            return;
        }
        let destV = this.getHead().mul(this.speed);
        const selfPos = this.owner.getPosition();
        let targetPos = this.target.getHitPosition();
        if(this.useRolePos){
            targetPos = this.target.getPosition();
        }
        let dist = targetPos.sub(selfPos);
        const force = this.seek(targetPos);
        destV = destV.add(force);
        if(dist.x !== 0 || dist.y !== 0){
            this.setHead(dist);
        }
        if (dist.mag() <= this.speed) {
            this.owner.setPosition(targetPos);
        }else{
            this.owner.setPosition(selfPos.add(destV));
        }
        super.update();
    }

}

export default FollowTrace;