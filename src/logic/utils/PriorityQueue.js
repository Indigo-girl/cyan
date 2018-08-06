const defaultCampFunc = (a, b) => a.seq - b.seq;

class PriorityQueue{

    constructor(campFunc){
        // camp(a, b) > 0 表示a的优先级高于b
        this._campFunc = campFunc || defaultCampFunc;
        this._queue = [];
    }

    push(item){
        const length = this._queue.length;
        if(length < 1 || this._campFunc(this._queue[0], item) >= 0){
            this._queue.unshift(item);
        }else{
            let index = 0
            while ((index <= length - 1) && this._campFunc(item, this._queue[index]) > 0){
                index++;
            }
            this._queue.splice(index, 0, item);
        }
    }

    pop(){
        return this._queue.pop();
    }

    top(){
        return this._queue[this._queue.length - 1];
    }

    filter(filteFunc){
        this._queue = this._queue.filter(filteFunc);
    }

    [Symbol.iterator](){
        let index = this._queue.length;
        const queue = this._queue;
        return {
            next: function(){
                index--;
                const done = index < 0;
                const value = index >=0 && queue[index] || undefined;
                return {value: value, done: done}; 
            }
        }
    }
}

export default PriorityQueue;