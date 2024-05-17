import QuestionModel from "../../model/question_model";
import styles from "../styles/Question.module.css";

interface QuestionProps{
    value: QuestionModel;
}

export default function Question(props: QuestionProps){
    const question = props.value;

    return (
        <div className={styles.question} >
            <h1>Questão</h1>

        </div>
    );

}