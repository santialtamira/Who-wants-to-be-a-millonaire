// imported styles
import s from "./Counter.module.css";

export default function Counter(props){
    return(
        <div className={props.seconds > 10 ? s.whiteCounter : s.redCounter}>{props.seconds}</div>
    )
}