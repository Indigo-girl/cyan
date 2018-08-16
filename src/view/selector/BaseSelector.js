class BaseSelector{

    constructor(){}

    getTargets(entity, world){
        return world.getAllEntity();
    }

}

export default BaseSelector;