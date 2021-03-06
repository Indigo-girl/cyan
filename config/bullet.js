export default {
    '10010110': {
        spinePath: 'bullet/ZGL/fire_fq',
        hitEffect: 'bullet/ZGL/hit_yqd',
        offset: { x: 0, y: 80 },
        effects: [{ type: 'hurt', value: 0, prosInfo: [{ targetType: 0, proId: 5, scale: 1 }] }],
        buffs: [],
        selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'truncate', value: 1 }, { type: 'distSorter', bValue: false }],
        trigger: { type: 'event', value: 'traceReach' },
        trace: { type: 'follow', initHead: { x: 1, y: 2 }, speed: 40 }
    },

    '10010210': {
        spinePath: 'bullet/ZGL/bullet_dfpx',
        hitEffect: 'bullet/ZGL/hit_yqd',
        offset: { x: 0, y: 70 },
        effects: [{ type: 'hurt', value: 600 }],
        buffs: [],
        selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'sector', degree: 30, radius: 1000 }],
        trigger: { type: 'horizon', length: 1000, speed: 30, isBulletMove: false },
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
    
    '10010310': {
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

    '10020110': {
        spinePath: '',
        hitEffect: 'bullet/CYJ/hit_blsfbd',
        offset: { x: 0, y: 0 },
        effects: [{ type: 'hurt', value: 0, prosInfo: [{ targetType: 0, proId: 5, scale: 1 }], }],
        buffs: [],
        selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'truncate', value: 1 }, { type: 'distSorter', bValue: false }],
        trigger: { type: 'instant' },
    },

    '10020210': {
        spinePath: '',
        hitEffect: 'bullet/CYJ/hit_blsfbd',
        explodeEffectPath: '',
        groundEffectPath: 'bullet/CYJ/hit_blsf',
        offset: { x: 0, y: 0 },
        effects: [{ type: 'hurt', value: 300 }],
        buffs: ['10020201'],
        selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'distSorter', bValue: false }, { type: 'circle', radius: 200 }],
        trigger: { type: 'instant'},
        mustHit: true,
    },

    '10020310': {
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

    '10030110': {
        spinePath: '',
        hitEffect: 'bullet/JK/hit_hgbd',
        offset: { x: 0, y: 0 },
        effects: [{ type: 'hurt', value: 0, prosInfo: [{ targetType: 0, proId: 5, scale: 1 }], }],
        buffs: [],
        selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'truncate', value: 1 }, { type: 'distSorter', bValue: false }],
        trigger: { type: 'instant' },
    },

    '10030210': {
        spinePath: 'bullet/JK/bullet_hg',
        hitEffect: 'bullet/JK/hit_hgbd',
        offset: { x: 200, y: -10 },
        effects: [{ type: 'hurt', value: 600, scaleInfo: [{ targetType: 1, proId: 10001, scale: 10 }] }],
        buffs: [],
        selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'distSorter', bValue: false }, { type: 'rect', width: 1000, height: 400 }],
        trigger: { type: 'horizon', length: 1200, speed: 40, isBulletMove: false },
        mustHit: true,
    },

    '10030310': {
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

    '10040110': {
        spinePath: 'bullet/SSX/fire_ptzd',
        hitEffect: 'bullet/SSX/hit_jjnpbd',
        offset: { x: -40, y: 35 },
        effects: [{ type: 'hurt', value: 0, prosInfo: [{ targetType: 0, proId: 5, scale: 1 }] }],
        buffs: [],
        selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'truncate', value: 1 }, { type: 'distSorter', bValue: false }],
        trigger: { type: 'event', value: 'traceReach' },
        trace: { type: 'follow', initHead: { x: 1, y: 2 }, speed: 40 }
    },

    '10040210': {
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

    '10040310': {
        spinePath: '',
        hitEffect: '',
        offset: { x: 0, y: 0 },
        effects: [{ type: 'propDirty', proId: 5, prosInfo: [{ targetType: 1, proId: 9, scale: 1, step: 1 }] }],
        buffs: [],
        selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 5 }],
        trigger: { type: 'instant' },
        mustHit: true,
    },

    '10050110': {
        spinePath: '',
        hitEffect: 'bullet/LB/hit_mstgbd',
        offset: { x: 0, y: 0 },
        effects: [{ type: 'hurt', value: 0, prosInfo: [{ targetType: 0, proId: 5, scale: 1 }], }],
        buffs: [],
        selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'truncate', value: 1 }, { type: 'distSorter', bValue: false }],
        trigger: { type: 'instant' },
    },

    '10050210': {
        spinePath: '',
        hitEffect: '',
        explodeEffectPath: 'bullet/LB/hit_mstj02',
        groundEffectPath: 'bullet/LB/hit_mstj01',
        offset: { x: 0, y: 0 },
        effects: [{ type: 'hurt', value: 500 }],
        buffs: ['10050201'],
        selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'distSorter', bValue: false }, { type: 'truncate', value: 1 }],
        trigger: { type: 'event', value: 'traceReach' },
        trace: { type: 'blink', initHead: { x: 1, y: 2 }, speed: 20 },
        explodeSelectors: [{ type: 'circle', radius: 200 }, { type: 'camp', value: 4 }, { type: 'alive', bValue: true }],
        explodeEffects: [{ type: 'hurt', value: 500 }],
        mustHit: true,
    },

    '10050310': {
        spinePath: '',
        hitEffect: '',
        offset: { x: 0, y: 0 },
        effects: [],
        buffs: ['10050301'],
        selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 5 }],
        trigger: { type: 'instant' },
        mustHit: true,
    }

}