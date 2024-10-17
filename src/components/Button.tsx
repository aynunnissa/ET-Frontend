import classNames from "classnames";

interface IButton {
  text?: string,
  isRounded?: boolean,
  isIconBtn?: boolean,
  icon?: string,
  altText?: string,
  disabled?: boolean
}

const Button = (props: IButton) => {
  return(
    <button
      className={classNames(
        `
          py-[10px] px-[20px] flex items-center justify-center border-none 
          bg-secondary-main text-neutral-main hover:bg-secondary-400 active:bg-secondary-600
        `,
        {
          'rounded-full': props.isRounded,
          'rounded-[5px]': !props.isRounded,
          'w-[72px] h-[72px]': props.isRounded,
        }
      )}
      disabled={props.disabled}
    >
      {props.isIconBtn && props.icon ? 
        <img 
          src={props.icon}
          alt={props.altText}
        /> 
        : props.text
      }
    </button>
  );
}

export default Button;