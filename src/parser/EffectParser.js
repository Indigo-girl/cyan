import HpEffect from '../view/effect/HpEffect';
import PropEffect from '../view/effect/PropEffect';
import Resurrect from '../view/effect/ResurrectEffect';

class EffectParser {

    /**
     * 将配置解析为一个Effect实例
     * @param {Object} effectConfig - {type: 'hp', info: {..依照每个effect的需要}}
     * @param {ViewEntity} atker
     * @memberof EffectParser
     */
    parse(effectConfig, atker) {
        switch (effectConfig.type) {
            case 'hp':
                return this._parseHpEffect(effectConfig, atker);
            case 'prop':
                return this._parsePropEffect(effectConfig, atker);
            case 'resurrect':
                return this._parseResurrect(effectConfig, atker);
        }
    }

    _parseHpEffect(config) {
        return new HpEffect(config.value);
    }

    _parsePropEffect(config, atker) {
        // config = {
        //     type: 'resurrect',
        //     value: 1, //属性ID
        //     additions: [{ targetType: 0, proId: 1, scale: 1.5 }],
        // }
        return new PropEffect(config.proId, config.additions, atker);
    }

    _parseResurrect() {
        return new Resurrect();
    }

}

const parser = new EffectParser();

export default parser;