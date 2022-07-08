import { useNavigate } from "react-router-dom";

import s from "./YouWon.module.css";

export default function YouWon(){

    const navigate = useNavigate();
    function handleClickPlay(){
        navigate("/letsPlay")
    }

    return(
        <div className={s.container}>
        <div className={s.titleAndBtn}>
            <h1 className={s.title}>YOU WON, CONGRATULATIONS!</h1>
            <button className={s.btn} onClick={handleClickPlay}>PLAY AGAIN</button>
        </div>
    </div>
    )
}