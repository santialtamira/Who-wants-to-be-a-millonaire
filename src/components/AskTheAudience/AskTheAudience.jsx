// imported from libraries
import { connect } from "react-redux";
import swal from 'sweetalert';

// imported styles
import s from "./AskTheAudience.module.css";

// local imported
import { playAskTheAudience } from "../../actions";

function mapStatesToProps(state){
    return{
        askTheAudienceSpent: state.askTheAudienceSpent,
    }
}

function AskTheAudience(props){

    function askAudience(e){
        if(props.askTheAudienceSpent > 0){
            return swal("You already used this wildcard, sorry");;
        }
        swal("The audience has spoken!",
        `"${props.questionAndAnswers.correctAnswer}" has been choosen with ${70 + Math.floor(Math.random()* 10)}% of the votes.`)
        props.playAskTheAudience();
    }

    return(
        <button className={s.wildcardATA}  onClick={askAudience}> Ask the audience</button>
    )
}
export default connect(mapStatesToProps, {playAskTheAudience})(AskTheAudience);