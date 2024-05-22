import Question from "@/components/Question";
import QuestionModel from "../../model/question_model";
import AnswerModel from "../../model/answer_model";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import Questionnaire from "@/components/Questionnaire";

const qMock = new QuestionModel(1, "Melhor cor?", [
  AnswerModel.wrong('Verde'),
  AnswerModel.wrong('Vermelha'),
  AnswerModel.wrong('Rosa'),
  AnswerModel.right('Azul'),
]);

const BASE_URL = 'http://localhost:3000/api';

export default function Home() {
  const [questionsIds, setQuestionsIds] = useState<number[]>([]);
  const [question, setQuestion] = useState(qMock);
  const [rightAnswers, setRightAnswers] = useState<number>(0);

  async function loadQuestionIds(){
    const resp = await fetch(`${BASE_URL}/questionnaire`);
    const questionsIds = await resp.json();

    setQuestionsIds(questionsIds);
  }

  async function loadQuestion(questionId: number){
    const resp = await fetch(`${BASE_URL}/questions/${questionId}`);
    const questionJson = await resp.json();
    const newQuestion = QuestionModel.fromMap(questionJson);

    setQuestion(newQuestion);
  }

  useEffect(()=>{
    loadQuestionIds();
  },[]);

  useEffect(()=>{
    if(questionsIds.length>0){
      loadQuestion(questionsIds[0]);
    }
  }, [questionsIds]);


  function onQuestionAnswered(answeredQuestion: QuestionModel){
    setQuestion(answeredQuestion);
    if(answeredQuestion.corretlyAnswered){
      setRightAnswers(rightAnswers+1);
    }
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
