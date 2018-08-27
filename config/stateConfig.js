export default {
    default: {
        'search': {
            'dead': 'dead',
            'moveToPos': 'walk',
            'freeWalk': 'walk',
            'moveInRadius': 'walk',
            'targetNotFound': 'idle',
        },
        'walk': {
            'dead': 'dead',
            'reachPos': 'atk'
        },
        'atk': {
            'dead': 'dead',
            'animCompleted': 'search'
        },
        'dead': {
            'resurrect': 'search'
        },
        'idle': {
            'animCompleted': 'search'
        },
        'initState': 'search'
    }
};