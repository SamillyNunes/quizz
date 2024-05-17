export default class AnswerModel{
    #value: string;
    #isRight: boolean;
    #isRevealed: boolean;
    
    constructor(value: string, right:boolean, isRevealed=false){
        this.#value=value;
        this.#isRight=right;
        this.#isRevealed=isRevealed;
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
}