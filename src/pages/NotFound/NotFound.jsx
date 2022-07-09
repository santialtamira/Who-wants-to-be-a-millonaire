import s from "./NotFound.module.css";
import { useNavigate } from "react-router-dom";

export default function NotFound(){
    const navigate = useNavigate();
    function handleClick(){
        navigate("/")
    }

    return(
        <div className={s.container}>
            <div className={s.container}>
                <div className={s.titleAndBtn}>
                    <h1 className={s.title}>Sorry, the page was not found</h1>
                    <button className={s.btn} onClick={handleClick}>Go to welcome page</button>
                </div>
            </div>
        </div>
    )
}