import PriorityQueue from '../utils/PriorityQueue';

class CommandPipe{

    constructor(world){
        this.world = world;
        this._container = {};
    }

    addCommand(command){
        const queue = this.prepareCurQueue();
        queue.push(command);
    }

    addCommandDelay(command, delay){
        if(delay < 0){
            throw new Error('不能将指令添加到已经执行过的指令队列中');
        }
        const queue = this.prepareQueue(this.world.curFrame + delay);
        queue.push(command);
    }

    prepareQueue(frame){
        if (!this._container[frame]){
            this._container[frame] = new PriorityQueue((a, b)=> b.seq - a.seq);
        }
        return this._container[frame];
    }

    prepareCurQueue(){
        return this.prepareQueue(this.world.curFrame);
    }

    execCommandsByFrame(frame){
        const queue = this.prepareQueue(frame);
        for(const command of queue){
            command.do();
        }
    }
}

export default CommandPipe;