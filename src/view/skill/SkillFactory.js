import ContextConst from '../../logic/const/ContextConst';
import HpEffect from '../effect/HpEffect';
import EventTrigger from '../trigger/EventTrigger';
import ViewBullet from '../ViewBullet';
import BaseSkill from './BaseSkill';
import AliveSelector from '../selector/AliveSelector';
import CampSelector from '../selector/CampSelector';
import ComplexSelector from '../selector/ComplexSelector';
import SkillParser from '../../parser/SkillParser';
import skills from '../../../config/skills';

function getHurtSkill(atker, hurt, radius){
    // const hp = new HpEffect(-hurt);
    // const alive = new AliveSelector(true);
    // const camp = new CampSelector(ContextConst.CAMP.ENEMY);
    // const complex = new ComplexSelector([alive, camp]);
    // const trigger = new EventTrigger(['animCompleted']);
    // const bullet = new ViewBullet(atker, {
    //     effects: [hp],
    //     selector: complex,
    //     spinePath: 'DFP/DFP',
    //     offset: cc.v2(0, 100),
    //     trigger: trigger
    // });
    // let skill = new BaseSkill(atker, [bullet], radius);
    // // return skill;
    // console.log('normal skill:', skill);
    const skillConfig = skills['10001'];
    let configSkill = SkillParser.parse(skillConfig, atker);
    // console.log('config skill:', configSkill);
    return configSkill;
}

export default {
    getHurtSkill: getHurtSkill
};