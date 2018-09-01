import BaseEffect from './BaseEffect';
import ContextConst from '../../logic/const/ContextConst';
import Log from '../../lib/Log';

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
        target.logicEntity.changeHp(this.hpDelta);
        Log.log(`ExtraHpEffect生效，hp:${oldValue}=>${target.logicEntity.getHp()}`);
        this.showEffect(target, this.hpDelta);
    }

    undoEffect(){
        target.logicEntity.changeHp(-this.hpDelta);
        this.hpDelta = 0;
    }

    showEffect(target, value) {
        const node = new cc.Node();
        const label = node.addComponent(cc.Label);
        const outline = node.addComponent(cc.LabelOutline);
        outline.color = cc.color(0, 255, 0, 255);
        outline.width = 1;
        label.fontSize = 50;
        label.lineHeight = 70;
        node.color = cc.color(0, 255, 0, 255);
        label.string = '+' + value;
        node.parent = target.view.parent;
        node.zIndex = 10000;
        node.position = cc.v2(target.view.x, target.view.y + 120);
        node.runAction(cc.sequence(cc.moveBy(1, cc.v2(0, 100)).easing(cc.easeExponentialIn(0.2)), cc.fadeOut(0.3), cc.removeSelf()));
    }
}

export default ExtraHpEffect;