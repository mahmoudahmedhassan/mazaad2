import React from "react";
import Image from "next/image";
import { useState } from "react";
import { swiperImg } from "../constants";
import { love_tr, submit, user_2 } from "../assets";
import { AiFillStar } from "react-icons/ai";

function Slidercontent() {
  return (
    <>
      <div className="pt-[30px] m-auto box_shadow pb-5 px-3 lg:mr-[10%]">
        <div className="flex items-start gap-3 ">
          <div className="relative">
            <Image
              src={user_2}
              alt="user_2"
              className="w-[60px] h-[60px] rounded-full object-contain "
            />
            <Image
              src={love_tr}
              alt="love_tr"
              className="  w-[22px] h-[22px]  absolute bottom-[10px] right-[20px]"
            />
          </div>
          <div>
            <h2 className="font-bold text-[20px]">اسم البائع</h2>
            <p className="text-[12px]"> 9847349987+</p>
          </div>
          <div className="flex">
            <AiFillStar className="mt-2 " />
            <AiFillStar className="mt-2 text-[#FFAE18]" />
            <AiFillStar className="mt-2 text-[#FFAE18]" />
            <AiFillStar className="mt-2 text-[#FFAE18]" />
            <AiFillStar className="mt-2 text-[#FFAE18]" />
          </div>
        </div>

        <div className="text-[20px] text-[#414141] my-5 ">
          <p className="font-bold"> شراء مجموعة من السيارات من موديلات 1990</p>
          <p className="text-[12]">code 1234</p>
        </div>
        <div className="flex flex-col lg:flex-row  justify-between">
          <div className="flex items-start gap-3 mb-4">
            <p className="text-[#D20653] bg-[#FAE6ED] p-[8px]">10000+</p>
            <p className="text-[#D20653] bg-[#FAE6ED] p-[8px] mx-3">10000+</p>
            <p className="text-[#D20653] bg-[#FAE6ED] p-[8px]">10000+</p>
          </div>

          <div className="flex gap-2 items-start">
            <div className="w-[195px]">
              <input
                type="text"
                placeholder=" أكتب المبلغ"
                className="w-full h-[40px] pl-[10px] border-solid border-[1px] border-gray-300 p-4 "
              />
            </div>
            <button className="w-[88px] p-[7px] background_button text-white">
              تأكيد
            </button>
          </div>
        </div>
      </div>

      <div className="pt-[30px] m-auto box_shadow pb-5 px-3 lg:mr-[10%] mt-5">
        <div className="text-[#414141]">
          <h2 className="font-bold mb-3">ارسال رسالة الى البائع</h2>
          <p className="text-[12px mb-6">يمكنك في وقت البث المباشر ارسال رسالة الى البائع للاستفسار</p>
        </div>

        <div className="flex justify-center items-start gap-3">
          <input type='text' placeholder="أكتب سوالك" className="w-full h-[50px] pl-[10px] border-solid border-[1px] border-gray-300 p-4 rounded-3xl"/>
          <Image
              src={submit}
              alt="submit"
              className="w-[60px] h-[60px] rounded-full object-contain "
            />
        </div>
      </div>
    </>
  );
}

export default Slidercontent;
