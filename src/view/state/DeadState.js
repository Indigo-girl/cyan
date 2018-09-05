import BaseState from './BaseState';
import pubfunc from '../../logic/utils/WorldUtils';

class DeadState extends BaseState {

    constructor() {
        super('dead');
    }

    onEnter(sm) {
        super.onEnter(sm);
        sm.viewEntity.pauseAnim();
        sm.viewEntity.view.runAction(cc.sequence(cc.fadeOut(2), cc.callFunc(()=>{
            sm.viewEntity.onDead();
        })));
        pubfunc.getWorld().handleEvent({type: 'enterDead', detail: sm.viewEntity.id});
    }

    onExit(sm){
        sm.viewEntity.onResurrect();
        pubfunc.getWorld().handleEvent({ type: 'exitDead', detail: sm.viewEntity.id });
    }

}

export default DeadState;