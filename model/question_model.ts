import { shuffle } from "../functions/arrays";
import AnswerModel from "./answer_mode";

export default class QuestionModel{
    #id: number;
    #statement: string;
    #answers: AnswerModel[];
    #corretlyAnswered: boolean;
    // #answered: boolean;

    constructor(id:number, statement: string, answers: AnswerModel[], corretlyAnswered=false,){
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
        // Verifica se uma das respostas foi revelada ou nao, e se uma tiver sido, ja foi respondida
        for(let answer of this.#answers){
            if(answer.isRevealed) return true;
        }
        return false;
    }

    shuffleAnswers(): QuestionModel{
        let shuffledAnswers = shuffle(this.#answers);
        return new QuestionModel(this.#id, this.#statement, shuffledAnswers, this.#corretlyAnswered);
    }

    toMap(){
        return {
            id: this.#id,
            statement: this.#statement,
            answers: this.#answers.map(a => a.toMap()),
            corretlyAnswered: this.#corretlyAnswered,
        };
    }
}