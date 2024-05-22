import { shuffle } from "../functions/arrays";
import AnswerModel from "./answer_model";

export default class QuestionModel{
    #id: number;
    #statement: string;
    #answers: AnswerModel[];
    #corretlyAnswered: boolean;

    constructor(id:number, statement: string, answers: AnswerModel[], corretlyAnswered=false){
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

    answerWith(index: number): QuestionModel{
        const hasAnsweredCorrectly = this.#answers[index]?.isRight;
        const answers = this.#answers.map( (answer:AnswerModel, i: number) => {
            const isTheSelectedAnswer = index ===i;
            const shouldReveal = isTheSelectedAnswer || answer.isRight;
            return shouldReveal ? answer.reveal() : answer;
        } );
        return new QuestionModel(this.id, this.statement, answers, hasAnsweredCorrectly);

    }

    toMap(){
        return {
            id: this.#id,
            statement: this.#statement,
            corretlyAnswered: this.#corretlyAnswered,
            answered: this.answered,
            answers: this.#answers.map(a => a.toMap()),
        };
    }

    static fromMap(object: any): QuestionModel{
        return new QuestionModel(
            object.id,
            object.statement,
            object.answers.map((a:any) => AnswerModel.fromMap(a)),
            object.corretlyAnswered
        );
    }
}