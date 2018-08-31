import ContextConst from '../context/ContextConst';

const PRO_ID = ContextConst.PRO_ID;

function limit(proId, value, target) {
    switch (proId) {
        case PRO_ID.HP:
            value = Math.max(0, value);
            value = Math.min(target.getRealProp(PRO_ID.MAX_HP), value);
            break;

    }
    return value;
}

export default limit;