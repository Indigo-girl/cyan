const CONTEXT_CONST = {
    PRO_ID: {
        HP: 0,
        MAX_HP: 1,
        ENERGY: 2,
        MAX_ENERGY: 3,
        MAX_SPEED: 4,
        ATK: 5,
        DEF: 6,
    },

    isCostPro(proId){
        return proId === this.PRO_ID.HP || proId === this.PRO_ID.ENERGY;
    },

    getCostProMaxId(proId){
        switch(proId){
            case this.PRO_ID.HP:
                return this.PRO_ID.MAX_HP;
            case this.PRO_ID.ENERGY:
                return this.PRO_ID.MAX_ENERGY;
        }
        console.warn(`没有找到${proId}对应的maxProId`);
    },

    EXTRA_ID: {
        // 数值1，需要配合scale来确定数值
        ONE: 10000,
        // 损血百分比（1=>1%）
        HP_LOSS_PERCENT: 10001,
    },

    DIRECT: {
        RIGHT: 1,
        LEFT: -1
    },

    CAMP: {
        ALL: 0,
        // Entity属性中仅使用绝对阵营： PLAYER & MONSTER
        PLAYER: 1,
        MONSTER: 2,
        // 以下是相对阵营
        FRIEND: 3,
        ENEMY: 4,
    },

    TARGET_TYPE: {
        OWNER: 0,
        TARGET: 1
    },

    isExtraId(proId){
        return proId >= 10000;
    },

    /**
     * 获取统计值
     * @param {ContextConst.PRO_ID} proId
     * @param {RoleContext} context
     * @returns
     */
    getExtraProp(proId, context){
        switch(proId){
            case this.EXTRA_ID.ONE:
                return 1;
            case this.EXTRA_ID.HP_LOSS_PERCENT:
                const hp = context.getHp();
                const maxHp = context.getMaxHp();
                console.log('hp:',hp,'maxHp:', maxHp);
                return Math.floor((1 - hp / maxHp) * 100);
            default:
                console.warn(`unknow extra id:${proId}`);
                return 0;
        }
    },

    /**
     * 获取prosInfo的值
     * @param {Object} prosInfo
     * @param {ViewEntity} target
     * @param {ViewEntity} owner
     * @returns
     */
    getEffectValue(prosInfo, target, owner) { 
        let total = 0;
        for (const info of prosInfo) {
            let logic;
            switch(info.targetType){
                case this.TARGET_TYPE.OWNER:
                    logic = owner.logicEntity;
                    break;
                case this.TARGET_TYPE.TARGET:
                    logic = target.logicEntity;
                    break;
            }
            if (this.isExtraId(info.proId)) {
                total += logic.getExtraProp(info.proId) * info.scale;
            } else {
                total += logic.getRealProp(info.proId) * info.scale;
            }
        }
        return total;
    }
};

export default CONTEXT_CONST;