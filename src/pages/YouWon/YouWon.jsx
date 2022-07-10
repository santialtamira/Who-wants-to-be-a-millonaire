// imported from libraries
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

// imported styles
import s from "./YouWon.module.css";

function mapStatesToProps(state){
    return{
        winningAtTheMoment: state.winningAtTheMoment,
    }
}

function YouWon(props){

    const navigate = useNavigate();
    function handleClickPlay(){
        navigate("/letsPlay")
    }

    return(
        <div className={s.container}>
            <div className={s.titleAndBtn}>
                <div className={s.title}>Congratulations!. You are the new 
                    <br />
                    CHAMPION of WHO WANTS TO BE A MILLONAIRE.
                    <br />
                    Enjoy your prize of {<span>{props.winningAtTheMoment}€</span>}!
                </div>
                <button className={s.btn} onClick={handleClickPlay}>PLAY AGAIN</button>
            </div>
        </div>
    )
}

export default connect(mapStatesToProps, {})(YouWon)