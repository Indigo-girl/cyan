export default {
    '10001': {
        id: '10001',
        radius: 500,
        bullets: [
            {
                spinePath: 'DFP/DFP',
                offset: {x: 0, y: 100},
                effects: [{ type: 'hurt', value: 10, scaleInfo: [{ targetType: 0, proId: 10000, scale: 1000 }]}],
                buffs: [],
                selectors: [{ type: 'alive', value: true }, { type: 'camp', value: 4 }, { type: 'truncate', value: 1 }],
                trigger: { type: 'event', value: 'animCompleted'} 
            }
        ],
        atkAnim: 'attack01'
    },
    '10002': {
        id: '10002',
        radius: 500,
        bullets: [
            {
                spinePath: 'DFP/DFP',
                offset: { x: 50, y: 150 },
                effects: [{ type: 'hurt', value: 50,scaleInfo:[{targetType: 0, proId: 10000, scale: 1000}] }],
                buffs: [],
                selectors: [{ type: 'alive', value: true }, { type: 'camp', value: 4 }, { type: 'truncate', value: 1 }],
                trigger: { type: 'event', value: 'animCompleted' }
            }
        ],
        atkAnim: 'attack02'
    },
    '10003': {
        id: '10003',
        radius: 600,
        bullets: [
            {
                spinePath: 'DFP/DFP',
                offset: { x: 0, y: 100 },
                effects: [{ type: 'hurt', value: 10, scaleInfo: [{ targetType: 0, proId: 10000, scale: 1000 }]}],
                buffs: [],
                selectors: [{ type: 'alive', value: true }, { type: 'camp', value: 4 }, { type: 'truncate', value: 1 }],
                trigger: { type: 'event', value: 'animCompleted' }
            }
        ],
        atkAnim: 'attack01'
    },
}