import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { AiFillStar } from "react-icons/ai";
import {
  Controller,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";

import Image from "next/image";
import { useState } from "react";
import { swiperImg } from "../constants";
import { flag, love, love_tr, share, show, user_2 } from "../assets";
import Slidercontent from "./Slidercontent";
function Slider() {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  return (
    <section className="w-full md:w-[55%] lg:w-[65%] bg-lightblue p-4">
      {/*start slider  */}
      <div className=" flex justify-start gap-4 items-start">
        <div className="">
          <Swiper
            direction={"vertical"}
            modules={[Controller]}
            onSwiper={setFirstSwiper}
            controller={{ control: secondSwiper }}
            spaceBetween={-100}
            slidesPerView={3}
            freeMode={true}
            watchSlidesProgress={true}
            // modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper3 w-78px h-[379px] flex-none	md:flex"
          >
            {swiperImg.map((item) => (
              <SwiperSlide key={item.id}>
                <div style={{ width: "78px", height: "78px" }}>
                  <Image
                    src={item.title}
                    alt={"slide cars"}
                    className="w-[78px] h-[78px] rounded object-cover		"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="min-w-[200px]  md:w-full h-[379px]">
          <Swiper
            dir="rtl"
            modules={[Controller, Navigation, Pagination, Scrollbar, A11y]}
            onSwiper={setSecondSwiper}
            // controller={{ control: firstSwiper }}
            // navigation
            pagination={{ clickable: true }}
            scrollbar={true}
            className="mySwiper w-full h-[379px] md:h-[379px]"
          >
            {swiperImg.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative">
                  <div className="absolute top-[10px] left-0  sm:top-[50px] sm:left-8 md:top-[10px] md:left-0 lg:top-[50px] lg:left-8  w-[90%] m-auto  flex flex-col sm:flex-row-reverse md:flex-col lg:flex-row-reverse justify-between items-center	">
                    <div className="flex gap-2 flex-row-reverse	items-center	mb-[10px]	sm:mb-[0] md:mb-[10px] lg:mb-[10px]">
                      <Image
                        src={share}
                        alt="share"
                        className="svg_img_slider"
                      />
                      <Image src={love} alt="love" className="svg_img_slider" />
                      <Image src={flag} alt="flag" className="svg_img_slider" />
                    </div>
                    <div className="flex flex-row-reverse justify-center items-center bg-[#8D8C8C] p-[5px] sm:p-[10px] text-[10px] sm:text-[16px] rounded-[10px] text-white">
                      <span className="mr-2">3000</span>{" "}
                      <Image src={show} alt="show" className="svg_img_slider" />
                      <p className="ml-[10px] pl-[10px] border-l-2	border-white">
                        02:00
                      </p>
                    </div>
                  </div>

                  <Image
                    src={item.title}
                    alt={"slide cars"}
                    className="w-full h-[400px] rounded-lg"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/*end slider  */}

         <Slidercontent/>


    </section>
  );
}

export default Slider;

// 0552379197 