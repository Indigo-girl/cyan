import BaseSelector from "./BaseSelector";

class PropSorter extends BaseSelector{

    constructor(proId, desc){
        super();
        this.proId = proId;
        this.desc = !!desc;
    }

    sort(targets){
        targets.sort((a, b)=>{
            const logica = a.logicEntity;
            const logicb = b.logicEntity;
            if(this.desc){
                return logicb.getRealProp(this.proId) - logica.getRealProp(this.proId);
            }else{
                return logica.getRealProp(this.proId) - logicb.getRealProp(this.proId);
            }
        });
        return targets;
    }

}

export default PropSorter;