class BezierTrace{
    
    constructor(points, frames){
        this._points = points;
        this._frames = frames;
        this._startPos = points[0];
        this._endPos = points[points.length - 1];
        this._curFrame = 0;
    }

    nextPos(){
        this._curFrame++;
        return this.getPosByFrame(this._curFrame);
    }

    getPosByFrame(curFrame){
        if(curFrame <= 0){
            return this._startPos;
        }
        if(curFrame >= this._frames){
            return this._endPos;
        }
        let tracePoints = this._points;
        while(tracePoints.length > 1){
            let newTracePoints = [];
            for(let i = 0; i < tracePoints.length - 1; i++){
                const p = this._getLineScalePoint(tracePoints[i], tracePoints[i+1], curFrame / this._frames);
                newTracePoints.push(p);
            }
            tracePoints = newTracePoints;
        }
        return tracePoints[0];
    }

    _getLineScalePoint(a, b, scale){
        const delta = b.sub(a);
        return delta.mulSelf(scale).addSelf(a);
    }
}

export default BezierTrace;