import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

//import styles
import s from "./letsPlay.module.css";

//import components
import Counter from "../../components/Counter/Counter"
import Answer from "../../components/Answer/Answer";
import AskTheAudience from "../../components/AskTheAudience/AskTheAudience";
import DismissTowOptions from "../../components/DismissTwoOptions/DismissTowOptions";
import Question from "../../components/Question/Question";
import Amount from "../../components/Amount/Amount";

//import "data base" with questions and answers.
import qsAndAs from "../../questionsAndAnswers";


function mapStateToProps(state) {
    return {
        round: state.round,
    };
}

function LetsPlay(props){
    
    
    const [seconds, setSeconds] = useState(60);
    const [active, setActive] = useState(true);
    const [questionAndAnswers, setQuestionAndAnswers] = useState({});
    const navigate = useNavigate();
    
    function chooseQuestion(){
        let qsAndAsOfSameLevel = qsAndAs.filter( qAndA => qAndA.level === props.round);
        let choosePositionOfQuestion = Math.floor(Math.random()* qsAndAsOfSameLevel.length  - 0.001);
        let choosenQuestion = qsAndAsOfSameLevel[choosePositionOfQuestion];
        setQuestionAndAnswers(choosenQuestion)
        return choosenQuestion;
    }
    
    function reset() {
        setSeconds(60);
        setActive(false);
    }


    // Si elige mal, porque la respuesta no coincide con la correct answer, entonces lo mando al you loosed.
    // Si elige bien, lo mando a correct answer. De ahí que tenga un botón que lo lleva a la siguiente pregunta.

    
    // console.log("Segundo console ya ENTRÉ al COMPONENTE")
    useEffect(() => {
        let interval = null;
        // console.log("Tercer console entré al USE EFFECT")
        if (active) {
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
            navigate("/youLoosed")
        }
        return () => clearInterval(interval);
    }, [active, seconds]);
    
    useEffect(() => {
        chooseQuestion();
        console.log("questionAndAnswers ", questionAndAnswers)
    }, [questionAndAnswers]);
    
    return(
        <div className={s.container}>
            <div className={s.counterAndAmount}>
                <Counter seconds={seconds}></Counter>
                <Amount prize={props.round}></Amount>
            </div>
            <div className={s.questionAndAnswers}>
                <Question q={questionAndAnswers.q}></Question>
                <div>
                    <div className={s.fourQuestions}>
                        {
                            questionAndAnswers.a? questionAndAnswers.a.map( (answer, index) =>{
                                return <Answer key={index} questionAndAnswers={questionAndAnswers} option={answer}></Answer>
                            })
                            : <Answer option={""}></Answer>
                        }
                    </div>
                </div>
            </div>
            <section className={s.wildcards}>
                <AskTheAudience questionAndAnswers={questionAndAnswers}></AskTheAudience>
                <DismissTowOptions questionAndAnswers={questionAndAnswers}></DismissTowOptions>                
            </section>
        </div>
    )
}

export default connect(mapStateToProps, {})(LetsPlay)
