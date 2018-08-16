const CONTEXT_CONST = {
    PRO_ID: {
        HP: 0,
        MP: 1,
        MAXHP: 2,
        MAXMP: 3,
        MAXSPEED: 4,
        ATK: 5,
        DEF: 6,
        AGI: 7,
    },

    CAMP: {
        ALL: 0,
        // Entity属性中仅使用绝对阵营： PLAYER & MONSTER
        PLAYER: 1,
        MONSTER: 2,
        // 以下是相对阵营
        FRIEND: 3,
        ENEMY: 4,
    }
};

export default CONTEXT_CONST;