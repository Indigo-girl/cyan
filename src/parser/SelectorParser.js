import AliveSelector from '../view/selector/AliveSelector';
import CampSelector from '../view/selector/CampSelector';
import TruncateSelector from '../view/selector/TruncateSelector';
import PropSorter from '../view/selector/PropSorter';
import DistSorter from '../view/selector/DistSorter';
import SectorSelector from '../view/selector/SectorSelector';
import CircleSelector from '../view/selector/CircleSelector';
import RectSelector from '../view/selector/RectSelector';
import ComplexSelector from '../view/selector/ComplexSelector';
import Log from '../lib/Log';

class SelectorParser{

    parse(selectorConfig, owner){
        switch(selectorConfig.type){
            case 'alive':
                return this._parseAlive(selectorConfig, owner);
            case 'camp':
                return this._parseCamp(selectorConfig, owner);
            case 'truncate':
                return this._parseTruncate(selectorConfig, owner);
            case 'propSorter':
                return this._parsePropSorter(selectorConfig, owner);
            case 'distSorter':
                return new DistSorter(selectorConfig.bValue);
            case 'sector':
                return this._parseSectorSelector(selectorConfig, owner);
            case 'circle':
                return new CircleSelector(selectorConfig.radius);
            case 'rect':
                return new RectSelector(selectorConfig.width, selectorConfig.height);
            default:
                Log.warn('未知的selector类型：', selectorConfig);
        }
    }

    _parseAlive(config){
        const selector = new AliveSelector(config.bValue);
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

    _parsePropSorter(config){
        const selector = new PropSorter(config.proId, config.bValue);
        return selector;
    }

    _parseSectorSelector(config){
        const selector = new SectorSelector(config.degree, config.radius);
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