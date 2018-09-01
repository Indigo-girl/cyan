import BaseEffect from './BaseEffect';
import ContextConst from '../../logic/const/ContextConst';
import Log from '../../lib/Log';

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
        Log.log(`${this.owner.id}对${target.id}造成base:${this.base},pro:${proValue},scale:${scaleValue/1000}，最终伤害为：${this.delta}`);
        target.onHurt(this.delta, this.owner);
        // 伤害飘字
        this.showEffect(target, this.delta);        
    }

    undoEffect(target){
        target.logicEntity.changeHp(this.delta);
    }

    showEffect(target, hurtValue){
        const node = new cc.Node();
        const label = node.addComponent(cc.Label);
        const outline = node.addComponent(cc.LabelOutline);
        outline.color = cc.color(255, 0, 0, 255);
        outline.width = 1;
        label.fontSize = 50;
        label.lineHeight = 70;
        node.color = cc.color(255, 0, 0, 255);
        label.string = -hurtValue;
        node.parent = target.view.parent;
        node.zIndex = 10000;
        node.position = cc.v2(target.view.x, target.view.y + 120);
        node.runAction(cc.sequence(cc.moveBy(1, cc.v2(0, 100)).easing(cc.easeExponentialIn(0.2)), cc.fadeOut(0.3), cc.removeSelf()));
    }

}

export default HurtEffect;