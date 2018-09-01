export default {
    '10020201': {
        id: '10020201',
        type: 'duration',
        effects: [{type: 'propScale', scale: 0.8, proId: 5}],
        trigger: {type: 'instant'},
        maxTriggerCount: 1,
        enableUndo: true,
        duration: 8
    },

    '10020301': {
        id: '10020301',
        type: 'base',
        effects: [{ type: 'propDirty', proId: 6, prosInfo: [{ targetType: 1, proId: 10001, scale: 10, step: 3 }] }, 
            { type: 'propDirty', proId: 11, prosInfo: [{ targetType: 1, proId: 10001, scale: 10, step: 3 }] }],
        trigger: {type: 'event', value: 'onHurt'},
        maxTriggerCount: 1,
        enableUndo: false,
    },

    '10050201': {
        id: '10050201',
        type: 'duration',
        effects: [{ type: 'propScale', scale: 0.85, proId: 6 }],
        trigger: { type: 'instant' },
        maxTriggerCount: 1,
        enableUndo: true,
        duration: 5
    },

    '10050301': {
        id: '10050301',
        type: 'base',
        effects: [{ type: 'extraHp', proId: 0, prosInfo: [{ targetType: 1, proId: 1, scale: 0.02}] }],
        trigger: { type: 'event', value: 'castNormalSkill' },
        maxTriggerCount: 10000,
        enableUndo: false,
    },
}