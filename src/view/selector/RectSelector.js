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

}

export default RectSelector;