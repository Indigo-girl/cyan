import HpEffect from '../view/effect/HpEffect';
import PropEffect from '../view/effect/PropEffect';
import Resurrect from '../view/effect/ResurrectEffect';
import ExtraHpEffect from '../view/effect/ExtraHpEffect';
import HurtEffect from '../view/effect/HurtEffect';
import PropScaleEffect from '../view/effect/PropScaleEffect';
import PropDirtyEffect from '../view/effect/PropDirtyEffect';
import Log from '../lib/Log';

class EffectParser {

    /**
     * 将配置解析为一个Effect实例
     * @param {Object} effectConfig - {type: 'hp', info: {..依照每个effect的需要}}
     * @param {ViewEntity} atker
     * @memberof EffectParser
     */
    parse(effectConfig, atker) {
        switch (effectConfig.type) {
            case 'hurt':
                return this._parseHurtEffect(effectConfig, atker);
            case 'hp':
                return this._parseHpEffect(effectConfig, atker);
            case 'prop':
                return this._parsePropEffect(effectConfig, atker);
            case 'propDirty':
                return new PropDirtyEffect(effectConfig.proId, effectConfig.prosInfo, atker);
            case 'propScale':
                return new PropScaleEffect(effectConfig.proId, effectConfig.scale, atker);
            case 'resurrect':
                return this._parseResurrect(effectConfig, atker);
            case 'extraHp':
                return this._parseExtraHpEffect(effectConfig, atker);
            default:
                Log.warn('未知的effect类型:', effectConfig);
        }
    }

    _parseHpEffect(config) {
        return new HpEffect(config.value);
    }

    _parsePropEffect(config, atker) {
        return new PropEffect(config.proId, config.prosInfo, atker);
    }

    _parseResurrect() {
        return new Resurrect();
    }

    _parseExtraHpEffect(config, atker) {
        return new ExtraHpEffect(config.prosInfo, atker);
    }

    _parseHurtEffect(config, atker) {
        return new HurtEffect(config.value, config.prosInfo, config.scaleInfo, atker);
    }

}

const parser = new EffectParser();

export default parser;