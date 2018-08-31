export default {
    default: {
        'search': {
            'dead': 'dead',
            'moveToPos': 'walk',
            'freeWalk': 'walk',
            'moveInRadius': 'walk',
            'moveForSkill': 'walk',
            'targetNotFound': 'idle',
        },
        'research': {
            'dead': 'dead',
            'moveToPos': 'walk',
            'freeWalk': 'walk',
            'moveInRadius': 'walk',
            'moveForSkill': 'walk',
            'targetNotFound': 'idle',
        },
        'walk': {
            'dead': 'dead',
            'reachPos': 'atk',
            'targetUnfit': 'research',
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