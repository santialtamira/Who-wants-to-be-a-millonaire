// imported from libraries
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

// imported styles
import s from "./YouWonMoney.module.css";

// imported local
import { nextRound, resetWildcards, winningAtTheMomentToZero } from "../../actions";

function mapStatesToProps(state){
    return{
        winningAtTheMoment: state.winningAtTheMoment,
    }
}

function YouWonMoney(props){

    const navigate = useNavigate();
    function handleClickPlay(){
        props.nextRound(200);
        props.resetWildcards();
        props.winningAtTheMomentToZero();
        navigate("/letsPlay")
    }

    return(
        <div className={s.container}>
            <div className={s.titleAndBtn}>
                <h1 className={s.title}>You didn't win the game,
                    <br />
                    you still won {<span>{props.winningAtTheMoment}€</span>}!
                    <br />
                    Enjoy them! 
                </h1>
                <button className={s.btn} onClick={handleClickPlay}>PLAY AGAIN</button>
            </div>
        </div>
    )
}

export default connect(mapStatesToProps, {nextRound, resetWildcards, winningAtTheMomentToZero})(YouWonMoney)


