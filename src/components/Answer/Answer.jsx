import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import s from "./Answer.module.css";
import {nextRound} from "../../actions/index";


function mapStateToProps(state){
    return{
        allRounds: state.allRounds,
        round: state.round,
    }
}

function Answer(props){
    const navigate = useNavigate();
    
    function finalAnswer(event){
        event.preventDefault();
        if(event.target.innerText === props.questionAndAnswers.correctAnswer){
            for(let i = 0; i < props.allRounds.length; i ++){
                if(props.allRounds[i] === props.round){
                    let nextR = props.allRounds[i + 1];
                    if(props.allRounds.length - 1 === i){
                        props.nextRound(200);
                        return navigate("/youWon");
                    }else{
                        props.nextRound(nextR);
                        return navigate("/youWereRight");
                    }
                }
            }
        }else{
            console.log("Le erraste maestro");
            props.nextRound(200);
            return navigate("/youLoosed");
        }
    }

    return(
        <button className={s.answer} onClick={finalAnswer}>{props.option}</button>
    )
}

export default connect(mapStateToProps,{nextRound})(Answer)