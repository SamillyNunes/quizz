import Question from "@/components/Question";
import QuestionModel from "../../model/question_model";
import AnswerModel from "../../model/answer_mode";
import { useState } from "react";
import Button from "@/components/Button";
import Questionnaire from "@/components/Questionnaire";

const qMock = new QuestionModel(1, "Melhor cor?", [
  AnswerModel.wrong('Verde'),
  AnswerModel.wrong('Vermelha'),
  AnswerModel.wrong('Rosa'),
  AnswerModel.right('Azul'),
]);

export default function Home() {
  const [question, setQuestion] = useState(qMock);


  function onQuestionAnswered(question: QuestionModel){

  }

  function onGoToNextStep(){

  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
    }} >
      <Questionnaire
        question={question}
        isLastQuestion={true}
        onQuestionAnswered={onQuestionAnswered}
        goToNextStep={onGoToNextStep}
      />
    </div>
  );
}
