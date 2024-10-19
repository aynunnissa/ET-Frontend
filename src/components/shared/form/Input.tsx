import { FORM_ERROR } from "../../contact-us/constants";
import "./form.css";

interface IProps {
  type: string,
  placeholder: string,
  value: string,
  class: string,
  hasError: boolean,
  valueChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
  inputBlurHandler: (event: React.SyntheticEvent) => void,
}

const Input = (props: IProps) => {
  return(
    <div className={props.class}>
      <input
        type="text"
        id={props.type}
        className="form__input"
        onChange={props.valueChangeHandler}
        onBlur={props.inputBlurHandler}
        value={props.value}
        placeholder={props.placeholder}
      />
      {props.hasError && (
        <p className="text-et-red-main text-left mt-1 ml-0.5">{FORM_ERROR[props.type]}</p>
      )}
    </div>
  )
}

export default Input;