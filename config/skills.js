export default {
    '10001': {
        id: '10001',
        radius: 500,
        bullets: [
            {
                spinePath: 'DFP/DFP',
                offset: {x: 0, y: 100},
                effects: [{type: 'hp', value: -10}],
                buffs: [],
                selectors: [{type: 'alive', value: true}, {type: 'camp', value: 4}],
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
                offset: { x: 0, y: 100 },
                effects: [{ type: 'hp', value: -50 }],
                buffs: [],
                selectors: [{ type: 'alive', value: true }, { type: 'camp', value: 4 }],
                trigger: { type: 'event', value: 'animCompleted' }
            }
        ],
        atkAnim: 'attack01'
    }
}