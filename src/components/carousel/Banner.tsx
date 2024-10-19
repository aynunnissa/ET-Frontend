interface IProps {
  image: string,
  altImage: string,
  isPriority?: boolean
}

const Banner = ({ image, altImage, isPriority }: IProps) => {
  return(
    <div className='relative h-full w-full'>
      <div className='absolute inset-0 z-10'>
        <div className='flex items-center justify-center h-full w-full text-white'>
          <div className='w-[90%] md:w-[80%]'>
            <h2 className="title-1 mb-8">#SelaluAdaUntukPetani</h2>
            <p className="caption-1 md:font-2xl md:font-semibold leading-none md:leading-10 w-full tracking-normal md:tracking-wider">
              Eratani adalah perusahaan startup Agri-tech yang fokus membangun sebuah ekosistem pertanian yang kuat dengan mendigitalisasi proses pertanian dari hulu hingga ke hilir. Eratani berupaya memberikan kemudahan akses kepada petani melalui teknologi yang kami miliki untuk meningkatkan produktivitas dan kesejahteraan ekosistem pertanian.
            </p>
          </div>
        </div>
      </div>
      <img src={image} alt={altImage} loading={`${isPriority ? 'eager' : 'lazy'}`} className="w-full h-full object-cover brightness-50" />
    </div>
  );
}

export default Banner;