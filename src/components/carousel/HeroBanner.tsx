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
import Banner from './Banner';

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
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Banner isPriority image={Hero1Image} altImage='Hero banner 1' />
      </SwiperSlide>
      <SwiperSlide>
        <Banner image={Hero2Image} altImage='Hero banner 2' />
      </SwiperSlide>
      <SwiperSlide>
        <Banner image={Hero3Image} altImage='Hero banner 3' />
      </SwiperSlide>
    </Swiper>
  );
}
