import { useState, useEffect } from "react";

//import styles
import s from "./letsPlay.module.css";

//import components
import Counter from "../../components/Counter/Counter"
import Answer from "../../components/Answer/Answer";
import AskTheAudience from "../../components/AskTheAudience/AskTheAudience";
import DismissTowOptions from "../../components/DismissTwoOptions/DismissTowOptions";
import Question from "../../components/Question/Question";


export default function LetsPlay(){

    const [seconds, setSeconds] = useState(60);
    const [active, setActive] = useState(true);

    function reset() {
        setSeconds(60);
        setActive(true);
    }

    useEffect(() => {
        let interval = null;
        if (active) {
            interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
            }, 1000);
        }
        if (active ) {
            interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
            }, 1000);
        }
        if (!active && seconds ) {
            clearInterval(interval);
        }
        if (seconds === 0 ) {
            reset();
            clearInterval(interval);
        }
            return () => clearInterval(interval);
    }, [active, seconds]);

    return(
        <div className={s.container}>
            <Counter></Counter>
            <div className={s.questionAndAnswers}>
                <Question q="Which is Argentina´s capital?"></Question>
                <div>
                    <div className={s.firstTwoQuestions}>
                        <Answer option="Montevideo"></Answer>
                        <Answer option="Asunción"></Answer>
                    </div>
                    <div className={s.secondTwoQuestions}>
                        <Answer option="Buenos Aires"></Answer>
                        <Answer option="Rio de Janeiro"></Answer>
                    </div>
                </div>
            </div>
            <div className={s.wildcards}>
                <AskTheAudience></AskTheAudience>
                <DismissTowOptions></DismissTowOptions>                
            </div>
        </div>
    )
}