import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "../styles/Timer.module.css";

interface TimerProps{
    duration: number;
    finalizedTimer: ()=>void;
}

export default function Timer(props: TimerProps){
    return (
        <div className={styles.timer} >
            <CountdownCircleTimer
                duration={props.duration}
                size={120}
                isPlaying
                onComplete={props.finalizedTimer}
                colors={[
                    '#BCE596', '#F7BB01', '#ED827a'
                ]}
                colorsTime={[
                    props.duration, props.duration/2, 0
                ]}
            >
                {({remainingTime}) => remainingTime}
            </CountdownCircleTimer>
        </div>
    );
}