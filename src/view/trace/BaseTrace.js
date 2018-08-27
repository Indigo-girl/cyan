class BaseTrace{

    /**
     *Creates an instance of BaseTrace.
     * @param {ViewBullet} bullet
     * @memberof BaseTrace
     */
    constructor(bullet){
        this.owner = bullet;
    }

    update(){
        // 不会移动
        if(!this.reached){
            if(this.checkReach()){
                this.owner.handleEvent({
                    type: 'traceReach'
                });
                this.reached = true;
            }
        }
    }

    checkReach(){
        return true;
    }
}

export default BaseTrace;