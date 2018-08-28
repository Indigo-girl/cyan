export default {
    '10001': {
        id: '10001',
        radius: 500,
        bullets: [
            {
                spinePath: 'bullet/ZGL/bullet_yqd',
                hitEffect: 'bullet/ZGL/hit_yqd',
                offset: { x: 0, y: 350 },
                effects: [{ type: 'hurt', value: 450, prosInfo: [{ targetType: 0, proId: 1, scale: 0.5 }], scaleInfo: [{ targetType: 1, proId: 10001, scale: 20 }] }],
                buffs: [],
                selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'truncate', value: 1 }, { type: 'propSorter', bValue: false, proId: 0 }],
                trigger: { type: 'event', value: 'traceReach' },
                trace: {type: 'follow', initHead:{x: 1, y: 2}, speed: 20}
            }
        ],
        atkAnim: 'attack02',
        prepareEffect: 'bullet/ZGL/prepare_yqd',
        preparePoint: {x:-50 ,y: 300},
        name: '元气弹',
        desc: '诸葛亮短暂蓄力后锁定目标发出一击强力元气弹，造成450+50%法术加成点伤害；目标每损失1%最大生命值元气弹就会增加2%伤害。'
    },
    '10002': {
        id: '10002',
        radius: 1000,
        bullets: [
            {
                spinePath: 'bullet/10002/10002',
                hitEffect: '',
                offset: { x: 0, y: 100 },
                effects: [{ type: 'hurt', value: 450, prosInfo: [{ targetType: 0, proId: 1, scale: 0.5 }], scaleInfo: [{ targetType: 1, proId: 10001, scale: 20 }] }],
                buffs: [],
                selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'sector', degree: 60, radius: 600 }],
                trigger: { type: 'event', value: 'animCompleted' }
            }
        ],
        atkAnim: 'attack01',
        prepareEffect: 'prepare',
        name: '元气弹',
        desc: '诸葛亮短暂蓄力后锁定目标发出一击强力元气弹，造成450+50%法术加成点伤害；目标每损失1%最大生命值元气弹就会增加2%伤害。'
    },
    '10003': {
        id: '10003',
        radius: 300,
        jump: true,
        jumpDist: 100,
        jumpDuration: 10,
        bullets: [
            {
                spinePath: '',
                hitEffect: '',
                offset: { x: 0, y: 0 },
                effects: [{ type: 'hurt', value: 450, prosInfo: [{ targetType: 0, proId: 1, scale: 0.5 }], scaleInfo: [{ targetType: 1, proId: 10001, scale: 20 }] }],
                buffs: [],
                selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'distSorter', bValue: false}, {type: 'circle', radius: 200}],
                trigger: { type: 'base'},
            }
        ],
        atkAnim: 'attack02',
        prepareEffect: 'prepare',
        name: '元气弹',
        desc: '诸葛亮短暂蓄力后锁定目标发出一击强力元气弹，造成450+50%法术加成点伤害；目标每损失1%最大生命值元气弹就会增加2%伤害。'
    },
}