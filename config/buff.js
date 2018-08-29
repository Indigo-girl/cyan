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
        effects: [{ type: 'prop',  proId: 6, prosInfo: [{ targetType: 1, proId: 10003, scale: 10, step: 3}]}],
        trigger: {type: 'event', value: 'onHurt'},
        maxTriggerCount: 1,
        enableUndo: false,
    }
}