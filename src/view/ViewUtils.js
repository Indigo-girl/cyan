function  getAtkPos(atk, def, radius){
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

export default {
    getAtkPos: getAtkPos
};

