import { useNavigate } from "react-router-dom";
import s from "./Welcome.module.css";

export default function Welcome(){
    const navigate = useNavigate();
    function handleClickPlay(){
        navigate("/letsPlay")
    }

    function handleClickPlayHelp(){
        navigate("/help")
    }

    return(
        <div className={s.container}>
            <div className={s.twoBtns}>
                <button className={s.btn} onClick={handleClickPlay}>PLAY</button>
                <button className={s.btn} onClick={handleClickPlayHelp}>HELP</button>
            </div>
        </div>
    )
}