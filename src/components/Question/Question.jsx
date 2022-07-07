import s from "./Question.module.css";

export default function Question(props){

    return(
        <h2 className={s.question}>{props.q}</h2>
    )
}