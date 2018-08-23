import HpEffect from '../view/effect/HpEffect';
import PropEffect from '../view/effect/PropEffect';
import Resurrect from '../view/effect/ResurrectEffect';
import ExtraHpEffect from '../view/effect/ExtraHpEffect';
import HurtEffect from '../view/effect/HurtEffect';

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
            case 'resurrect':
                return this._parseResurrect(effectConfig, atker);
            case 'extraHp':
                return this._parseExtraHpEffect(effectConfig, atker);
            default:
                console.warn('未知的effect类型:', effectConfig);
        }
    }

    _parseHpEffect(config) {
        return new HpEffect(config.value);
    }

    _parsePropEffect(config, atker) {
        // config = {
        //     type: 'resurrect',
        //     value: 1, //属性ID
        //     prosInfo: [{ targetType: 0, proId: 1, scale: 1.5 }],
        // }
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