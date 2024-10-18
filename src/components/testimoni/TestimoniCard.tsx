import Button from "../shared/Button";
import PlayIcon from "../../assets/icons/play.svg";

interface IProps {
  image: string,
  name: string
}

const TestimoniCard = ({ image, name }: IProps) => {
  return(
    <div className="flex flex-wrap drop-shadow-main bg-neutral-100">
      <div className="w-full md:w-2/5">
        <img src={image} alt={`Testimoni ${name}`} className="h-full w-full object-cover" />
      </div>
      <div className="w-full md:w-3/5">
        <div className="p-10 sm:p-8 lg:p-16 text-left">
          <div className="flex items-center gap-1">
            <p className="title-3">{name}</p>
            <hr className="border-neutral-main border-1 w-[30px] rotate-90" />
            <p className="caption-1 font-light">Petani</p>
          </div>
          <div className="mt-4 mb-12">
            <p className="caption-1">
              Harapan saya Eratani semakin meluas karena petani sangat amat dibantu dengan adanya Eratani. Terima kasih Eratani!
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <Button text="Putar Video" leftIcon={PlayIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimoniCard;