import Log from '../../lib/Log';

const CONTEXT_CONST = {
    PRO_ID: {
        HP: 0,
        MAX_HP: 1,
        ENERGY: 2,
        MAX_ENERGY: 3,
        MAX_SPEED: 4,
        ATK: 5,
        DEF: 6,
        CRIT_SCALE: 7,
        // 暴击
        CRIT: 8,
        // 命中
        ACCURACY: 9,
        // 闪避
        DODGE: 10,
        // 韧性
        TOUGH: 11,
        // 攻速: 动画播放速率
        ATK_SPEED: 12,
        // 能量获取速率加成
        ENERGY_EXTRA_SCALE: 13
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
        Log.warn(`没有找到${proId}对应的maxProId`);
    },

    isCostMaxPro(proId){
        return proId === this.PRO_ID.MAX_HP || proId === this.PRO_ID.MAX_ENERGY;
    },

    getMaxProCostId(proId){
        switch(proId){
            case this.PRO_ID.MAX_HP:
                return this.PRO_ID.HP;
            case this.PRO_ID.MAX_ENERGY:
                return this.PRO_ID.ENERGY;
        }
    },

    EXTRA_ID: {
        // 数值1，需要配合scale来确定数值
        ONE: 10000,
        // 损血百分比（1=>1%）
        HP_LOSS_PERCENT: 10001,
        LAST_HURT_VALUE: 10002,
        LAST_HURT_PERCENT: 10003,
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
        SELF: 5,
    },

    TARGET_TYPE: {
        OWNER: 0,
        TARGET: 1
    },

    SKILL_TYPE: {
        NORMAL: 0,
        ENERGY: 1,
        PASSIVE: 2
    },

    OVERLAP_TYPE: {
        //替换最早的buff 
        REPLACE: 1,
        //新buff将无法加到角色身上
        REJECT: 2,
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
                Log.log('hp:',hp,'maxHp:', maxHp);
                return Math.floor((1 - hp / maxHp) * 100);
            case this.EXTRA_ID.LAST_HURT_PERCENT:
            case this.EXTRA_ID.LAST_HURT_VALUE:
                return context.getExtraInfo(proId);
            default:
                Log.warn(`unknow extra id:${proId}`);
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
        return this.getProsInfoValue(prosInfo, target.logicEntity.getContext(), 
            owner.logicEntity.getContext());
    },


    /**
     * 获取prosInfo的值
     * @param {Object} prosInfo
     * @param {RoleContext} target
     * @param {RoleContext} owner
     * @returns
     */
    getProsInfoValue(prosInfo, target, owner) {
        let total = 0;
        for (const info of prosInfo) {
            let context;
            switch (info.targetType) {
                case this.TARGET_TYPE.OWNER:
                    context = owner;
                    break;
                case this.TARGET_TYPE.TARGET:
                    context = target;
                    break;
            }
            let value = context.getRealProp(info.proId);
            // 如果设置了步进，则scale为步进收益
            if (info.step) {
                value = Math.floor(value / info.step);
            }
            total += value * info.scale;
        }
        return total;
    }
};

export default CONTEXT_CONST;