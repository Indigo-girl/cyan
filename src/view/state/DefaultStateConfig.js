const config = {

    'idle': {
        'onHit': 'hited',
        'animCompleted': 'idle',
        'readyWalk': 'walk',
        'readyAtk': 'atk',
        'dead': 'dead',
    },

    'walk': {
        'readyAtk': 'atk',
        'dead': 'dead',
        'onHit': 'hited'
    },

    'atk': {
        'dead': 'dead',
        'onHit': 'hited',
        'atkCd': 'atk',
    },

    'hited': {
        'animCompleted': 'last',
        'dead': 'dead'
    },

    'dead': {
        'resurrect': 'idle'
    }

};

export default config;