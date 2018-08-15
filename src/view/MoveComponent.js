const SPEED = 2;

class MoveComponent{

    constructor(viewEntity){
        this.viewEntity = viewEntity;
    }

    moveTo(pos){
        console.log('targe pos in move comp:', pos);
        this.targetPos = pos;
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
        if(this.targetPos){
            const selfPos = this.getPosition();
            const dist = this.targetPos.sub(selfPos);
            if(dist.mag() <= SPEED){
                this.setPosition(this.targetPos);
                // 抛出到达事件
                this.viewEntity.handleEvent({ type: 'reachAtkArea' });
                this.targetPos = null;
                return;
            }
            const force = this.seek(this.targetPos);
            destV = destV.add(force);
            this.viewEntity.setHead(destV);
        }
        this.setPosition(this.getPosition().add(destV));
    }

}

export default MoveComponent;