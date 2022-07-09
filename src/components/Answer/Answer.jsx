import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';

import s from "./Answer.module.css";
import {nextRound, resetWildcards} from "../../actions/index";


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
                'No, let me think it better..',
                'Yes, let´s go for it!'
            ],
            
            className: s.example,
            // className: s.pepe,
            

            
            
            }).then(function(isConfirm) {
            if (isConfirm && props.seconds > 0) {
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
                    props.nextRound(200);
                    props.resetWildcards();
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
    
export default connect(mapStateToProps,{nextRound, resetWildcards})(Answer);    


// Swal.fire({
//     title: 'Are you sure?',
//     text: "You won't be able to revert this!",
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#3085d6',
//     cancelButtonColor: '#d33',
//     confirmButtonText: 'Yes, delete it!'
//   }).then((result) => {
//     if (result.isConfirmed) {
//       Swal.fire(
//         'Deleted!',
//         'Your file has been deleted.',
//         'success'
//       )
//     }
//   })


// customClass: {
//     container: 'your-container-class',
//     popup: s.popup,
//     header: 'your-header-class',
//     title: 'your-title-class',
//     closeButton: 'your-close-button-class',
//     icon: 'your-icon-class',
//     image: 'your-image-class',
//     content: 'your-content-class',
//     input: 'your-input-class',
//     actions: 'your-actions-class',
//     confirmButton: 'your-confirm-button-class',
//     cancelButton: 'your-cancel-button-class',
//     footer: 'your-footer-class'
// }