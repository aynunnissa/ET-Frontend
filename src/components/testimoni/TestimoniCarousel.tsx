import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './carousel.css';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import TestimoniCard from './TestimoniCard';

import Image1 from "../../assets/images/testimoni/katimin.webp";
import Image2 from "../../assets/images/testimoni/arif.webp";
import Image3 from "../../assets/images/testimoni/nugroho.webp";
import Image4 from "../../assets/images/testimoni/yanto.webp";

export default function TestimoniCarousel() {
  return (
    <div className="testimoni__carousel">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={false}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
        }}
        navigation
        modules={[Pagination, Navigation, Autoplay ]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="px-8 md:px-16 lg:px-24 pb-8">
            <TestimoniCard image={Image1} name="Katimin" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-8 md:px-16 lg:px-24 pb-8">
            <TestimoniCard image={Image2} name="Arif" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-8 md:px-16 lg:px-24 pb-8">
            <TestimoniCard image={Image3} name="Nugroho" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-8 md:px-16 lg:px-24 pb-8">
            <TestimoniCard image={Image4} name="Yanto" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
