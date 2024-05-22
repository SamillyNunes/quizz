import AnswerModel from "../../model/answer_model";
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
    const answerRevealedStyled = answer.isRevealed ? styles.answerRevealed : '';

    return (
        <div className={styles.answer} onClick={()=> props.onResponse(props.index)}>
            <div className={`${answerRevealedStyled} ${styles.content}`} >
                
                <div className={styles.front} >
                    <div className={styles.letter} style={{backgroundColor: props.color }} >
                        {props.letter}
                    </div>
                    <div className={styles.value}>
                        {answer.value}
                    </div>

                </div>
            
                <div className={styles.back} >
                    {answer.isRight ? (
                        <div className={styles.right}>
                            <div>A resposta certa é ...</div>
                            <div className={styles.value}> {answer.value} </div>
                        </div>
                    ) : (
                        <div className={styles.wrong}>
                            <div>A resposta informada está errada ...</div>
                            <div className={styles.value}> {answer.value} </div>
                        </div>
                    )}
                    
                    
                </div>
                
                
                
            </div>
        </div>
    );
}