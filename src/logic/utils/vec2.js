class Vec2{
    constructor(x, y){
        if(typeof x === 'object'){
            this.x = x.x;
            this.y = x.y;
        }else{
            this.x = x || 0;
            this.y = y || 0;
        }
    }

    fill(x, y){
        this.x = x;
        this.y = y;
    }

    clone(){
        return new Vec2(this.x, this.y);
    }

    lengthSq(){
        return Math.pow(this.x, 2) + Math.pow(this.y, 2);
    }

    length(){
        return Math.sqrt(this.lengthSq());
    }

    normalize(){
        let ret = this.clone();
        ret.normalizeSelf();
        return ret;
    }

    normalizeSelf(){
        let length = this.length();
        if (length == 0) {
            return this;
        }
        this.x /= length;
        this.y /= length;
        return this;
    }

    equals(other){
        return other && other.x === this.x && other.y === this.y;
    }

    lerp(to, ratio){
        let ret = new Vec2();
        ret.x = this.x + (to.x - this.x) * ratio;
        ret.y = this.y + (to.y - this.y) * ratio;
        return ret;
    }

    addSelf(vector){
        this.x += vector.x;
        this.y += vector.y;
        return this;
    }

    add(vector){
        let ret = this.clone();
        ret.addSelf(vector);
        return ret;
    }

    subSelf(vector){
        this.x -= vector.x;
        this.y -= vector.y;
        return this;
    }

    sub(vector){
        let ret = this.clone();
        ret.subSelf(vector);
        return ret;
    }

    mulSelf(num){
        this.x *= num;
        this.y *= num;
        return this;
    }

    mul(num){
        let ret = this.clone();
        ret.mulSelf(num);
        return ret;
    }

    scaleSelf(vector){
        this.x *= vector.x;
        this.y *= vector.y;
        return this;
    }

    scale(vector){
        let ret = this.clone();
        ret.scaleSelf(vector);
        return ret;
    }

    negSelf(){
        this.mulSelf(-1);
        return this;
    }

    neg(){
        let ret = this.clone();
        ret.negSelf();
        return ret;
    }

    dot(vector){
        return this.x * vector.x + this.y * vector.y;
    }

    cross(vector){
        return this.y * vector.x - this.x * vector.y;
    }

    mag(){
        return this.length();
    }

    magSq(){
        return this.lengthSq();
    }

    angle(other){
        const selfMagsq = this.lengthSq();
        const otherMagsq = vector.lengthSq();
        if (selfMagsq === 0 || otherMagsq === 0){
            console.warn("can't get angle with zero vector");
            return 0;
        }
        const dot = this.dot(vector);
        let theta = dot / (Math.sqrt(selfMagsq * otherMagsq));
        theta = Math.min(1, Math.max(-1, theta));
        return Math.acos(theta);
    }

    signAngle(other){
        return Math.atan2(this.y, this.x) - Math.atan2(other.y, other.x);
    }

    rotateSelf(radians){
        if(this.x ===0 && this.y === 0){
            return this;
        }
        this.x = this.x * Math.cos(radians) - this.y * Math.sin(radians);
        this.y = this.x * Math.sin(radians) + this.y * Math.cos(radians);
        return this;
    }

    rotate(radians){
        let ret = this.clone();
        ret.rotateSelf(radians);
        return ret;
    }
}

export default Vec2;
