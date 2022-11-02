import React from "react";
import member1 from "../../../assets/images/team/1.jpg";
import member2 from "../../../assets/images/team/2.jpg";
import member3 from "../../../assets/images/team/3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./TeamCarousel.css";
import { Pagination } from "swiper";
const TeamCarousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="package">
          <img src={member1} alt="" />
          <div>
            <h3>Fahim Islam</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide className="package">
          <img src={member2} alt="" />
        </SwiperSlide>

        <SwiperSlide className="package">
          <img src={member3} alt="" />
        </SwiperSlide>
        <SwiperSlide className="package">
          <img src={member1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="package">
          <img src={member2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="package">
          <img src={member3} alt="" />
        </SwiperSlide>
        <SwiperSlide className="package">
          <img src={member1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="package">
          <img src={member2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="package">
          <img src={member3} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TeamCarousel;
