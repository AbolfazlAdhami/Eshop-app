import React from "react";
import image from "../../Asset/SwipperImage";
import Wrapper from "../../HOC/Wrapper";
import "./Swipper.css";
// Import Swiper
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";

const Swipper = () => {
        return (
                <Wrapper>
                        <div className="swipper">
                                {" "}
                                <Swiper pagination={true} modules={[Pagination]} autoplay loop={true} speed={3000} className="mySwiper">
                                        {image.map((item, index) => (
                                                <SwiperSlide key={index}>
                                                        <img src={item} alt="" />
                                                </SwiperSlide>
                                        ))}
                                </Swiper>
                        </div>
                </Wrapper>
        );
};

export default Swipper;
