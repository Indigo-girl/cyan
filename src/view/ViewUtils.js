import WorldUtils from '../logic/utils/WorldUtils';

const edgeLen = 50;

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

function checkCollision(atk, def, pos){
    let entities = WorldUtils.getWorld().getAllStayEntity();
    for(const entity of entities){
        if(entity !== atk && entity !== def){
            if (entity.getPosition().sub(pos).mag() < edgeLen){
                return true;
            }
        }
    }
    return false;
}

function getAtkPos(atk, def, radius, alignY) {
    if(alignY){
        return getAtkPosAlignY(atk, def, radius);
    }
    const atkPos = atk.getPosition();
    const defPos = def.getPosition();
    const dist = defPos.sub(atkPos);
    const length = dist.mag();
    let pos;
    if(length <= radius){
        pos = atkPos;
    }else{
        let scale = radius / length;
        let delta = dist.mul(scale);
        pos = defPos.sub(delta);
        const originPos = pos;
        const rotateStep = Math.asin(edgeLen / 2 / radius); 
        let rotateDelta = rotateStep;
        let rdelta;
        // 旋转delta
        // 如果还是没有找到，缩小delta
        while(checkCollision(atk, def, pos)){
            if(rotateDelta > 2*Math.PI){
                // 如果搜寻失败则直接使用初始选定位置
                return originPos;
            }
            rdelta = delta.rotate(rotateDelta);
            if(rotateDelta > 0){
                rotateDelta = -rotateDelta;
            }else{
                rotateDelta = -rotateDelta + rotateStep;
            }
            pos = defPos.sub(rdelta);
        }
    }
    return pos;
}

export default {
    getAtkPos: getAtkPos
};

