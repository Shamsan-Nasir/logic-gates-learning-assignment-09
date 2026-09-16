

import React, { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { AdventureCard } from "../Pages/adventures/AdventureCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const MySwiper = ({ data }) => {
    let allData = data

    return (
        <Swiper
            modules={[Navigation]}
            slidesPerView={4}
            spaceBetween={10}
            slidesOffsetBefore={16}
            slidesOffsetAfter={16}
            speed={500}

            roundLengths={true}
            simulateTouch={false}
            allowTouchMove={false}
            slideToClickedSlide={true}
            preventClicks={false}
            loop={true}
            navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            }}


            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 5,
                },

                640: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
            }}

        >
            {
                allData.map(elements =>
                    <SwiperSlide key={elements.id} className="h-1/2">
                        <AdventureCard adventureData={elements}></AdventureCard>
                    </SwiperSlide>
                )
            }



            <div className="swiper-button-prev  btn rounded-full "><FaChevronLeft></FaChevronLeft></div>
            <div className="swiper-button-next btn rounded-full"><FaChevronRight></FaChevronRight></div>
        </Swiper>
    );
};

export default MySwiper;
