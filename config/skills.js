export default {
    '100001': {
        id: '100001',
        type: 0,
        radius: 500,
        bullets: [
            {
                spinePath: 'bullet/ZGL/bullet_yqd',
                hitEffect: 'bullet/ZGL/hit_yqd',
                offset: { x: 0, y: 350 },
                effects: [{ type: 'hurt', value: 0, prosInfo: [{ targetType: 0, proId: 5, scale: 1 }], }],
                buffs: [],
                selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'truncate', value: 1 }, { type: 'propSorter', bValue: false, proId: 0 }],
                trigger: { type: 'event', value: 'traceReach' },
                trace: { type: 'follow', initHead: { x: 1, y: 2 }, speed: 20 }
            }
        ],
        atkAnim: 'attack01',
        prepareEffect: '',
        preparePoint: { x: -50, y: 300 },
    },

    '100101': {
        id: '100101',
        type: 0,
        radius: 1000,
        bullets: [
            {
                spinePath: 'bullet/10002/10002',
                hitEffect: 'bullet/ZGL/hit_yqd',
                offset: { x: 0, y: 100 },
                // effects: [{ type: 'hurt', value: 600, prosInfo: [{ targetType: 0, proId: 5, scale: 0.5 }], scaleInfo: [{ targetType: 1, proId: 10001, scale: 20 }] }],
                effects: [{ type: 'hurt', value: 1000}],
                buffs: [],
                selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'sector', degree: 60, radius: 1000 }],
                trigger: { type: 'event', value: 'animCompleted' }
            }
        ],
        atkAnim: 'attack01',
        prepareEffect: '',
    },

    '100102': {
        id: '100102',
        type: 1,
        radius: 500,
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
    },

    // 临时普攻
    '100201': {
        id: '100201',
        type: 0,
        radius: 500,
        bullets: [
            {
                spinePath: 'bullet/ZGL/bullet_yqd',
                hitEffect: 'bullet/ZGL/hit_yqd',
                offset: { x: 0, y: 350 },
                effects: [{ type: 'hurt', value: 0, prosInfo: [{ targetType: 0, proId: 5, scale: 1 }], }],
                buffs: [],
                selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'truncate', value: 1 }, { type: 'propSorter', bValue: false, proId: 0 }],
                trigger: { type: 'event', value: 'traceReach' },
                trace: { type: 'follow', initHead: { x: 1, y: 2 }, speed: 20 }
            }
        ],
        atkAnim: 'attack01',
        prepareEffect: '',
        preparePoint: { x: -50, y: 300 },
    },
    
    '100202': {
        id: '100202',
        type: 1,
        radius: 300,
        jump: true,
        jumpDist: 100,
        jumpDuration: 10,
        bullets: [
            {
                spinePath: '',
                hitEffect: '',
                offset: { x: 0, y: 0 },
                effects: [{ type: 'hurt', value: 300}],
                buffs: ['10020201'],
                selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'distSorter', bValue: false}, {type: 'circle', radius: 200}],
                trigger: { type: 'instant'},
            }
        ],
        atkAnim: 'attack02',
        prepareEffect: '',
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
    },

    // 临时普攻
    '100301': {
        id: '100301',
        type: 0,
        radius: 500,
        bullets: [
            {
                spinePath: 'bullet/ZGL/bullet_yqd',
                hitEffect: 'bullet/ZGL/hit_yqd',
                offset: { x: 0, y: 350 },
                effects: [{ type: 'hurt', value: 0, prosInfo: [{ targetType: 0, proId: 5, scale: 1 }] }],
                buffs: [],
                selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'distSorter', bValue: false }, { type: 'truncate', value: 1 }],
                trigger: { type: 'event', value: 'traceReach' },
                trace: { type: 'follow', initHead: { x: 1, y: 2 }, speed: 20 },
                explodeSelectors: [{ type: 'circle', radius: 500 }],
                explodeEffects: [{type: 'hurt', value: 0, prosInfo: [{ targetType: 0, proId: 5, scale: 0.5 }]}]
            }
        ],
        atkAnim: 'attack01',
        prepareEffect: '',
        preparePoint: { x: -50, y: 300 },
    },

    '100302': {
        id: '100302',
        type: 1,
        radius: 500,
        move: true,
        moveDist: 100,
        moveDuration: 10,
        // 攻击完成后返回
        backAfterAtk: true,
        backDuration: 0,
        bullets: [
            {
                spinePath: '',
                hitEffect: '',
                offset: { x: 0, y: 0 },
                effects: [{ type: 'hurt', value: 600}],
                buffs: [],
                selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'distSorter', bValue: false }, { type: 'circle', radius: 200 }],
                trigger: { type: 'instant' },
            }
        ],
        atkAnim: 'attack01',
        prepareEffect: '',
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
    },

    // 临时普攻
    '100401': {
        id: '100401',
        type: 0,
        radius: 500,
        bullets: [
            {
                spinePath: 'bullet/ZGL/bullet_yqd',
                hitEffect: 'bullet/ZGL/hit_yqd',
                offset: { x: 0, y: 350 },
                effects: [{ type: 'hurt', value: 0, prosInfo: [{ targetType: 0, proId: 5, scale: 1 }] }],
                buffs: [],
                selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'distSorter', bValue: false }, { type: 'truncate', value: 1 }],
                trigger: { type: 'event', value: 'traceReach' },
                trace: { type: 'follow', initHead: { x: 1, y: 2 }, speed: 20 },
                explodeSelectors: [{ type: 'circle', radius: 500 }],
                explodeEffects: [{ type: 'hurt', value: 0, prosInfo: [{ targetType: 0, proId: 5, scale: 0.5 }] }]
            }
        ],
        atkAnim: 'attack01',
        prepareEffect: '',
        preparePoint: { x: -50, y: 300 },
    },

    '100402': {
        id: '100402',
        type: 1,
        radius: 500,
        bullets: [
            {
                spinePath: '',
                hitEffect: '',
                offset: { x: 0, y: 0 },
                effects: [{ type: 'hurt', value: 500 }],
                buffs: [],
                selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'distSorter', bValue: false }],
                trigger: { type: 'event', value: 'traceReach'},
                explodeSelectors: [{ type: 'circle', radius: 500 }],
                explodeEffects: [{ type: 'hurt', value: 500}]
            }
        ],
        atkAnim: 'attack02',
        prepareEffect: '',
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
}