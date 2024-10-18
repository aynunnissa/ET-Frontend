import classNames from "classnames";

interface IButton {
  text?: string,
  isRounded?: boolean,
  isIconBtn?: boolean,
  altText?: string,
  disabled?: boolean,
  primary?: boolean,
  icon?: string,
  leftIcon?: string,
  rightIcon?: string
}

const Button = (props: IButton) => {
  return(
    <button
      className={classNames(
        `
          py-[10px] px-[20px] flex items-center justify-center gap-2 border-none
        `,
        {
          'rounded-full': props.isRounded,
          'rounded-[5px]': !props.isRounded,
          'w-[72px] h-[72px]': props.isRounded,
        }, {
          'bg-primary-main': props.primary,
          'hover:bg-primary-400': props.primary,
          'active:bg-primary-600': props.primary,
          'text-white': props.primary,
          'bg-secondary-main': !props.primary,
          'hover:bg-secondary-400': !props.primary,
          'active:bg-secondary-600': !props.primary,
          'text-neutral-main': !props.primary
        }
      )}
      disabled={props.disabled}
    >
      {props.leftIcon && <img 
        src={props.leftIcon}
        alt={props.altText}
        className="h-[18px]"
      />}
      {props.isIconBtn && props.icon ? 
        <img 
          src={props.icon}
          alt={props.altText}
        /> 
        : props.text
      }
      {props.rightIcon && <img 
        src={props.rightIcon}
        alt={props.altText}
        className="h-[18px]"
      />}
    </button>
  );
}

export default Button;