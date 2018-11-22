import BaseSkill from '../view/skill/BaseSkill';
import BulletParser from './BulletParser';
import bullet from '../../config/bullet';
import SkillClock from '../view/skill/SkillClock';
import PermanentSkill from '../view/skill/PermanentSkill';

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
            delays: skillConfig.delays,
        });
        if(skillConfig.jump){
            skill.setJumpInfo(skillConfig.jumpDist, skillConfig.jumpDuration, skillConfig.jumpHeight);
        }
        if(skillConfig.move){
            skill.setmoveInfo(skillConfig.moveDist, skillConfig.moveDuration);
        }
        return skill;
    }

    /**
     * 生成一个长生命周期技能对象，用于技能选择
     * @param {*} skillConfig
     * @memberof SkillParser
     */
    parsePermanentSkill(skillConfig){
        const firstCd = skillConfig.firstCd || 1;
        const cd = skillConfig.cd || 1;
        const silentTime = skillConfig.silentTime || 1;
        const clock = new SkillClock(firstCd, cd, silentTime);
        const skill = new PermanentSkill(skillConfig.id, skillConfig.seq, clock);
        return skill;
    }

}

const parser = new SkillParser();

export default parser;