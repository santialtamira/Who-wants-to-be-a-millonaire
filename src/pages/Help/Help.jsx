// imported from libraries
import { useNavigate } from "react-router-dom";

// imported styles
import s from "./Help.module.css";

export default function Help(){

    const navigate = useNavigate();
    function handleClickPlay(){
        navigate("/")
    }

    return(
        <div className={s.container}>
            <div className={s.titleAndBtn}>
                <div className={s.title}>Need help?, writte us to: santiagoaltamira@gmail.com
                <br />
                Thanks!
                </div>
                <button className={s.btn} onClick={handleClickPlay}>GO TO WELCOME PAGE</button>
            </div>
        </div>
    )
}