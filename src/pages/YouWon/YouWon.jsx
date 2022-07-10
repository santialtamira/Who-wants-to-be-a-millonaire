// imported from libraries
import { useNavigate } from "react-router-dom";

// imported styles
import s from "./YouWon.module.css";

export default function YouWon(){

    const navigate = useNavigate();
    function handleClickPlay(){
        navigate("/letsPlay")
    }

    return(
        <div className={s.container}>
            <div className={s.titleAndBtn}>
                <h1 className={s.title}>Congratulations!, you are the new CHAMPION
                    <br />
                    of WHO WANTS TO BE A MILLONAIRE.
                    <br />
                    Enjoy your prize!
                </h1>
                <button className={s.btn} onClick={handleClickPlay}>PLAY AGAIN</button>
            </div>
        </div>
    )
}