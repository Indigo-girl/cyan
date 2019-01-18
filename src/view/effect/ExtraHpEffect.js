import BaseEffect from './BaseEffect';
import ContextConst from '../../logic/const/ContextConst';
import Log from '../../lib/Log';
import WorldUtils from '../../logic/utils/WorldUtils'

class ExtraHpEffect extends BaseEffect{

    constructor(prosInfo, owner){
        super();
        this.prosInfo = prosInfo;
        this.owner = owner;
        this.hpDelta = 0;
    }

    doEffect(target){
        this.hpDelta = ContextConst.getEffectValue(this.prosInfo, target, this.owner);
        const oldValue = target.logicEntity.getHp();
        this.hpDelta = target.logicEntity.changeHp(this.hpDelta);
        Log.log(`ExtraHpEffect生效，hp:${oldValue}=>${target.logicEntity.getHp()}`);
        const showValue = Math.floor(this.hpDelta);
        if(showValue > 0){
            this.showEffect(target, showValue);
        }
    }

    undoEffect(){
        target.logicEntity.changeHp(-this.hpDelta);
        this.hpDelta = 0;
    }

    showEffect(target, value) {
        cc.loader.loadRes('prefab/war/medical', (err, prefab) => {
            if (err) {
                Log.warn(err);
                return;
            }
            const node = cc.instantiate(prefab);
            const label = node.getComponent(cc.Label);
            label.string = '+' + value;
            node.parent = target.view.parent;
            node.zIndex = 10000;
            node.position = cc.v2(target.view.x, target.view.y + target.hitPoint.y * Math.abs(target.view.scaleX) * 1.4);
            node.runAction(cc.sequence(cc.moveBy(1, cc.v2(0, 100)).easing(cc.easeExponentialIn(0.1)),
                cc.fadeOut(0.2), cc.removeSelf()));
        });
    }
}

export default ExtraHpEffect;