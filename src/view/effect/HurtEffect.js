import BaseEffect from './BaseEffect';
import ContextConst from '../../logic/const/ContextConst';
import Log from '../../lib/Log';
import WorldUtils from '../../logic/utils/WorldUtils';

class HurtEffect extends BaseEffect{

    constructor(base, prosInfo, scaleInfo, owner){
        super();
        this.owner = owner;
        this.base = base || 0;
        this.prosInfo = prosInfo || [];
        this.scaleInfo = scaleInfo || [];
        this.delta = 0;
    }

    doEffect(target){
        const proValue = ContextConst.getEffectValue(this.prosInfo, target, this.owner);
        const scaleValue = 1000 + ContextConst.getEffectValue(this.scaleInfo, target, this.owner);
        this.delta = Math.floor((this.base + proValue) * scaleValue / 1000);
        const realHurt = target.onHurt(this.delta, this.owner);
        Log.log(`${this.owner.id}对${target.id}造成base:${this.base},pro:${proValue},scale:${scaleValue / 1000}，最终伤害为：${this.delta}，扣血:${realHurt}`);
        this.delta = realHurt;
        const showValue = Math.floor(this.delta);
        if(showValue > 0){
            // 伤害飘字
            this.showEffect(target, showValue);  
        }
    }

    undoEffect(target){
        target.logicEntity.changeHp(this.delta);
    }

    showEffect(target, hurtValue){
        cc.loader.loadRes('prefab/war/damage', (err, prefab) => {
            if (err) {
                Log.warn(err);
                return;
            }
            const node = cc.instantiate(prefab);
            const label = node.getComponent(cc.Label);
            label.string = -hurtValue;
            node.parent = target.view.parent;
            node.zIndex = 10000;
            node.position = cc.v2(target.view.x, target.view.y + target.hitPoint.y * Math.abs(target.view.scaleX) * 1.4);
            node.runAction(cc.sequence(cc.moveBy(1, cc.v2(0, 100)).easing(cc.easeExponentialIn(0.1)), 
                cc.fadeOut(0.2), cc.removeSelf()));
        });
    }

}

export default HurtEffect;