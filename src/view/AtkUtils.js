import ContextConst from '../logic/const/ContextConst';
import WorldUtils from '../logic/utils/WorldUtils';
import Log from '../lib/Log';

/**
 * 获取命中概率
 * @param {ViewEntity} atker
 * @param {ViewEntity} target
 */
function getAccProb(atker, target){
    const alogic = atker.logicEntity;
    const tlogic = target.logicEntity;
    const acc = alogic.getRealProp(ContextConst.PRO_ID.ACCURACY);
    const dodge = tlogic.getRealProp(ContextConst.PRO_ID.DODGE);
    return Math.min(1, Math.max(0, (acc + 1000 - dodge) / 1000));
}


/**
 * 获取暴击概率
 * @param {ViewEntity} atker
 * @param {ViewEntity} target
 * @returns
 */
function getCritProb(atker, target){
    const alogic = atker.logicEntity;
    const tlogic = target.logicEntity;
    const crit = alogic.getRealProp(ContextConst.PRO_ID.CRIT);
    const tough = tlogic.getRealProp(ContextConst.PRO_ID.TOUGH);
    return Math.min(1, Math.max(0, (crit - tough) / 1000));
}

/**
 * 获取暴击伤害倍率
 * @param {ViewEntity} atker
 * @returns
 */
function getCritScale(atker){
    const alogic = atker.logicEntity;
    const critScale = alogic.getRealProp(ContextConst.PRO_ID.CRTI_HURT_SCALE) || 1.5;
    return critScale;
}

/**
 * 获取防御豁免率
 * @param {ViewEntity} atker
 * @param {ViewEntity} target
 * @returns
 */
function getDefAvoidProb(atker, target){
    const alogic = atker.logicEntity;
    const defBreak = (alogic.getRealProp(ContextConst.PRO_ID.DEF_BREAK)||0) / 1000;
    const tlogic = target.logicEntity;
    const def = tlogic.getRealProp(ContextConst.PRO_ID.DEF);
    const level = tlogic.getLevel();
    const effectDef = def * (1 - defBreak);
    return Math.min(1, Math.max(0, effectDef / (effectDef + 10 * level + 5000)));
}

/**
 * 获取伤害倍率
 * @param {ViewEntity} atker
 * @param {ViewEntity} target
 * @returns
 */
function getHurtScale(atker, target){
    const alogic = atker.logicEntity;
    const hurtImproveScale = (alogic.getRealProp(ContextConst.PRO_ID.HURT_IMPROVE) || 0) / 1000;
    const tlogic = target.logicEntity;
    const hurtReduceScale = (tlogic.getRealProp(ContextConst.PRO_ID.HURT_REDUCE) || 0) / 1000;
    return Math.max(0, 1+hurtImproveScale-hurtReduceScale);
}


/**
 * 获取最终伤害值
 * @param {number} skillHurt
 * @param {ViewEntity} atker
 * @param {ViewEntity} target
 * @returns
 */
function getHurt(skillHurt, atker, target){
    const randFunc = WorldUtils.getWorld().randFunc;
    const defAvoid = getDefAvoidProb(atker, target);
    const hurtScale = getHurtScale(atker, target);
    let value = skillHurt * (1 - defAvoid) * hurtScale;
    let critProb = getCritProb(atker, target);
    let rvalue = randFunc();
    if(rvalue <= critProb){
        value = value * getCritScale(atker);
    }
    Log.log(`skillHurt:${skillHurt},hurtAvoid:${defAvoid},critProb:${critProb},rvalue:${rvalue},final:${value}`);
    return value;
}

export default {
    getAccProb: getAccProb,
    getHurt: getHurt
};
