import BaseSelector from "./BaseSelector";

class CircleSelector extends BaseSelector {

    constructor(radius) {
        super();
        // 属于范围筛选器
        this.isRange = true;
        this.radius = radius;
    }

    /**
     * 筛选方法
     * @param {ViewEntity} target
     * @param {ViewEntity} entity
     * @param {ViewBullet} bullet
     * @param {ViewWorld} world
     * @return {bool}
     * @memberof CircleSelector
     */
    filter(target, entity, bullet) {
        // 按照子弹的位置计算出发射子弹时角色的位置
        const center = bullet.getPosition().sub(bullet.offset);
        const pos = target.getPosition();
        let toPos = pos.sub(center);
        let dist = toPos.mag();
        return dist <= this.radius;
    }

}

export default CircleSelector;