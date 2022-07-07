import s from "./Answer.module.css";

export default function Answer(props){

    return(
        <button className={s.answer}><span>C:</span>{props.option}</button>
    )
}