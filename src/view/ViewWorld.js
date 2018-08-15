import CommonConst from '../logic/const/CommonConst';
import RoleEntity from '../logic/entity/RoleEntity';
import RoleContext from '../logic/entity/RoleContext';
import ViewEntity from './ViewEntity';

// ViewWorld需要绑定在对应的战场节点上
cc.Class({
    extends: cc.Component,

    properties: {
    },

    ctor(){
        this._entities = {};
        this._entityList = [];
    },

    onLoad(){
        this._featureWalk();
    },

    _featureWalk(){
        const logicEntity = new RoleEntity(new RoleContext());
        const entity = new ViewEntity(logicEntity, 'KM/KM', this.node);
        entity.setHead(cc.v2(1, 0));
        this.addEntity(entity);
        console.log('entity Id:', entity.id);
        this.node.on(cc.Node.EventType.TOUCH_END, (event) => {
            const pos = this.node.convertTouchToNodeSpaceAR(event.touch);
            this.handleEvent({
                type: 'moveToPos',
                detail: pos
            }, entity.id);
        });
    },

    update(){
        for(const e of this._entityList){
            e.update();
        }
    },

    addEntity(entity){
        this._entities[entity.id] = entity;
        this._entityList.push(entity);
    },

    getEntityById(id){
        return this._entities[id];
    },

    removeEntity(id){
        delete this._entities[id];
        this._entityList = this._entityList.filter((e)=>e.id!==id);
    },

    handleEvent(event, targetId){
        // TODO 处理事件，事件的来源可能是表现层实体或者逻辑层
        if(!targetId || targetId < 0){
            this._handleWorldEvent(event);
            return;
        }
        const entities = this._getEntitiesById(targetId);
        for(const e of entities){
            e.handleEvent(event);
        }
    },

    _getEntitiesById(id){
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
        // TODO 通知世界
    }
});
