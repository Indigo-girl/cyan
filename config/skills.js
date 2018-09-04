export default {
    '100101': {
        id: '100101',
        type: 0,
        radius: 1000,
        bullets: [
            {
                spinePath: 'bullet/ZGL/fire_fq',
                hitEffect: 'bullet/ZGL/hit_yqd',
                offset: { x: 0, y: 80 },
                effects: [{ type: 'hurt', value: 0, prosInfo: [{ targetType: 0, proId: 5, scale: 1 }]}],
                buffs: [],
                selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'truncate', value: 1 }, { type: 'distSorter', bValue: false }],
                trigger: { type: 'event', value: 'traceReach' },
                trace: { type: 'follow', initHead: { x: 1, y: 2 }, speed: 40 }
            }
        ],
        atkAnim: 'attack01',
        prepareEffect: '',
        preparePoint: { x: -50, y: 300 },
        alignY: false,
    },

    '100102': {
        id: '100102',
        type: 0,
        radius: 1000,
        bullets: [
            {
                spinePath: 'bullet/ZGL/bullet_dfpx',
                hitEffect: 'bullet/ZGL/hit_yqd',
                offset: { x: 0, y: 70 },
                effects: [{ type: 'hurt', value: 600}],
                buffs: [],
                selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'sector', degree: 30, radius: 1000 }],
                trigger: { type: 'horizon', length: 1000, speed: 30, isBulletMove: false },
                mustHit: true,
            }
        ],
        atkAnim: 'attack01',
        prepareEffect: '',
        alignY: true,
        ratio1: 0.7,
        ratio2: 0.5
    },

    '100103': {
        id: '100103',
        type: 1,
        radius: 1000,
        bullets: [
            {
                spinePath: 'bullet/ZGL/bullet_yqd',
                hitEffect: 'bullet/ZGL/hit_yqd',
                offset: { x: 0, y: 350 },
                effects: [{ type: 'hurt', value: 600}],
                buffs: [],
                selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'truncate', value: 1 }, { type: 'propSorter', bValue: false, proId: 0 }],
                trigger: { type: 'event', value: 'traceReach' },
                trace: {type: 'follow', initHead:{x: 1, y: 2}, speed: 20}
            }
        ],
        atkAnim: 'attack02',
        prepareEffect: 'bullet/ZGL/prepare_yqd',
        preparePoint: {x:-50 ,y: 300},
        alignY: false,
    },

    '100201': {
        id: '100201',
        type: 0,
        radius: 200,
        bullets: [
            {
                spinePath: '',
                hitEffect: 'bullet/CYJ/hit_blsfbd',
                offset: { x: 0, y: 0 },
                effects: [{ type: 'hurt', value: 0, prosInfo: [{ targetType: 0, proId: 5, scale: 1 }], }],
                buffs: [],
                selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'truncate', value: 1 }, { type: 'distSorter', bValue: false }],
                trigger: { type: 'instant' },
            }
        ],
        atkAnim: 'attack01',
        prepareEffect: '',
        preparePoint: { x: 0, y: 0 },
        alignY: false,
    },
    
    '100202': {
        id: '100202',
        type: 1,
        radius: 300,
        jump: true,
        jumpDist: 200,
        jumpDuration: 10,
        bullets: [
            {
                spinePath: '',
                hitEffect: 'bullet/CYJ/hit_blsfbd',
                explodeEffectPath: '', 
                groundEffectPath: 'bullet/CYJ/hit_blsf',
                offset: { x: 0, y: 0 },
                effects: [{ type: 'hurt', value: 300}],
                buffs: ['10020201'],
                selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'distSorter', bValue: false}, {type: 'circle', radius: 200}],
                trigger: { type: 'instant'},
                mustHit: true,
            }
        ],
        atkAnim: 'attack02',
        prepareEffect: '',
        alignY: false,
        ratio1: 1
    },

    '100203': {
        id: '100203',
        type: 2,
        radius: 10000,
        bullets: [
            {
                spinePath: '',
                hitEffect: '',
                offset: { x: 0, y: 0 },
                effects: [{ type: 'propDirty', proId: 6, prosInfo: [{ targetType: 1, proId: 10001, scale: 10, step: 3 }] },
                    { type: 'propDirty', proId: 11, prosInfo: [{ targetType: 1, proId: 10001, scale: 10, step: 3 }] }],
                buffs: [],
                selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 5 }],
                trigger: { type: 'instant' },
                mustHit: true,
            }
        ],
        atkAnim: '',
        prepareEffect: '',
        alignY: false,
    },

    // '100302': {
    //     id: '100302',
    //     type: 1,
    //     radius: 500,
    //     move: true,
    //     moveDist: 100,
    //     moveDuration: 10,
    //     // 攻击完成后返回
    //     backAfterAtk: true,
    //     backDuration: 0,
    //     bullets: [
    //         {
    //             spinePath: '',
    //             hitEffect: '',
    //             offset: { x: 0, y: 0 },
    //             effects: [{ type: 'hurt', value: 600}],
    //             buffs: [],
    //             selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'distSorter', bValue: false }, { type: 'circle', radius: 200 }],
    //             trigger: { type: 'instant' },
    //         }
    //     ],
    //     atkAnim: 'attack01',
    //     prepareEffect: '',
    // },

    '100301': {
        id: '100301',
        type: 0,
        radius: 200,
        bullets: [
            {
                spinePath: '',
                hitEffect: 'bullet/JK/hit_hgbd',
                offset: { x: 0, y: 0 },
                effects: [{ type: 'hurt', value: 0, prosInfo: [{ targetType: 0, proId: 5, scale: 1 }], }],
                buffs: [],
                selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'truncate', value: 1 }, { type: 'distSorter', bValue: false }],
                trigger: { type: 'instant' },
            }
        ],
        atkAnim: 'attack01',
        prepareEffect: '',
        preparePoint: { x: 0, y: 0 },
        alignY: false,
    },

    '100302': {
        id: '100302',
        type: 1,
        radius: 600,
        bullets: [
            {
                spinePath: 'bullet/JK/bullet_hg',
                hitEffect: 'bullet/JK/hit_hgbd',
                offset: { x: 200, y: -10 },
                effects: [{ type: 'hurt', value: 600, scaleInfo: [{ targetType: 1, proId: 10001, scale: 10 }]}],
                buffs: [],
                selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'distSorter', bValue: false }, { type: 'rect', width: 1000, height: 500}],
                trigger: { type: 'horizon', length: 1000, speed: 30, isBulletMove: false },
                mustHit: true,
            }
        ],
        atkAnim: 'attack02',
        prepareEffect: '',
        alignY: true,
        ratio1: 0.6,
        ratio2: 0.2
    },

    '100303': {
        id: '100303',
        type: 2,
        radius: 0,
        bullets: [
            {
                spinePath: '',
                hitEffect: '',
                offset: { x: 0, y: 0 },
                effects: [{ type: 'propDirty', proId: 5, prosInfo: [{ targetType: 1, proId: 8, scale: 5, step: 1 }] },
                { type: 'propDirty', proId: 9, prosInfo: [{ targetType: 1, proId: 8, scale: 2, step: 1 }] }],
                buffs: [],
                selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 5 }],
                trigger: { type: 'instant' },
                mustHit: true,
            }
        ],
        atkAnim: '',
        prepareEffect: '',
        alignY: false,
    },

    '100401': {
        id: '100401',
        type: 0,
        radius: 1000,
        bullets: [
            {
                spinePath: 'bullet/SSX/fire_ptzd',
                hitEffect: 'bullet/SSX/hit_jjnpbd',
                offset: { x: -160, y: 50 },
                effects: [{ type: 'hurt', value: 0, prosInfo: [{ targetType: 0, proId: 5, scale: 1 }] }],
                buffs: [],
                selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'truncate', value: 1 }, { type: 'distSorter', bValue: false }],
                trigger: { type: 'event', value: 'traceReach' },
                trace: { type: 'follow', initHead: { x: 1, y: 2 }, speed: 40 }
            }
        ],
        atkAnim: 'attack01',
        prepareEffect: '',
        preparePoint: { x: 0, y: 0 },
        alignY: true,
    },

    '100402': {
        id: '100402',
        type: 1,
        radius: 1000,
        bullets: [
            {
                spinePath: 'bullet/SSX/fire_zd',
                hitEffect: 'bullet/SSX/hit_jjnpbd',
                explodeEffectPath: 'bullet/SSX/hit_jjnp01',
                groundEffectPath: 'bullet/SSX/hit_jjnp02',
                offset: { x: -180, y: 60 },
                effects: [{ type: 'hurt', value: 500 }],
                buffs: [],
                selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'distSorter', bValue: false }, { type: 'truncate', value: 1 }],
                trigger: { type: 'event', value: 'traceReach'},
                trace: { type: 'follow', initHead: { x: 1, y: 2 }, speed: 40, useRolePos:true },
                explodeSelectors: [{ type: 'circle', radius: 200 }, { type: 'camp', value: 4 }, { type: 'alive', bValue: true } ],
                explodeEffects: [{ type: 'hurt', value: 500}],
                mustHit: true,
            }
        ],
        atkAnim: 'attack02',
        prepareEffect: '',
        alignY: false,
    },

    '100403': {
        id: '100403',
        type: 2,
        radius: 0,
        bullets: [
            {
                spinePath: '',
                hitEffect: '',
                offset: { x: 0, y: 0 },
                effects: [{ type: 'propDirty', proId: 5, prosInfo: [{ targetType: 1, proId: 9, scale: 1, step: 1 }] }],
                buffs: [],
                selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 5 }],
                trigger: { type: 'instant' },
                mustHit: true,
            }
        ],
        atkAnim: '',
        prepareEffect: '',
    },

    '100501': {
        id: '100501',
        type: 0,
        radius: 200,
        bullets: [
            {
                spinePath: '',
                hitEffect: 'bullet/LB/hit_mstgbd',
                offset: { x: 0, y: 0 },
                effects: [{ type: 'hurt', value: 0, prosInfo: [{ targetType: 0, proId: 5, scale: 1 }], }],
                buffs: [],
                selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'truncate', value: 1 }, { type: 'distSorter', bValue: false }],
                trigger: { type: 'instant' },
            }
        ],
        atkAnim: 'attack01',
        prepareEffect: '',
        preparePoint: { x: 0, y: 0 },
        alignY: false,
    },

    '100502': {
        id: '100502',
        type: 0,
        radius: 500,
        bullets: [
            {
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
            }
        ],
        atkAnim: 'attack02',
        prepareEffect: '',
        alignY: false,
    },

    '100503': {
        id: '100503',
        type: 2,
        radius: 0,
        bullets: [
            {
                spinePath: '',
                hitEffect: '',
                offset: { x: 0, y: 0 },
                effects: [],
                buffs: ['10050301'],
                selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 5 }],
                trigger: { type: 'instant' },
                mustHit: true,
            }
        ],
        atkAnim: '',
        prepareEffect: '',
    },
}