export default class QuestionModel{
    #id: number;
    #statement: string;
    #answers: any[];
    #corretlyAnswered: boolean;
    // #answered: boolean;

    constructor(id:number, statement: string, answers: any[], corretlyAnswered=false,){
        this.#id=id;
        this.#statement=statement;
        this.#answers=answers;
        this.#corretlyAnswered=corretlyAnswered;
    }

    get id(){
        return this.#id;
    }

    get statement(){
        return this.#statement;
    }

    get answers(){
        return this.#answers;
    }

    get corretlyAnswered(){
        return this.#corretlyAnswered;
    }

    get answered(){
        // FIXME: Implementar esse metodo
        return false;
    }
}