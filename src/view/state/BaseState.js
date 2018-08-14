class BaseState{

    constructor(name){
        this.name = name;
    }

    onEnter(sm){
        console.log(`进入${this.name}状态`);
    }

    onExit(sm){
        console.log(`退出${this.name}状态`);
    }

    handleEvent(event){
        
    }

    update(sm){

    }

}

export default BaseState;