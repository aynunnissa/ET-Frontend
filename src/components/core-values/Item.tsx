interface IProps {
  icon: string,
  title: string,
  description: string
}

const CoreValueItem = (props: IProps) => {
  return(
    <div className="rounded-sm drop-shadow-main bg-neutral-100 px-8 py-4 md:px-16 md:py-8">
      <div className="flex items-center gap-4 md:gap-8">
        <div className="h-20 md:h-32 grow shrink-0">
          <img 
            src={props.icon}
            alt={props.title}
            className="h-full w-auto"
          />
        </div>
        <div className="text-left">
          <h3 className="title-2 mb-2 text-primary-main">{props.title}</h3>
          <p className="caption-1">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default CoreValueItem;