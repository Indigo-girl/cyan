import ViewUtils from './ViewUtils';
import Log from '../lib/Log';

const SPEED = 2;

class MoveComponent{

    constructor(viewEntity){
        this.viewEntity = viewEntity;
    }

    moveTo(pos){
        Log.log('targe pos in move comp:', pos);
        this.targetInfo = {
            type: 'static',
            pos: pos
        }
    }

    /**
     * 移动进目标范围以内
     * @param {ViewEntity} target -目标
     * @param {number} radius -半径
     * @param {bool} alignY -是否Y轴对齐
     * @memberof MoveComponent
     */
    moveInRadius(target, radius, alignY){
        this.targetInfo = {
            target: target,
            radius: radius,
            alignY: alignY,
            type: 'radius'
        }
    }

    moveForSkill(target, skill){
        this.targetInfo = {
            target: target,
            skill: skill,
            type: 'skill'
        }
    }

    getPosition(){
        return this.viewEntity.getPosition();
    }

    setPosition(pos){
        this.viewEntity.setPosition(pos);
    }

    seek(pos){
        let selfPos = this.getPosition();
        let desireHead = pos.sub(selfPos)
        if(desireHead.x !== 0 || desireHead.y !== 0){
            desireHead.normalizeSelf();
        }
        let desireSpeed = desireHead.mul(SPEED);
        let force = desireSpeed.sub(this.viewEntity.getHead().mul(SPEED));
        return force;
    }

    update(){
        let destV = this.viewEntity.getHead().mul(SPEED);
        if(this.targetInfo){
            const selfPos = this.getPosition();
            if (this.targetInfo.target) {
                const skill = this.viewEntity.getCurSkill();
                if (!skill.checkTarget(this.targetInfo.target)) {
                    this.viewEntity.handleEvent({
                        // 目标不符合条件
                        type: 'targetUnfit'
                    });
                    return;
                }
            }
            let targetPos = this.getTargetPos();
            let dist = targetPos.sub(selfPos);
            const force = this.seek(targetPos);
            destV = destV.add(force);
            if(this.targetInfo.target) {
                this.viewEntity.setHead(this.targetInfo.target.getPosition().sub(selfPos));
            } else{
                this.viewEntity.setHead(dist);
            }
            if (dist.mag() <= SPEED) {
                this.setPosition(targetPos);
                // 抛出到达事件
                this.viewEntity.handleEvent({ type: 'reachPos' });
                this.targetInfo = null;
                return;
            }
        }
        this.setPosition(this.getPosition().add(destV));

    }

    getTargetPos(){
        switch (this.targetInfo.type) {
            case 'static':
                return this.targetInfo.pos;
            case 'radius':
                return ViewUtils.getAtkPos(this.viewEntity, this.targetInfo.target, this.targetInfo.radius, this.targetInfo.alignY);
            case 'skill':
                const skill = this.targetInfo.skill;
                let targetPos = skill.getAtkPos(this.targetInfo.target, skill.ratio1, skill.ratio2);
                if(!targetPos){
                    targetPos = ViewUtils.getAtkPos(this.viewEntity, this.targetInfo.target, skill.radius, skill.alignY);
                }
                return targetPos;
        }
        return this.getPosition();
    }

}

export default MoveComponent;