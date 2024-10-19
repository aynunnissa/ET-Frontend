import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

import Hero1Image from "../../assets/images/hero1.webp";
import Hero2Image from "../../assets/images/hero2.webp";
import Hero3Image from "../../assets/images/hero3.webp";

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function HeroBanner() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3000,
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
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
          <img src={Hero1Image} alt='Hero banner 1' className="w-full h-full object-cover brightness-50" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
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
          <img src={Hero2Image} alt='Hero banner 2' className="w-full h-full object-cover brightness-50" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
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
          <img src={Hero3Image} alt='Hero banner 3' className="w-full h-full object-cover brightness-50" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
