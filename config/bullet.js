export default {
    // 程咬金
    '3001000': {
        spinePath: '',
        hitEffect: 'bullet/CYJ/hit_blsfbd',
        offset: { x: 0, y: 0 },
        effects: [{ type: 'hurt', value: 0, prosInfo: [{ targetType: 0, proId: 5, scale: 1 }], }],
        buffs: [],
        selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'truncate', value: 1 }, { type: 'distSorter', bValue: false }],
        trigger: { type: 'instant' },
    },

    '3001001': {
        spinePath: '',
        hitEffect: 'bullet/CYJ/hit_blsfbd',
        explodeEffectPath: '',
        groundEffectPath: 'bullet/CYJ/hit_blsf',
        offset: { x: 0, y: 0 },
        effects: [{ type: 'hurt', value: 300 }],
        buffs: ['4001000'],
        selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'distSorter', bValue: false }, { type: 'circle', radius: 200 }],
        trigger: { type: 'instant'},
        mustHit: true,
    },

    '3001002': {
        spinePath: '',
        hitEffect: '',
        offset: { x: 0, y: 0 },
        effects: [{ type: 'propDirty', proId: 6, prosInfo: [{ targetType: 1, proId: 10001, scale: 10, step: 3 }] },
        { type: 'propDirty', proId: 11, prosInfo: [{ targetType: 1, proId: 10001, scale: 10, step: 3 }] }],
        buffs: [],
        selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 5 }],
        trigger: { type: 'instant' },
        mustHit: true,
    },


    // 吕布
    '3002000': {
        spinePath: '',
        hitEffect: 'bullet/LB/hit_mstgbd',
        offset: { x: 0, y: 0 },
        effects: [{ type: 'hurt', value: 0, prosInfo: [{ targetType: 0, proId: 5, scale: 1 }], }],
        buffs: [],
        selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'truncate', value: 1 }, { type: 'distSorter', bValue: false }],
        trigger: { type: 'instant' },
    },

    '3002001': {
        spinePath: '',
        hitEffect: '',
        explodeEffectPath: 'bullet/LB/hit_mstj02',
        groundEffectPath: 'bullet/LB/hit_mstj01',
        offset: { x: 0, y: 0 },
        effects: [{ type: 'hurt', value: 500 }],
        buffs: ['4002000'],
        selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'distSorter', bValue: false }, { type: 'truncate', value: 1 }],
        trigger: { type: 'event', value: 'traceReach' },
        trace: { type: 'blink', initHead: { x: 1, y: 2 }, speed: 20 },
        explodeSelectors: [{ type: 'circle', radius: 200 }, { type: 'camp', value: 4 }, { type: 'alive', bValue: true }],
        explodeEffects: [{ type: 'hurt', value: 500 }],
        mustHit: true,
    },

    '3002002': {
        spinePath: '',
        hitEffect: '',
        offset: { x: 0, y: 0 },
        effects: [],
        buffs: ['4002001'],
        selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 5 }],
        trigger: { type: 'instant' },
        mustHit: true,
    },


    // 荆轲
    '3003000': {
        spinePath: '',
        hitEffect: 'bullet/JK/hit_hgbd',
        offset: { x: 0, y: 0 },
        effects: [{ type: 'hurt', value: 0, prosInfo: [{ targetType: 0, proId: 5, scale: 1 }], }],
        buffs: [],
        selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'truncate', value: 1 }, { type: 'distSorter', bValue: false }],
        trigger: { type: 'instant' },
    },

    '3003001': {
        spinePath: 'bullet/JK/bullet_hg',
        hitEffect: 'bullet/JK/hit_hgbd',
        offset: { x: 200, y: -10 },
        effects: [{ type: 'hurt', value: 600, scaleInfo: [{ targetType: 1, proId: 10001, scale: 10 }] }],
        buffs: [],
        selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'distSorter', bValue: false }, { type: 'rect', width: 1000, height: 400 }],
        trigger: { type: 'horizon', length: 1200, speed: 40, isBulletMove: false },
        mustHit: true,
    },

    '3003002': {
        spinePath: '',
        hitEffect: '',
        offset: { x: 0, y: 0 },
        effects: [{ type: 'propDirty', proId: 5, prosInfo: [{ targetType: 1, proId: 8, scale: 5, step: 1 }] },
        { type: 'propDirty', proId: 9, prosInfo: [{ targetType: 1, proId: 8, scale: 2, step: 1 }] }],
        buffs: [],
        selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 5 }],
        trigger: { type: 'instant' },
        mustHit: true,
    },


    // 孙尚香
    '3004000': {
        spinePath: 'bullet/SSX/fire_ptzd',
        hitEffect: 'bullet/SSX/hit_jjnpbd',
        offset: { x: -40, y: 35 },
        effects: [{ type: 'hurt', value: 0, prosInfo: [{ targetType: 0, proId: 5, scale: 1 }] }],
        buffs: [],
        selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'truncate', value: 1 }, { type: 'distSorter', bValue: false }],
        trigger: { type: 'event', value: 'traceReach' },
        trace: { type: 'follow', initHead: { x: 1, y: 2 }, speed: 40 }
    },

    '3004001': {
        spinePath: 'bullet/SSX/fire_zd',
        hitEffect: 'bullet/SSX/hit_jjnpbd',
        explodeEffectPath: 'bullet/SSX/hit_jjnp01',
        groundEffectPath: 'bullet/SSX/hit_jjnp02',
        offset: { x: -70, y: 40 },
        effects: [{ type: 'hurt', value: 500 }],
        buffs: [],
        selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'distSorter', bValue: true }, { type: 'truncate', value: 1 }],
        trigger: { type: 'event', value: 'traceReach' },
        trace: { type: 'follow', initHead: { x: 1, y: 2 }, speed: 40, useRolePos: true },
        explodeSelectors: [{ type: 'circle', radius: 200 }, { type: 'camp', value: 4 }, { type: 'alive', bValue: true }],
        explodeEffects: [{ type: 'hurt', value: 500 }],
        mustHit: true,
    },

    '3004002': {
        spinePath: '',
        hitEffect: '',
        offset: { x: 0, y: 0 },
        effects: [{ type: 'propDirty', proId: 5, prosInfo: [{ targetType: 1, proId: 9, scale: 1, step: 1 }] }],
        buffs: [],
        selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 5 }],
        trigger: { type: 'instant' },
        mustHit: true,
    },


    // 诸葛亮
    '3005000': {
        spinePath: 'bullet/ZGL/fire_fq',
        hitEffect: 'bullet/ZGL/hit_yqd',
        offset: { x: 0, y: 80 },
        effects: [{ type: 'hurt', value: 0, prosInfo: [{ targetType: 0, proId: 5, scale: 1 }] }],
        buffs: [],
        selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'truncate', value: 1 }, { type: 'distSorter', bValue: false }],
        trigger: { type: 'event', value: 'traceReach' },
        trace: { type: 'follow', initHead: { x: 1, y: 2 }, speed: 40 }
    },

    '3005001': {
        spinePath: 'bullet/ZGL/bullet_dfpx',
        hitEffect: 'bullet/ZGL/hit_yqd',
        offset: { x: 0, y: 70 },
        effects: [{ type: 'hurt', value: 600 }],
        buffs: [],
        selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'sector', degree: 30, radius: 1000 }],
        trigger: { type: 'horizon', length: 1000, speed: 30, isBulletMove: false },
        mustHit: true,
    },

    '3005002': {
        spinePath: 'bullet/ZGL/bullet_yqd',
        hitEffect: 'bullet/ZGL/hit_yqd',
        offset: { x: 0, y: 320 },
        effects: [{ type: 'hurt', value: 700 }],
        buffs: [],
        selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'truncate', value: 1 }, { type: 'distSorter', bValue: false }],
        trigger: { type: 'event', value: 'traceReach' },
        trace: { type: 'follow', initHead: { x: 1, y: 2 }, speed: 20 },
        mustHit: true,
    },

    // 分裂子弹测试配置
    // '10010210': {
    //     spinePath: 'bullet/ZGL/bullet_dfpx',
    //     hitEffect: 'bullet/ZGL/hit_yqd',
    //     offset: { x: 0, y: 70 },
    //     effects: [],
    //     buffs: [],
    //     selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }],
    //     trigger: { type: 'event', value: 'animCompleted'},
    //     mustHit: true,
    //     subBullet: '10010211'
    // },

    // '10010211': {
    //     spinePath: 'bullet/ZGL/bullet_yqd',
    //     hitEffect: 'bullet/ZGL/hit_yqd',
    //     offset: { x: -50, y: 80 },
    //     effects: [{ type: 'hurt', value: 700 }],
    //     buffs: [],
    //     trigger: { type: 'event', value: 'traceReach' },
    //     trace: { type: 'follow', initHead: { x: 1, y: 2 }, speed: 20 },
    //     mustHit: true,
    // },


    // 狄仁杰
    '3009000': {
        spinePath: 'bullet/DRJ/fire_llzx',
        hitEffect: 'bullet/DRJ/hit_llzx',
        offset: { x: 0, y: 70 },
        effects: [{ type: 'hurt', value: 0, prosInfo: [{ targetType: 0, proId: 5, scale: 1 }] }],
        buffs: [],
        selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'truncate', value: 1 }, { type: 'distSorter', bValue: false }],
        trigger: { type: 'event', value: 'traceReach', isBulletMove: false },
        trace: { type: 'follow', initHead: { x: 1, y: 2 }, speed: 30 }
    },

    '3009001': {
        spinePath: 'bullet/DRJ/bullet_llzx',
        hitEffect: 'bullet/DRJ/hit_llzx',
        offset: { x: 0, y: 0 },
        effects: [{ type: 'hurt', value: 500 }],
        buffs: [],
        selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'distSorter', bValue: true }, { type: 'truncate', value: 1 }],
        trigger: { type: 'horizon', length: 800, speed: 10, isBulletMove: false },
        mustHit: true,
        // trace: { type: 'follow', initHead: { x: 1, y: 2 }, speed: 40, useRolePos: true },
    },

    // 貂蝉
    '3010000': {
        spinePath: 'bullet/DC/fire_lhy',
        hitEffect: 'bullet/DC/hit_lhy',
        offset: { x: -30, y: 70 },
        effects: [{ type: 'hurt', value: 0, prosInfo: [{ targetType: 0, proId: 5, scale: 1 }] }],
        buffs: [],
        selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'truncate', value: 1 }, { type: 'distSorter', bValue: false }],
        trigger: { type: 'event', value: 'traceReach' },
        trace: { type: 'follow', initHead: { x: 1, y: 2 }, speed: 30 }
    },

    '3010001': {
        spinePath: 'bullet/DC/bullet_lhy',
        hitEffect: 'bullet/DC/hit_lhy',
        offset: { x: 50, y: 20 },
        effects: [{ type: 'hurt', value: 700 }],
        buffs: [],
        selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'distSorter', bValue: true }, { type: 'truncate', value: 1 }],
        trigger: { type: 'horizon', length: 650, speed: 10, isBulletMove: false },
        mustHit: true,
    },


    // 张飞
    '3011000': {
        spinePath: '',
        hitEffect: 'bullet/ZF/hit_kspx',
        offset: { x: 0, y: 0 },
        effects: [{ type: 'hurt', value: 0, prosInfo: [{ targetType: 0, proId: 5, scale: 1 }], }],
        buffs: [],
        selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'truncate', value: 1 }, { type: 'distSorter', bValue: false }],
        trigger: { type: 'instant' },
    },

    '3011001': {
        spinePath: 'bullet/ZF/bullet_kspx',
        hitEffect: 'bullet/ZF/hit_kspx',
        offset: { x: -100, y: 100 },
        effects: [{ type: 'hurt', value: 600, scaleInfo: [{ targetType: 1, proId: 10001, scale: 10 }] }],
        buffs: [],
        selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'distSorter', bValue: false }, { type: 'rect', width: 200, height: 300 }],
        trigger: { type: 'horizon', length: 200, speed: 5, isBulletMove: false },
        mustHit: true,
    },



    // 关羽
    '3012000': {
        spinePath: '',
        hitEffect: 'bullet/GY/hit_qlyybd',
        offset: { x: 0, y: 0 },
        effects: [{ type: 'hurt', value: 0, prosInfo: [{ targetType: 0, proId: 5, scale: 1 }], }],
        buffs: [],
        selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'truncate', value: 1 }, { type: 'distSorter', bValue: false }],
        trigger: { type: 'instant' },
    },

    '3012001': {
        spinePath: 'bullet/GY/bullet_qlyy',
        hitEffect: 'bullet/GY/hit_qlyybd',
        offset: { x: -130, y: -10 },
        effects: [{ type: 'hurt', value: 600, scaleInfo: [{ targetType: 1, proId: 10001, scale: 10 }] }],
        buffs: [],
        selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'distSorter', bValue: false }, { type: 'rect', width: 1000, height: 300 }],
        trigger: { type: 'horizon', length: 1200, speed: 40, isBulletMove: false },
        mustHit: true,
    },


    // 赵云
    '3013000': {
        spinePath: '',
        hitEffect: 'bullet/ZY/hit_pyzl',
        offset: { x: 0, y: 0 },
        effects: [{ type: 'hurt', value: 0, prosInfo: [{ targetType: 0, proId: 5, scale: 1 }], }],
        buffs: [],
        selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'truncate', value: 1 }, { type: 'distSorter', bValue: false }],
        trigger: { type: 'instant' },
    },

    '3013001': {
        spinePath: 'bullet/ZY/bullet_pyzl',
        hitEffect: 'bullet/ZY/hit_pyzl',
        offset: { x: 30, y: 20 },
        effects: [{ type: 'hurt', value: 600 }],
        buffs: [],
        selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'sector', degree: 45, radius: 800 }],
        trigger: { type: 'horizon', length: 900, speed: 15, isBulletMove: false },                      // to be fixed 需要以分裂弹的机制实现
        mustHit: true,
    },


}