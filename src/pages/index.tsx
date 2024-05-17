import Question from "@/components/Question";
import QuestionModel from "../../model/question_model";
import AnswerModel from "../../model/answer_mode";
import { useState } from "react";

const qMock = new QuestionModel(1, "Melhor cor?", [
  AnswerModel.wrong('Verde'),
  AnswerModel.wrong('Vermelha'),
  AnswerModel.wrong('Rosa'),
  AnswerModel.right('Azul'),
]);

export default function Home() {
  const [question, setQuestion] = useState(qMock);


  function onResponse(index: number){
    setQuestion(qMock.answerWith(index));
    console.log(index);
  }

  return (
    <div style={{
      display: "flex",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
    }} >
      <Question value={question} onResponse={onResponse} />
    </div>
  );
}
