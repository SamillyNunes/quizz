import Question from "@/components/Question";
import QuestionModel from "../../model/question_model";
import AnswerModel from "../../model/answer_mode";

export default function Home() {

  const q = new QuestionModel(1, "Melhor cor?", [
    AnswerModel.wrong('Verde'),
    AnswerModel.wrong('Vermelha'),
    AnswerModel.wrong('Rosa'),
    AnswerModel.right('Azul'),
  ]);

  return (
    <Question value={q} />
  );
}
