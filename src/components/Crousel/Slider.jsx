import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Slider() {
  return  (
    <div className="w-full  mx-auto">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop
        className="mySwiper"
      >
        <SwiperSlide className='prev-button'>
          <img className='img' src="./image/s1.jpg" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='img'  src="./image/s2.jpg" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='img'  src="./image/s3.jpg" alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='img'  src="./image/5.png" alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='img'  src="./image/2.png" alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='img'  src="./image/4.jpg" alt="Slide 3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider