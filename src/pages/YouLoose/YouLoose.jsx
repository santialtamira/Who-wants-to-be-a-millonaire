import { useNavigate } from "react-router-dom";
import s from "./YouLoose.module.css";

export default function YouLoose(){
    const navigate = useNavigate();
    function handleClickPlay(){
        navigate("/letsPlay")
    }

    return(
        <div className={s.container}>
            <div className={s.titleAndBtn}>
                <h1 className={s.title}>Thanks for participating</h1>
                <button className={s.btn} onClick={handleClickPlay}>PLAY AGAIN</button>
            </div>
        </div>
    )
}