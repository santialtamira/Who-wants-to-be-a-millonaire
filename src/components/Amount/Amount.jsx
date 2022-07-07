import s from "./Amount.module.css";

export default function Amount(props){

    return(
        <h1 className={s.amount}> You are playing for {props.prize}€!</h1>
    )
}