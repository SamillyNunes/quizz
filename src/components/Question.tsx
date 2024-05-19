import AnswerModel from "../../model/answer_mode";
import QuestionModel from "../../model/question_model";
import styles from "../styles/Question.module.css";
import Answer from "./Answer";
import Statement from "./Statement";
import Timer from "./Timer";

const letters = [
    {value: 'A', color: '#F2C866'},
    {value: 'B', color: '#F266BA'},
    {value: 'C', color: '#85DAF2'},
    {value: 'D', color: '#BCE596'},
];

interface QuestionProps{
    value: QuestionModel;
    onResponse: (index: number)=> void;
    onFinalizedTimer: ()=>void;
}

export default function Question(props: QuestionProps){
    const question = props.value;

    function renderAnswers(){
        return question.answers.map((a: AnswerModel, i: number) => (
            <Answer
                key={i}
                value={a}
                index={i}
                letter={letters[i].value}
                color={letters[i].color}
                onResponse={props.onResponse}
            />
        ));
    }

    return (
        <div className={styles.question} >
            <Statement text={question.statement} />
            <Timer duration={10} finalizedTimer={props.onFinalizedTimer} />
            {renderAnswers()}
        </div>
    );

}