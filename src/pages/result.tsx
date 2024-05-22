import Button from "@/components/Button";
import { useRouter } from "next/router";

import styles from "../styles/Result.module.css";
import Statistic from "@/components/Statistic";

export default function Result(){
    const router = useRouter();

    const total = +(router.query.total ?? 0);
    const right = +(router.query.right ?? 0);
    const percentual = Math.round((right/total)*100);

    const percentualColor = percentual>60 ? "#00ff00" : (percentual<=60 && percentual>50) ? "#e7a20e" : "#DE6433";

    return (
        <div className={styles.result} >
            <h1>Resultado Final</h1>
            <div style={{ display: "flex"}} >
                <Statistic label="Perguntas" value={total} />
                <Statistic label="Certas" value={right} backgroundColor="#9cd2a4" />
                <Statistic label="Percentual" value={`${percentual}%`} backgroundColor={percentualColor} />
            </div>
            <Button href="/" text="Tentar novamente" />
        </div>
    );
}