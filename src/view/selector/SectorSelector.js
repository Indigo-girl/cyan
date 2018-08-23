import BaseSelector from "./BaseSelector";
import ContextConst from '../../logic/const/ContextConst';

class SectorSelector extends BaseSelector{

    constructor(degree, radius){
        super();
        // 属于范围筛选器
        this.isRange = true;
        this.degree = degree;
        this.radius = radius;
    }

    /**
     * 筛选方法
     * @param {ViewEntity} target
     * @param {ViewEntity} entity
     * @param {ViewBullet} bullet
     * @param {ViewWorld} world
     * @return {bool}
     * @memberof SectorSelector
     */
    filter(target, entity, bullet) {
        // 按照子弹的位置计算出发射子弹时角色的位置
        const center = bullet.getPosition().sub(bullet.offset);
        const pos = target.getPosition();
        let toPos = pos.sub(center);
        const direct = bullet.getDirect();
        if(direct === ContextConst.DIRECT.RIGHT && toPos.x < 0){
            return false
        }
        if(direct === ContextConst.DIRECT.LEFT && toPos.x > 0){
            return false
        }
        let dist = toPos.mag();
        if (dist > this.radius) {
            return false;
        }
        if(dist.x < 0){
            dist.x = -dist.x;
        }
        let degree = Math.atan(toPos.y / toPos.x) / Math.PI * 180;
        return degree >= -this.degree/2 && degree <= this.degree/2;
    }

}

export default SectorSelector;