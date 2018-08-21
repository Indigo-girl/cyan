import CommandPipe from './command/CommandPipe';
import EventTarget from '../logic/utils/EventTarget';

class LogicWorld{

    constructor(vsize, size, pos, speedScale){
        this.vsize = vsize;
        this.size = size;
        // 世界左下角坐标
        this.pos = pos;
        // 事件倍率，1为显示层fps
        this.speedScale = speedScale || 1.0;
        this._curFrame = 0;
        this._elapsed = 0;
        // 初始化命令管道
        this.commandPipe = new CommandPipe(this);
        this.entityContainer = {};
        this._entityList = [];
        this._bullets = [];

        this._initEventHub();
    }

    _initEventHub(){
        // 事件总线
        this._eventHub = new EventTarget();
        // TODO 注册监听
    }

    update(){
        this._elapsed += this.speedScale;
        while (this._elapsed >= 1) {
            this._elapsed--;
            this._curFrame++;
        }
        // 执行上一帧指令以
        this.commandPipe.execCommandsByFrame(this._curFrame - 1);
        // 更新所有的子弹
        console.log('bullet length:', this._bullets.length);
        for(const e of this._bullets){
            e.update();
        }
        // 更新本回合的所有实体
        for(const e of this._entityList){
            e.update();
        }
    }

    addEntity(entity){
        this.entityContainer[entity.id] = entity;
        this._entityList = Object.values(this.entityContainer);
    }

    removeEntity(entity){
        delete this.entityContainer[entity.id];
        this._entityList = Object.values(this.entityContainer);
    }

    getEntityById(id){
        return this.entityContainer[id];
    }

    getAllEntity(){
        return this._entityList;
    }

    addBullet(bullet){
        console.log('add bullet:');
        this._bullets.push(bullet);
    }

    removeBullet(bullet){
        this._bullets = this._bullets.filter((e)=>e.id !== bullet.id);
    }

    get curFrame(){
        // 当前帧不允许外部更改
        return this._curFrame;
    }

    get eventHub(){
        return this._eventHub;
    }

    handleEvent(event){
        // TODO 处理事件，事件可能来自逻辑层实体或者表现层
    }

}

export default LogicWorld;