import BaseSkill from '../view/skill/BaseSkill';
import BulletParser from './BulletParser';

class SkillParser{

    parse(skillConfig, owner){
        const bullets = [];
        for(const config of skillConfig.bullets){
            bullets.push(BulletParser.parse(config, owner));
        }
        let preparePoint = skillConfig.preparePoint || {x: 0, y: 0};
        let skill = new BaseSkill(owner, bullets, skillConfig.radius, {
            atkAnim: skillConfig.atkAnim,
            prepareEffect: skillConfig.prepareEffect,
            preparePoint: cc.v2(preparePoint.x, preparePoint.y),
            type: skillConfig.type,
            backAfterAtk: skillConfig.backAfterAtk,
            backDuration: skillConfig.backDuration,
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