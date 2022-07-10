// imported from libraries
import { useNavigate } from "react-router-dom";

// imported styles
import s from "./YouWereRight.module.css";

export default function YouWereRight(){

    const navigate = useNavigate();
    function handleClickPlay(){
        navigate("/letsPlay");
    }

    return(
        <div className={s.container}>
            <div className={s.titleAndBtn}>
                <h1 className={s.title}>You were right!</h1>
                <button className={s.btn} onClick={handleClickPlay}>NEXT QUESTION</button>
            </div>
        </div>
    )
}