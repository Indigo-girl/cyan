export default {
    '1': {
        id: '1',
        radius: 500,
        bullets: [
            {
                spinePath: 'DFP/DFP',
                hitEffect: '',
                offset: {x: 0, y: 100},
                effects: [{ type: 'hurt', value: 450,prosInfo:[{targetType: 0, proId:1, scale:0.5}], scaleInfo: [{ targetType: 1, proId: 10001, scale: 20 }]}],
                buffs: [],
                selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'truncate', value: 1 }, {type: 'propSorter', bValue: false, proId: 0}],
                trigger: { type: 'event', value: 'animCompleted'} 
            }
        ],
        atkAnim: 'attack01',
        prepareEffect: 'prepare',
        name: '元气弹',
        desc: '诸葛亮短暂蓄力后锁定目标发出一击强力元气弹，造成450+50%法术加成点伤害；目标每损失1%最大生命值元气弹就会增加2%伤害。'
    },
    '2': {
        id: '2',
        radius: 500,
        bullets: [
            {
                spinePath: 'DFP/DFP',
                offset: { x: 50, y: 150 },
                effects: [{ type: 'hurt', value: 50}],
                buffs: [],
                selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'truncate', value: 1 }],
                trigger: { type: 'event', value: 'animCompleted' }
            }
        ],
        atkAnim: 'attack02'
    },
    '3': {
        id: '3',
        radius: 600,
        bullets: [
            {
                spinePath: 'DFP/DFP',
                offset: { x: 0, y: 100 },
                effects: [{ type: 'hurt', value: 10}],
                buffs: [],
                selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'truncate', value: 1 }],
                trigger: { type: 'event', value: 'animCompleted' }
            }
        ],
        atkAnim: 'attack01'
    },
    '10001': {
        id: '10001',
        radius: 500,
        bullets: [
            {
                spinePath: 'DFP/DFP',
                hitEffect: '',
                offset: { x: 0, y: 100 },
                effects: [{ type: 'hurt', value: 450, prosInfo: [{ targetType: 0, proId: 1, scale: 0.5 }], scaleInfo: [{ targetType: 1, proId: 10001, scale: 20 }] }],
                buffs: [],
                selectors: [{ type: 'alive', bValue: true }, { type: 'camp', value: 4 }, { type: 'truncate', value: 1 }, { type: 'propSorter', bValue: false, proId: 0 }],
                trigger: { type: 'event', value: 'animCompleted' }
            }
        ],
        atkAnim: 'attack01',
        prepareEffect: 'prepare',
        name: '元气弹',
        desc: '诸葛亮短暂蓄力后锁定目标发出一击强力元气弹，造成450+50%法术加成点伤害；目标每损失1%最大生命值元气弹就会增加2%伤害。'
    },
    '10002': {
        id: '10002',
        radius: 500,
        bullets: [
            {
                spinePath: 'DFP/DFP',
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
}