import ContextConst from '../../logic/const/ContextConst';
import HpEffect from '../../logic/effect/HpEffect';
import EventTrigger from '../trigger/EventTrigger';
import ViewBullet from '../ViewBullet';
import BaseSkill from './BaseSkill';
import AliveSelector from '../selector/AliveSelector';
import CampSelector from '../selector/CampSelector';
import ComplexSelector from '../selector/ComplexSelector';

function getHurtSkill(atker, hurt, radius){
    const hp = new HpEffect(-hurt);
    const alive = new AliveSelector(true);
    const camp = new CampSelector(ContextConst.CAMP.ENEMY);
    const complex = new ComplexSelector([alive, camp]);
    const trigger = new EventTrigger(['animCompleted']);
    const bullet = new ViewBullet(atker, {
        effects: [hp],
        selector: complex,
        spinePath: 'DFP/DFP',
        offset: cc.v2(0, 100),
        trigger: trigger
    });
    let skill = new BaseSkill(atker, [bullet], radius);
    return skill;
}

export default {
    getHurtSkill: getHurtSkill
};