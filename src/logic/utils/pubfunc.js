function shuffle(arr, seed) {
    const length = arr.length;
    if (length < 2) {
        return arr;
    }
    const rand = getRandomFunc(seed);
    for (let i = 0; i < length - 1; i++) {
        const j = Math.floor(rand(i, length));
        const tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    return arr;
}

function getRandomFunc(seed) {
    seed = seed || Date.now();
    function rnd() {
        seed = (seed * 9301 + 49297) % 233280;
        return seed / (233280.0);
    };
    return function rand(min, max) {
        if (min && max) {
            return min + (max - min) * rnd(seed);
        } else {
            return rnd();
        }
    };
};

let _world;

function setWorld(world) {
    _world = world;
}

function getWorld() {
    return _world;
}

var pubfunc = {
    shuffle: shuffle,
    getRandomFunc: getRandomFunc,
    setWorld: setWorld,
    getWorld: getWorld,
};

export default pubfunc;
