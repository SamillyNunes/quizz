import styles from '../styles/Statistic.module.css';

interface StatisticProps{
    value: any;
    label: string;
    backgroundColor?: string;
    color?: string;
}

export default function Statistic(props: StatisticProps){
    return (
        <div className={styles.statistic}>
            <div className={styles.value} style={{
                backgroundColor: props.backgroundColor ?? '#FDD60F',
                color: props.color  ?? '#333'
            }}>
                {props.value}
            </div>
            <div className={styles.label}>
                {props.label}
            </div>
        </div>
    );
}