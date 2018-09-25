class PermanentSkill{

    constructor(id, seq, clock){
        this.id = id;
        this.seq = seq;
        this.clock = clock;
    }

    update(){
        this.clock.update();
    }

    hanldeEvent(event){
        switch(event.type){
            case 'specified':
                this.clock.onSkillSpecified();
                break;
            case 'afterCast':
                this.clock.afterSkillCast();
                break;
            case 'afterSilent':
                this.clock.afterSilent();
                break;
        }
    }

    canUse(){
        
    }

}

export default PermanentSkill;