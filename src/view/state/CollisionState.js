import BaseState from "./BaseState";

class CollisionState extends BaseState {

    constructor() {
        super('walk');
    }

    onEnter(sm) {
        super.onEnter(sm);
        sm.viewEntity.playAnim('walk', true);
    }

    update(sm) {
        // update移动组件
        const velocity = sm.viewEntity.getCollisionVelocity();
        if (velocity.mag()==0){
            sm.viewEntity.handleEvent({
                type: "nocollision"
            });
        }else{
            sm.viewEntity.moveComp.moveBy(velocity);
        }
    }
}

export default CollisionState;