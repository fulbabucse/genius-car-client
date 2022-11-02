import React from "react";
import member1 from "../../../assets/images/team/1.jpg";
import member2 from "../../../assets/images/team/2.jpg";
import member3 from "../../../assets/images/team/3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./TeamCarousel.css";
import { Pagination } from "swiper";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { useEffect } from "react";
import { useState } from "react";
const TeamCarousel = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch("team_member.json")
      .then((res) => res.json())
      .then((data) => setMembers(data))
      .catch((err) => console.error(err));
  }, []);

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
        {members.map((member, index) => (
          <SwiperSlide key={index} className="package">
            <img src={member.img} alt="" />
            <div className="space-y-3">
              <h3 className="text-xl font-semibold mt-2 text-gray-700">
                {member.name}
              </h3>
              <p className="text-sm">{member.designation}</p>
              <div className="underline"></div>
              <div className="flex justify-center gap-2 mt-2">
                <FaFacebookF className="rounded-full cursor-pointer w-8 h-8 bg-purple-700 hover:bg-purple-600 text-white p-2 transition-all duration-150 text-xl"></FaFacebookF>
                <FaTwitter className="rounded-full cursor-pointer w-8 h-8 bg-purple-700 hover:bg-purple-600 text-white p-2 transition-all duration-150 text-xl"></FaTwitter>
                <FaInstagram className="rounded-full cursor-pointer w-8 h-8 bg-purple-700 hover:bg-purple-600 text-white p-2 transition-all duration-150 text-xl"></FaInstagram>
                <FaWhatsapp className="rounded-full cursor-pointer w-8 h-8 bg-purple-700 hover:bg-purple-600 text-white p-2 transition-all duration-150 text-xl"></FaWhatsapp>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TeamCarousel;
