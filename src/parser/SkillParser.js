import BaseSkill from '../view/skill/BaseSkill';
import BulletParser from './BulletParser';

class SkillParser{

    parse(skillConfig, owner){
        const bullets = [];
        for(const config of skillConfig.bullets){
            bullets.push(BulletParser.parse(config, owner));
        }
        let skill = new BaseSkill(owner, bullets, skillConfig.radius);
        return skill;
    }

}

const parser = new SkillParser();

export default parser;