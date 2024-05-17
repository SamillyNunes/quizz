import AnswerModel from "../../model/answer_mode";
import styles from "../styles/Answer.module.css";

interface AnswerProps{
    value: AnswerModel,
    index: number,
    letter: string,
    color: string,
    onResponse: (index:number) => void,
}

export default function Answer(props: AnswerProps){
    const answer = props.value;

    return (
        <div className={styles.answer} onClick={()=> props.onResponse(props.index)}>
            <div className={styles.content} >
                <div className={styles.front} >
                    <div className={styles.letter} style={{backgroundColor: props.color }} >
                        {props.letter}
                    </div>
                    <div className={styles.value}>
                        {answer.value}
                    </div>

                </div>
                <div className={styles.back} >

                </div>
            </div>
        </div>
    );
}