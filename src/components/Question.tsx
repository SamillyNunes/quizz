import AnswerModel from "../../model/answer_mode";
import QuestionModel from "../../model/question_model";
import styles from "../styles/Question.module.css";
import Answer from "./Answer";
import Statement from "./Statement";

interface QuestionProps{
    value: QuestionModel;
}

export default function Question(props: QuestionProps){
    const question = props.value;

    function renderAnswers(){
        return question.answers.map((a: AnswerModel, i: number) => (
            <Answer
                key={i}
                value={a}
                index={i}
                letter="A"
                color="#F2C866"
            />
        ));
    }

    return (
        <div className={styles.question} >
            <Statement text={question.statement} />
            {renderAnswers()}
        </div>
    );

}