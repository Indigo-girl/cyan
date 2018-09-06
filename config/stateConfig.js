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
            'dead': 'dead',
            'animCompleted': 'search'
        },
        'initState': 'search'
    },
    test: {
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
            'dead': 'dead',
            'animCompleted': 'search'
        },
        'initState': 'search'
    },
    target: {
        'idle': {
            'dead': 'dead',
        },
        'initState': 'idle'
    },
    demo: {
        'common': {
            'battleEnd': 'settle',
        },
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
            'dead': 'dead',
            'animCompleted': 'search'
        },
        'ready': {
            'moveToPos': 'readyWalk'
        },
        'readyWalk': {
            'reachPos': 'search'
        },
        'initState': 'ready'
    },
};