interface IProps {
  icon: string,
  title: string,
  description: string
}

const GrowthItem = (props: IProps) => {
  return(
    <div className="flex flex-col items-center gap-4 md:gap-12">
      <div>
        <img
          src={props.icon}
          alt={props.title}
          className="h-[45px] md:h-[75px] w-auto"
        />
      </div>
      <div>
        <p className="title-3 font-extrabold text-primary-main">{props.title}</p>
        <p className="headline text-secondary-main">{props.description}</p>
      </div>
    </div>
  )
}

export default GrowthItem;