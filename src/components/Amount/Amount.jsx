// imported styles
import s from "./Amount.module.css";

export default function Amount(props){

    return(
        <h1 className={s.amount}> Playing for {props.prize}€!</h1>
    )
}