import AnswerModel from "../../../model/answer_mode";
import QuestionModel from "../../../model/question_model";

const questions: QuestionModel[] = [
    new QuestionModel(
        306, 
        "Qual bicho transmite a doença de chagas?", 
        [
            AnswerModel.wrong('Abelha'),
            AnswerModel.wrong('Barata'),
            AnswerModel.wrong('Pulga'),
            AnswerModel.right('Barbeiro'),
        ]
    ),
    new QuestionModel(
        202, 
        "Qual fruto é conhecido no Norte e Nordeste como 'Jerimum'", 
        [
            AnswerModel.wrong('Caju'),
            AnswerModel.wrong('Coco'),
            AnswerModel.wrong('Jabuticaba'),
            AnswerModel.right('Abobora'),
        ]
    ),
];

export default questions;