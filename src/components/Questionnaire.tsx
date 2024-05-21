import QuestionModel from "../../model/question_model";

import styles from "../styles/Questionnaire.module.css";
import Button from "./Button";
import Question from "./Question";

interface QuestionnaireProps{
    question: QuestionModel;
    isLastQuestion: boolean;
    onQuestionAnswered: (question: QuestionModel) => void;
    goToNextStep: ()=> void;
}

export default function Questionnaire(props: QuestionnaireProps){

    function onResponse(index: number){
        if(!props.question.answered){
            props.onQuestionAnswered(props.question.answerWith(index));
        }
    }

    return (
        <div className={styles.questionnaire} >
            <Question
                value={props.question}
                answeringTimer={6}
                onResponse={onResponse}
                onFinalizedTimer={props.goToNextStep}
            />

            <Button 
                text= {props.isLastQuestion ? "Finalizar" : "Próxima" }
                onClick={props.goToNextStep} 
            />

        </div>
    );
}