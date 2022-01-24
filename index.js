class RangeValidator {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    set from(value){
        if(typeof value !== 'number'){
            throw new TypeError('Parameters has unappropriate type');
        }
        this._from = value;
    }

    get from(){
        return this._from;
    }

    set to(value){
        if(typeof value !== 'number'){
            throw new TypeError('Parameters has unappropriate type');
        }

        if(value <= this.from){
            throw new RangeError('Not correct value count');
        }
        this._to = value;
    }

    get to(){
        return this._to;
    }

    get range(){
        const wholeNumbers = [];
        for (let i = this._from; i <= this._to; i++) {
           wholeNumbers.push(i);
        }
        return wholeNumbers;
    }

    validate(value) {
        if(value >= this._from && value <= this._to){
            alert('такое число есть');
        } else {
            throw new RangeError('Это число не входит в заданный диапазон');
        }
    }
}





