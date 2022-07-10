// imported styles
import s from "./Amount.module.css";

export default function Amount(props){

    return(
        <h1 className={s.amount}> {props.prize}€ at stake!</h1>
    )
}