// imported from libraries
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';

// imported styles
import s from "./Answer.module.css";

// local imported
import {nextRound, resetWildcards, winningAtTheMomentToZero, 
    increaseWinningAtTheMoment} from "../../actions/index";

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
        
        swal({
            title: "Is this your final answer?",
            buttons: [
                ' No, let me think...',
                'Yes, let´s go for it!'
            ],
            dangerMode: true,
            }).then(function(isConfirm) {
            if (isConfirm && props.seconds > 0) {
                if(event.target.innerText === props.questionAndAnswers.correctAnswer){
                    props.increaseWinningAtTheMoment(props.round)
                    for(let i = 0; i < props.allRounds.length; i ++){
                        if(props.allRounds[i] === props.round){
                            let nextR = props.allRounds[i + 1];
                            if(props.allRounds.length - 1 === i){
                                props.nextRound(200);
                                props.resetWildcards();
                                return navigate("/youWon");
                            }else{
                                props.nextRound(nextR);
                                return navigate("/youWereRight");
                            }
                        }
                    }
                }else{
                    props.nextRound(200);
                    props.resetWildcards();
                    props.winningAtTheMomentToZero()
                    return navigate("/youLoosed");
                }
            } else {
                
            }
            })
    }
    return(
        <button className={s.answer} onClick={finalAnswer}>{props.option}</button>
        )
    }
    
export default connect(mapStateToProps,{nextRound, resetWildcards, winningAtTheMomentToZero,
    increaseWinningAtTheMoment})(Answer);    
