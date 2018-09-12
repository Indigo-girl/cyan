import BaseSkill from '../view/skill/BaseSkill';
import BulletParser from './BulletParser';
import bullet from '../../config/bullet';

class SkillParser{

    parse(skillConfig, owner){
        const bullets = [];
        for(const configId of skillConfig.bullets){
            bullets.push(BulletParser.parse(bullet[configId], owner));
        }
        let preparePoint = skillConfig.preparePoint || {x: 0, y: 0};
        let skill = new BaseSkill(owner, bullets, skillConfig.radius, {
            atkAnim: skillConfig.atkAnim,
            prepareEffect: skillConfig.prepareEffect,
            preparePoint: cc.v2(preparePoint.x, preparePoint.y),
            type: skillConfig.type,
            backAfterAtk: skillConfig.backAfterAtk,
            backDuration: skillConfig.backDuration,
            ratio1: skillConfig.ratio1,
            ratio2: skillConfig.ratio2,
            configId: skillConfig.id,
            alignY: skillConfig.alignY,
        });
        if(skillConfig.jump){
            skill.setJumpInfo(skillConfig.jumpDist, skillConfig.jumpDuration);
        }
        if(skillConfig.move){
            skill.setmoveInfo(skillConfig.moveDist, skillConfig.moveDuration);
        }
        return skill;
    }

}

const parser = new SkillParser();

export default parser;