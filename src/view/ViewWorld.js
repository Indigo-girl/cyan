import CommonConst from '../logic/const/CommonConst';
import ContextConst from '../logic/const/ContextConst';
import RoleParser from '../parser/RoleParser';
import heros from '../../config/hero';
import WorldUtils from '../logic/utils/WorldUtils';

// ViewWorld需要绑定在对应的战场节点上
cc.Class({
    extends: cc.Component,

    properties: {},

    ctor(){
        this._deadEntities = {};
        this._entities = {};
        this._entityList = [];
        this._bullets = [];
        WorldUtils.setWorld(this);
        this.randFunc = WorldUtils.getRandomFunc(Date.now());
    },

    /**
     * 对外接口，用于向世界添加指定配置的的实体
     * @param {string} configId
     * @param {ContextConst.CAMP} camp
     * @returns
     */
    addConfigEnetity(configId, camp){
        const config = heros[configId];
        const entity = RoleParser.parse(config, {camp: camp, level: 5});
        this.addEntity(entity);
        return entity;
    },

    update(){
        // 增加pause标识
        if(this._pauseFlag){
            return;
        }
        for(const e of this._bullets){
            e.update();
        }
        for(const e of this._entityList){
            e.update();
        }
    },

    pause(){
        this._pauseFlag = true;
        const entities = this.getAllEntity();
        for(const entity of entities){
            entity.pauseAnim();
        }
        for(const bullet of this._bullets){
            bullet.pauseAnim();
        }
    },

    resume(){
        this._pauseFlag = false;
        const entities = this.getAllEntity();
        for (const entity of entities) {
            entity.resumeAnim();
        }
        for (const bullet of this._bullets) {
            bullet.resumeAnim();
        }
    },

    addEntity(entity){
        entity.view.parent = this.node;
        this._entities[entity.id] = entity;
        this._entityList.push(entity);
        entity.applyPassiveSkills();
        if (this._pauseFlag) {
            entity.pauseAnim();
        }
    },

    getEntityById(id){
        return this._entities[id];
    },

    getAllEntity(){
        return this._entityList.slice();
    },

    /**
     * 获取所有非移动和死亡的实体
     * @return {Array.<ViewEntity>}
     */
    getAllStayEntity(){
        let entities = this.getAllEntity();
        entities = entities.filter((e) => {
            const name = e.sm.getCurState() && e.sm.getCurState().name
            return name!=='dead' && name!=='walk';
        });
        return entities;
    },

    removeEntity(id){
        delete this._entities[id];
        this._entityList = this._entityList.filter((e)=>e.id!==id);
    },


    /**
     * 仅仅是将子弹注册到世界，以使其可以执行update
     * @param {ViewBullet} bullet
     */
    addBullet(bullet) {
        this._bullets.push(bullet);
        bullet.view.parent = this.node;
    },

    /**
     * 子弹只有在发射之后才会显示出来，这里为了校准子弹位置和方向
     * @param {ViewBullet} bullet
     */
    fireBullet(bullet){
        const atker = bullet.atker;
        const wpos = atker.view.convertToWorldSpaceAR(bullet.view.position);
        const tpos = this.node.convertToNodeSpaceAR(wpos);
        bullet.view.position = tpos;
        bullet.view.scaleX = - atker.getDirect() * bullet.view.scaleX;
    },

    removeBullet(bullet) {
        this._bullets = this._bullets.filter((e) => e.id !== bullet.id);
    },

    handleEvent(event, targetId){
        if(!targetId || targetId < 0){
            this._handleWorldEvent(event);
            return;
        }
        const entities = this.getEntitiesById(targetId);
        for(const e of entities){
            e.handleEvent(event);
        }
    },

    getEntitiesById(id){
        let entities = [];
        switch(id){
        case CommonConst.ALL_ENTITY_CHANNEL:
            entities = this._entityList.slice();
            break;
        case CommonConst.ALL_ALIVE_ENTITY_CHANNEL:
            entities = this._entityList.filter((e)=>{
                return e.isAlive();
            });
            break;
        default:
            if (id >= CommonConst.ENTITY_MIN_ID) {
                let entity = this.getEntityById(id);
                if (entity) {
                    entities.push(entity);
                }
            }
        }
        return entities;
    },

    _handleWorldEvent(event){
        // 通知世界
        switch(event.type){
            case 'enterDead':
                this._deadEntities[event.detail] = this._entities[event.detail];
                this.removeEntity(event.detail);
                break;
            case 'exitDead':
                this.addEntity(this._deadEntities[event.detail]);
                delete this._deadEntities[event.detail];
                break;
        }
    }

});
