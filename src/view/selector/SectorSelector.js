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

    /**
     * 获取攻击位置
     * @param {ViewEntity} atker
     * @param {ViewEntity} target
     * @param {number} radiusRatio -[0-1] 1表示目标处于区域最边缘
     * @param {number} degreeRatio -[0-1] 1表示目标处于区域最上方或者最下方
     * @memberof SectorSelector
     */
    getAtkPos(atker, target, radiusRatio, degreeRatio){
        const tpos = target.getPosition();
        const apos = atker.getPosition();
        const dist = tpos.sub(apos);
        const length = dist.mag();

        const targetDegree = this.degree / 2 * degreeRatio;
        let targetRad = Math.PI * targetDegree / 180;
        let targetRadius = this.radius * radiusRatio;

        const rad = Math.abs(Math.atan(dist.y / dist.x));
        if(rad <= targetRad && length <= targetRadius){
            return apos;
        } 
        if(rad < targetRad){
            targetRad = rad;
        }
        if(length < targetRadius){
            targetRadius = length;
        }
        const xScale = dist.x > 0 ? 1 : -1;
        const yScale = dist.y > 0 ? 1 : -1;
        const delta = cc.v2(xScale * targetRadius * Math.cos(targetRad), yScale * targetRadius * Math.sin(targetRad));
        const targetPos = tpos.sub(delta);
        return targetPos;
    }

}

export default SectorSelector;