import AliveSelector from '../view/selector/AliveSelector';
import CampSelector from '../view/selector/AliveSelector';

class SelectorParser{

    parse(selectorConfig, owner){
        switch(selectorConfig.type){
            case 'alive':
                return this._parseAlive(selectorConfig, owner);
            case 'camp':
                return this._parseCamp(selectorConfig, owner);
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

}

const parser = new SelectorParser();

export default parser;