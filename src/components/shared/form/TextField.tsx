import { FORM_ERROR } from "../../contact-us/constants";
import styles from "./form.module.css";

interface IProps {
  type: string,
  placeholder: string,
  value: string,
  class: string,
  hasError: boolean,
  valueChangeHandler: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
  inputBlurHandler: (event: React.SyntheticEvent) => void,
}

const TextField = (props: IProps) => {
  return(
    <div className={props.class}>
      <textarea
        id={props.type}
        className={styles.form__input}
        onChange={props.valueChangeHandler}
        onBlur={props.inputBlurHandler}
        placeholder={props.placeholder}
      >{props.value}</textarea>
      {props.hasError && (
        <p className="text-et-red-main text-left mt-1 ml-0.5">{FORM_ERROR[props.type]}</p>
      )}
    </div>
  )
}

export default TextField;