import CommonConst from '../logic/const/CommonConst';
import RoleEntity from '../logic/entity/RoleEntity';
import RoleContext from '../logic/entity/RoleContext';
import ViewEntity from './ViewEntity';
import pubfunc from '../logic/utils/pubfunc';
import ContextConst from '../logic/const/ContextConst';

// ViewWorld需要绑定在对应的战场节点上
cc.Class({
    extends: cc.Component,

    properties: {
    },

    ctor(){
        this._entities = {};
        this._entityList = [];
        this._bullets = [];
        pubfunc.setWorld(this);
    },

    onLoad(){
        this._featureWalk();
        // this._featureSkill();
    },

    _featureWalk(){
        const stateConfig = {
            'idle': {
                'moveToPos': 'walk'
            },
            'walk': {
                'reachAtkArea': 'atk'
            },
            'atk': {
                'animCompleted': 'idle'
            },
            'dead': {}
        };
        const entity = this._addSampleEntity(ContextConst.CAMP.PLAYER, stateConfig);
        this._addSampleEntity(ContextConst.CAMP.ENEMY, stateConfig);
        console.log('entity Id:', entity.id);
        this.node.on(cc.Node.EventType.TOUCH_END, (event) => {
            const pos = this.node.convertTouchToNodeSpaceAR(event.touch);
            this.handleEvent({
                type: 'moveToPos',
                detail: pos
            }, entity.id);
        });
    },

    _featureSkill(){
        let entity = this._addSampleEntity(ContextConst.CAMP.PLAYER);
        entity.setPosition(cc.v2(-300, 0))
        entity = this._addSampleEntity(ContextConst.CAMP.ENEMY);
        entity.setHead(cc.v2(-1, 0));
        entity.setPosition(cc.v2(400, 0));
    },

    _addSampleEntity(camp, stateConfig){
        const roleContext = new RoleContext();
        roleContext.init({
            0: 100,
            1: 100,
            2: 100,
            3: 100
        });
        const logicEntity = new RoleEntity(roleContext, camp);
        const entity = new ViewEntity(logicEntity, 'KM/KM', stateConfig);
        entity.setHead(cc.v2(1, 0));
        this.addEntity(entity);
        return entity;
    },

    update(){
        for(const e of this._bullets){
            e.update();
        }
        for(const e of this._entityList){
            e.update();
        }
    },

    addEntity(entity){
        entity.view.parent = this.node;
        this._entities[entity.id] = entity;
        this._entityList.push(entity);
    },

    getEntityById(id){
        return this._entities[id];
    },

    getAllEntity(){
        return this._entityList.slice();
    },

    removeEntity(id){
        delete this._entities[id];
        this._entityList = this._entityList.filter((e)=>e.id!==id);
    },

    addBullet(bullet, entity) {
        this._bullets.push(bullet);
        const wpos = entity.view.convertToWorldSpaceAR(bullet.view.position);
        const tpos = this.node.convertToNodeSpaceAR(wpos);
        bullet.view.position = tpos;
        bullet.view.parent = this.node;
        if(entity.getHead().x < 0){
            bullet.view.scaleX = -bullet.view.scaleX
        }
    },

    removeBullet(bullet) {
        this._bullets = this._bullets.filter((e) => e.id !== bullet.id);
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
