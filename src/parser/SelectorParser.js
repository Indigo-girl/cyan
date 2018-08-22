import AliveSelector from '../view/selector/AliveSelector';
import CampSelector from '../view/selector/CampSelector';
import TruncateSelector from '../view/selector/TruncateSelector';
import ComplexSelector from '../view/selector/ComplexSelector';

class SelectorParser{

    parse(selectorConfig, owner){
        switch(selectorConfig.type){
            case 'alive':
                return this._parseAlive(selectorConfig, owner);
            case 'camp':
                return this._parseCamp(selectorConfig, owner);
            case 'truncate':
                return this._parseTruncate(selectorConfig, owner);
            default:
                console.warn('未知的selector类型：', selectorConfig);
        }
    }

    _parseAlive(config){
        const selector = new AliveSelector(config.value);
        return selector;
    }

    _parseCamp(config){
        const selector = new CampSelector(config.value);
        return selector;
    }

    _parseTruncate(config){
        const selector = new TruncateSelector(config.value);
        return selector;
    }

    parseComplex(configs, owner){
        const selectors = [];
        for(const config of configs){
            selectors.push(this.parse(config, owner));
        }
        return new ComplexSelector(selectors);
    }

}

const parser = new SelectorParser();

export default parser;