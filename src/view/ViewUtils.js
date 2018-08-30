function  getAtkPosAlignY(atk, def, radius){
    const atkPos = atk.getPosition();
    const defPos = def.getPosition();
    if (defPos.x >= atkPos.x) {
        const x = Math.max(atkPos.x, defPos.x - radius);
        return cc.v2(x, defPos.y);
    } else {
        const x = Math.min(defPos.x + radius, atkPos.x);
        return cc.v2(x, defPos.y);
    }
}

function getAtkPos(atk, def, radius, alignY) {
    if(alignY){
        return getAtkPosAlignY(atk, def, radius);
    }
    const atkPos = atk.getPosition();
    const defPos = def.getPosition();
    const dist = atkPos.sub(defPos);
    const length = dist.mag();
    let pos;
    if(length <= radius){
        pos = atkPos;
    }else{
        let scale = radius / length;
        let delta = dist.mul(scale);
        pos = defPos.add(delta);
    }
    return pos;
}

export default {
    getAtkPos: getAtkPos
};

