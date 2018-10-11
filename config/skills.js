export default {
    '100101': {
        id: '100101',
        type: 0,
        radius: 800,
        bullets: ['10010110'],
        atkAnim: 'attack01',
        prepareEffect: '',
        preparePoint: { x: -50, y: 300 },
        alignY: false,
    },
    '100102': {
        id: '100102',
        type: 0,
        radius: 1000,
        bullets: ['10010210'],
        atkAnim: 'attack01',
        prepareEffect: '',
        alignY: true,
        ratio1: 0.9,
        ratio2: 0.8
    },

    '100103': {
        id: '100103',
        type: 1,
        radius: 1000,
        bullets: ['10010310'],
        atkAnim: 'attack02',
        prepareEffect: 'bullet/ZGL/prepare_yqd',
        preparePoint: {x:-50 ,y: 300},
        alignY: false,
    },

    '100201': {
        id: '100201',
        type: 0,
        radius: 150,
        bullets: ['10020110'],
        atkAnim: 'attack01',
        prepareEffect: '',
        preparePoint: { x: 0, y: 0 },
        alignY: true,
    },
    
    '100202': {
        id: '100202',
        type: 1,
        radius: 400,
        jump: true,
        jumpDist: 200,
        jumpDuration: 10,
        jumpHeight: 200,
        bullets: ['10020210'],
        atkAnim: 'attack02',
        prepareEffect: '',
        alignY: false,
        ratio1: 1
    },

    '100203': {
        id: '100203',
        type: 2,
        radius: 10000,
        bullets: ['10020310'],
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
        bullets: ['10030110'],
        atkAnim: 'attack01',
        prepareEffect: '',
        preparePoint: { x: 0, y: 0 },
        alignY: true,
    },

    '100302': {
        id: '100302',
        type: 1,
        radius: 600,
        bullets: ['10030210'],
        atkAnim: 'attack02',
        prepareEffect: '',
        alignY: true,
        ratio1: 0.6,
        ratio2: 0.3
    },

    '100303': {
        id: '100303',
        type: 2,
        radius: 0,
        bullets: [
            '10030310'
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
            '10040110'
        ],
        atkAnim: 'attack01',
        prepareEffect: '',
        preparePoint: { x: 0, y: 0 },
        alignY: false,
    },

    '100402': {
        id: '100402',
        type: 1,
        radius: 1000,
        bullets: [
            '10040210'
        ],
        atkAnim: 'attack02',
        prepareEffect: '',
        preparePoint: { x: 0, y: 0 },
        alignY: false,
    },

    '100403': {
        id: '100403',
        type: 2,
        radius: 0,
        bullets: [
            '10040310'
        ],
        atkAnim: '',
        prepareEffect: '',
    },

    '100501': {
        id: '100501',
        type: 0,
        radius: 250,
        bullets: [
            '10050110'
        ],
        atkAnim: 'attack01',
        prepareEffect: '',
        preparePoint: { x: 0, y: 0 },
        alignY: true,
    },

    '100502': {
        id: '100502',
        type: 0,
        radius: 500,
        bullets: [
            '10050210'
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
            '10050310'
        ],
        atkAnim: '',
        prepareEffect: '',
    },

    '100601': {
        id: '100601',
        type: 0,
        radius: 200,
        bullets: ['10060110'],
        atkAnim: 'attack01',
        prepareEffect: '',
        preparePoint: { x: 0, y: 0 },
        alignY: true,
    },

    '100602': {
        id: '100602',
        type: 1,
        radius: 600,
        bullets: ['10060210'],
        atkAnim: 'attack02',
        prepareEffect: '',
        alignY: true,
        ratio1: 0.6,
        ratio2: 0.3
    },
}