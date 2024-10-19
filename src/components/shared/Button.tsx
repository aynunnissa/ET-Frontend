import classNames from "classnames";

const SIZES = {
  normal: 'py-[10px] px-[20px]',
  large: 'py-[10px] px-[64px]'
} as const;

interface IButton {
  text?: string,
  isRounded?: boolean,
  isIconBtn?: boolean,
  altText?: string,
  disabled?: boolean,
  primary?: boolean,
  icon?: string,
  leftIcon?: string,
  rightIcon?: string,
  size?: keyof typeof SIZES,
  handleClick?: () => void
}


const Button = (props: IButton) => {
  const btnSize = props.size ?? 'normal';

  return(
    <button
      onClick={props.handleClick}
      className={classNames(
        `flex items-center justify-center gap-2 border-none ${SIZES[btnSize]}`,
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