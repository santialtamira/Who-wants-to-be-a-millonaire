// imported from libraries
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import swal from 'sweetalert';
import { NavLink } from 'react-router-dom';

// imported styles
import s from "./letsPlay.module.css";

// local imported
import Counter from "../../components/Counter/Counter"
import Answer from "../../components/Answer/Answer";
import AskTheAudience from "../../components/AskTheAudience/AskTheAudience";
import DismissTowOptions from "../../components/DismissTwoOptions/DismissTowOptions";
import Question from "../../components/Question/Question";
import Amount from "../../components/Amount/Amount";
import qsAndAs from "../../questionsAndAnswers";
import { winningAtTheMomentToZero } from "../../actions";

function mapStateToProps(state) {
    return {
        round: state.round,
        winningAtTheMoment: state.winningAtTheMoment
    };
}

function LetsPlay(props){
    
    const [seconds, setSeconds] = useState(600);
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

    useEffect(() => {
        let interval = null;
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
            if(swal.getState().isOpen){
                swal.close()
            }
            props.winningAtTheMomentToZero()
            navigate("/youLoosed")
        }
        return () => clearInterval(interval);
    }, [active, seconds]);
    
    useEffect(() => {
        chooseQuestion();
    }, [questionAndAnswers]);
    
    return(
        <div className={s.container}>
            <div className={s.counterAndAmount}>
                <Counter seconds={seconds}></Counter>
                <div className={s.amountAndCash}>
                    <Amount prize={props.round}></Amount>
                    {props.round > 200? <NavLink to="/youWonMoney" className={s.cash} >Cash now {props.winningAtTheMoment}€</NavLink>:
                    null
                    }    
                </div>
            </div>
            <div className={s.questionAndAnswers}>
                <Question q={questionAndAnswers.q}></Question>
                <div>
                    <div className={s.fourQuestions}>
                        {
                            questionAndAnswers.a? questionAndAnswers.a.map( (answer, index) =>{
                                return <Answer seconds={seconds} key={index} questionAndAnswers={questionAndAnswers} option={answer}></Answer>
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
export default connect(mapStateToProps, {winningAtTheMomentToZero})(LetsPlay)