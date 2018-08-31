import BaseSelector from "./BaseSelector";

class RectSelector extends BaseSelector {

    constructor(width, height) {
        super();
        // 属于范围筛选器
        this.isRange = true;
        this.width = width;
        this.height = height;
    }

    /**
     * 筛选方法
     * @param {ViewEntity} target
     * @param {ViewEntity} entity
     * @param {ViewBullet} bullet
     * @param {ViewWorld} world
     * @return {bool}
     * @memberof RectSelector
     */
    filter(target, entity, bullet) {
        // 按照子弹的位置计算出发射子弹时角色的位置
        const center = bullet.getPosition().sub(bullet.offset);
        const direct = bullet.getDirect();
        let minX;
        let maxX;
        if(direct > 0){
            minX = center.x;
            maxX = center.x + this.width;
        }else{
            minX = center.x - this.width;
            maxX = center.x;
        }
        const minY = center.y - this.height / 2;
        const maxY = center.y + this.height / 2;
        const pos = target.getPosition();
        return pos.x >= minX && pos.x <=maxX && pos.y >= minY && pos.y <= maxY;
    }

    /**
     * 获取攻击位置
     * @param {ViewEntity} atker
     * @param {ViewEntity} target
     * @param {number} widthRatio -[0-1] 1表示目标处于区域最边缘
     * @param {number} heightRatio -[0-1] 1表示目标处于区域最上方或者最下方
     * @memberof RectSelector
     */
    getAtkPos(atker, target, widthRatio, heightRatio) {
        const tpos = target.getPosition();
        const apos = atker.getPosition();
        const dist = tpos.sub(apos);
        let targetX = this.width * widthRatio;
        let targetY = this.height / 2 * heightRatio;
        if(Math.abs(dist.x) < targetX && Math.abs(dist.y) < targetY){
            return apos;
        }
        if(Math.abs(dist.x) < targetX){
            targetX = Math.abs(dist.x);
        }
        if(Math.abs(dist.y) < targetY){
            targetY = Math.abs(dist.y);
        }
        const xScale = dist.x >= 0 ? 1 : -1;
        const yScale = dist.y >=0 ? 1 : -1;
        const delta = cc.v2(targetX * xScale, targetY * yScale);
        return tpos.sub(delta);
    }

}

export default RectSelector;