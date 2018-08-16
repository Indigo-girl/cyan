class BaseState{

    constructor(name){
        this.name = name;
    }

    onEnter(sm){
        console.log(`${sm.viewEntity.id}:进入${this.name}状态`);
    }

    onExit(sm){
        console.log(`${sm.viewEntity.id}:退出${this.name}状态`);
    }

    handleEvent(event, sm){
        console.log(`${sm.viewEntity.id}:${this.name}接收到事件:`, event);
        if(event.type === 'moveToPos'){
            sm.viewEntity.moveTo(event.detail);
        }else if (event.type === 'moveInRadius'){
            const info = event.detail;
            sm.viewEntity.moveInRadius(info.target, info.radius, info.alignY);
        }
    }

    update(sm){

    }

}

export default BaseState;