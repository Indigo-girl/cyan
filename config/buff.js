export default {
    '4001000': {
        id: '4001000',
        type: 'duration',
        effects: [{type: 'propScale', scale: 0.8, proId: 5}],
        trigger: {type: 'instant'},
        maxTriggerCount: 1,
        enableUndo: true,
        duration: 8
    },

    '4004000': {
        id: '4004000',
        type: 'base',
        effects: [{ type: 'propDirty', proId: 6, prosInfo: [{ targetType: 1, proId: 10001, scale: 10, step: 3 }] }, 
            { type: 'propDirty', proId: 11, prosInfo: [{ targetType: 1, proId: 10001, scale: 10, step: 3 }] }],
        trigger: {type: 'event', value: 'onHurt'},
        maxTriggerCount: 1,
        enableUndo: false,
    },

    '4002000': {
        id: '4002000',
        type: 'duration',
        effects: [{ type: 'propScale', scale: 0.85, proId: 6 }],
        trigger: { type: 'instant' },
        maxTriggerCount: 1,
        enableUndo: true,
        duration: 5,
        overlapCount: 1,
        overlapType: 1,
    },

    '4002001': {
        id: '4002001',
        type: 'base',
        effects: [{ type: 'extraHp', proId: 0, prosInfo: [{ targetType: 1, proId: 1, scale: 0.02}] }],
        trigger: { type: 'event', value: 'castNormalSkill' },
        maxTriggerCount: 10000,
        enableUndo: false,
    },
}