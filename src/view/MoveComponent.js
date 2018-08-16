import ViewUtils from './ViewUtils';

const SPEED = 2;

class MoveComponent{

    constructor(viewEntity){
        this.viewEntity = viewEntity;
    }

    moveTo(pos){
        console.log('targe pos in move comp:', pos);
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
            type: 'dynamic'
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
        let desireHead = pos.sub(selfPos).normalizeSelf();
        let desireSpeed = desireHead.mul(SPEED);
        let force = desireSpeed.sub(this.viewEntity.getHead().mul(SPEED));
        return force;
    }

    update(){
        let destV = this.viewEntity.getHead().mul(SPEED);
        if(this.targetInfo){
            const selfPos = this.getPosition();
            let targetPos
            if(this.targetInfo.tyep === 'static'){
                targetPos = this.targetInfo.pos
            }else if(this.targetInfo.type === 'dynamic'){
                targetPos = ViewUtils.getAtkPos(this.viewEntity, this.targetInfo.target, this.targetInfo.radius);
            }
            let dist = targetPos.sub(selfPos);
            if(dist.mag() <= SPEED){
                this.setPosition(targetPos);
                // 抛出到达事件
                this.viewEntity.handleEvent({ type: 'reachAtkArea' });
                this.targetInfo = null;
                return;
            }
            const force = this.seek(targetPos);
            destV = destV.add(force);
            this.viewEntity.setHead(destV);
        }
        this.setPosition(this.getPosition().add(destV));
    }

}

export default MoveComponent;