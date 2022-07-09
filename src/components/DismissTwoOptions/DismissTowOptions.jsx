import { connect } from "react-redux";
import s from "./DismissTowOptions.module.css";
import { playDismissTwoOptions } from "../../actions";
import swal from 'sweetalert';

function mapStatesToProp(state){
    return{
        dismissTwoOptionsSpent: state.dismissTwoOptionsSpent,
    }
}

function DismissTowOptions(props){

    function useWildcard(){
        if(props.dismissTwoOptionsSpent > 0){
            return swal("You already used this wildcard, sorry");;
        }
        let fourBtns = document.querySelectorAll("div > button");
        let counter = 0;

        fourBtns.forEach(element =>{
            if(element.innerText !== props.questionAndAnswers.correctAnswer && counter < 2){
                element.disabled = true;
                element.className = "disabled";
                counter ++;
            }
        })
        props.playDismissTwoOptions()
    }

    return(
        <button className={s.wildcard} id={"btnAnswer"} onClick={useWildcard}> Dismiss two options</button>
    )
}

export default connect(mapStatesToProp, {playDismissTwoOptions})(DismissTowOptions)