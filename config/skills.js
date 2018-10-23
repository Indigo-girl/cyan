export default {


// 程咬金
    '2001000': {
        id: '2001000',
        type: 0,
        radius: 150,
        bullets: ['3001000'],
        atkAnim: 'attack01',
        prepareEffect: '',
        preparePoint: { x: 0, y: 0 },
        alignY: true,
    },
    
    '2001001': {
        id: '2001001',
        type: 1,
        radius: 400,
        jump: true,
        jumpDist: 200,
        jumpDuration: 10,
        jumpHeight: 200,
        bullets: ['3001001'],
        atkAnim: 'attack02',
        prepareEffect: '',
        alignY: false,
        ratio1: 1
    },

    '2001002': {
        id: '2001002',
        type: 2,
        radius: 10000,
        bullets: ['3001002'],
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


    // 吕布
    '2002000': {
        id: '2002000',
        type: 0,
        radius: 250,
        bullets: ['3002000'],
        atkAnim: 'attack01',
        prepareEffect: '',
        preparePoint: { x: 0, y: 0 },
        alignY: true,
    },

    '2002001': {
        id: '2002001',
        type: 1,
        radius: 500,
        bullets: ['3002001'],
        atkAnim: 'attack02',
        prepareEffect: '',
        preparePoint: { x: 0, y: 0 },
        alignY: false,
    },

    '2002002': {
        id: '2002002',
        type: 2,
        radius: 0,
        bullets: ['3002002'],
        atkAnim: '',
        prepareEffect: '',
    },


    // 阿轲
    '2003000': {
        id: '2003000',
        type: 0,
        radius: 200,
        bullets: ['3003000'],
        atkAnim: 'attack01',
        prepareEffect: '',
        preparePoint: { x: 0, y: 0 },
        alignY: true,
    },

    '2003001': {
        id: '2003001',
        type: 1,
        radius: 600,
        bullets: ['3003001'],
        atkAnim: 'attack02',
        prepareEffect: '',
        alignY: true,
        ratio1: 0.6,
        ratio2: 0.3
    },

    '2003002': {
        id: '2003002',
        type: 2,
        radius: 0,
        bullets: [
            '3003002'
        ],
        atkAnim: '',
        prepareEffect: '',
        alignY: false,
    },

    // 孙尚香
    '2004000': {
        id: '2004000',
        type: 0,
        radius: 1000,
        bullets: ['3004000'],
        atkAnim: 'attack01',
        prepareEffect: '',
        preparePoint: { x: 0, y: 0 },
        alignY: false,
    },

    '2004001': {
        id: '2004001',
        type: 0,
        radius: 1000,
        bullets: ['3004001'],
        atkAnim: 'attack02',
        prepareEffect: '',
        alignY: false,
    },

    '2004002': {
        id: '2004002',
        type: 2,
        radius: 0,
        bullets: ['3004002'],
        atkAnim: '',
        prepareEffect: '',
    },


    // 诸葛亮
    '2005000': {
        id: '2005000',
        type: 0,
        radius: 800,
        bullets: ['3005000'],
        atkAnim: 'attack01',
        prepareEffect: '',
        preparePoint: { x: -50, y: 300 },
        alignY: false,
    },
    '2005001': {
        id: '2005001',
        type: 0,
        radius: 1000,
        bullets: ['3005001'],
        atkAnim: 'attack01',
        prepareEffect: '',
        alignY: true,
        ratio1: 0.9,
        ratio2: 0.8
    },

    '2005002': {
        id: '2005002',
        type: 1,
        radius: 1000,
        bullets: ['3005002'],
        atkAnim: 'attack02',
        prepareEffect: 'bullet/ZGL/prepare_yqd',
        preparePoint: {x:-50 ,y: 300},
        alignY: false,
    },

 // 狄仁杰
    '2009000': {
        id: '2009000',
        type: 0,
        radius: 800,
        bullets: ['3009000'],
        atkAnim: 'attack01',
        prepareEffect: '',
        preparePoint: { x: 0, y: 0 },
        alignY: false,
    },

    '2009001': {
        id: '2009001',
        type: 1,
        radius: 1000,
        bullets: ['3009001'],
        atkAnim: 'attack02',
        prepareEffect: '',
        alignY: false,
    },


    // 貂蝉
    '2010000': {
        id: '2010000',
        type: 0,
        radius: 800,
        bullets: ['3010000'],
        atkAnim: 'attack01',
        prepareEffect: '',
        preparePoint: { x: 0, y: 0 },
        alignY: false,
    },

    '2010001': {
        id: '2010001',
        type: 1,
        radius: 1000,
        bullets: ['3010001'],
        atkAnim: 'attack02',
        prepareEffect: '',
        alignY: false,
    },

    // 张飞
    '2011000': {
        id: '2011000',
        type: 0,
        radius: 300,
        bullets: ['3011000'],
        atkAnim: 'attack01',
        prepareEffect: '',
        preparePoint: { x: 0, y: 0 },
        alignY: true,
    },

    '2011001': {
        id: '2011001',
        type: 1,
        radius: 600,
        bullets: ['3011001'],
        atkAnim: 'attack02',
        prepareEffect: 'bullet/ZF/prepare_kspx',
        preparePoint: { x: -20, y: 70 },
        alignY: true,
        ratio1: 0.6,
        ratio2: 0.3
    },

    // 关羽
    '2012000': {
        id: '2012000',
        type: 0,
        radius: 200,
        bullets: ['3012000'],
        atkAnim: 'attack01',
        prepareEffect: '',
        preparePoint: { x: 0, y: 0 },
        alignY: true,
    },

    '2012001': {
        id: '2012001',
        type: 1,
        radius: 600,
        bullets: ['3012001'],
        atkAnim: 'attack02',
        prepareEffect: '',
        alignY: true,
        ratio1: 0.6,
        ratio2: 0.3
    },

     // 赵云
    '2013000': {
        id: '2013000',
        type: 0,
        radius: 200,
        bullets: ['3013000'],
        atkAnim: 'attack01',
        prepareEffect: '',
        preparePoint: { x: 0, y: 0 },
        alignY: true,
    },

    '2013001': {
        id: '2013001',
        type: 1,
        radius: 600,
        bullets: ['3013001'],
        atkAnim: 'attack02',
        prepareEffect: '',
        alignY: true,
        ratio1: 0.6,
        ratio2: 0.3
    },

}