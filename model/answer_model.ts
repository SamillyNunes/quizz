export default class AnswerModel{
    #value: string;
    #isRight: boolean;
    #isRevealed: boolean;
    
    constructor(value: string, right:boolean, isRevealed=false){
        this.#value=value;
        this.#isRight=right;
        this.#isRevealed=isRevealed;
    }

    static right(value: string){
        return new AnswerModel(value, true);
    }

    static wrong(value: string){
        return new AnswerModel(value, false);
    }

    get value(){
        return this.#value;
    }

    get isRight(){
        return this.#isRight;
    }

    get isRevealed(){
        return this.#isRevealed;
    }

    toMap(){
        return {
            value: this.#value,
            isRight: this.#isRight,
            isRevealed: this.#isRevealed,
        };
    }

    static fromMap(object: any): AnswerModel{
        return new AnswerModel(object.value, object.isRight, object.isRevealed);
    }

    reveal(){
        return new AnswerModel(this.#value, this.#isRight, true);
    }
}