import React from "react";
import Image from "next/image";
import { user_1 } from "../assets";

function Contenders() {
  return (
    <aside className="w-full md:w-[45%] lg:w-[35%] bg-lightgreen p-4 ">
      <div className=" layer_card">
        <div className="flex justify-between p-[7px] bg-[#414141] text-white w-full rounded h-[40px] leading-[20px]">
          <p>تاريخ البث</p>
          <span>22-1-2022</span>
        </div>

        <div className="flex justify-center items-center 	 gap-1 mt-2  mb-[10px]">
          <div className="bg-[#44215D] flex flex-col items-center text-white w-[50%] rounded relative h-[110px]">
            <p className="my-[10px] text-[12px] sm:text-[16px]">القيمة الحالية للمزاد</p>
            <h2 className="font-bold sm:text-[24px] ">5000 $</h2>
            <div className="absolute bottom-[-10px] sm:bottom-[-17px] w-[100px] sm:w-[120px] flex items-center justify-center bg-white rounded-3xl box_shadow">
              <Image
                src={user_1}
                alt="user_1"
                className="rounded-full w-[20px] sm:w-[30px] h-[20px] sm:h-[30px]"
              />
              <span className="mr-1 text-[#44215D] text-[12px] sm:text-[16px] ">
                أحمد الرائد
              </span>
            </div>
          </div>
          <div className="bg-[#EAE7ED] text-[#44215D] flex flex-col items-center w-[50%] rounded h-[110px]">
            <p className="my-[10px] text-[12px] sm:text-[16px]">القيمة الحالية بعد الضريبة</p>
            <h2 className="font-bold sm:text-[24px]	">5050 $ </h2>
          </div>
        </div>
      </div>
      {/*Contenders  */}
      <div className="layer_card">
        <h2 className="mb-[20px] font-bold ">المتنافسون</h2>

        <div className="flex justify-between items-center mb-[10px]">
          <div className="flex justify-center items-center gap-3">
            <Image
              src={user_1}
              alt="user_1"
              width="50"
              height="50 "
              className="rounded-full"
            />
            <div>
              <h4>اسم المزايد</h4>
              <p className="text-[#808080]">13:59:00</p>
            </div>
          </div>
          <p className="text-[22px]w-[55px] font-bold bg-[#FFF8E5] p-1 text-[#FDBC01]">
            +20
          </p>
        </div>

        <div className="flex justify-between items-center mb-[10px]">
          <div className="flex justify-center items-center gap-3">
            <Image
              src={user_1}
              alt="user_1"
              width="50"
              height="50 "
              className="rounded-full"
            />
            <div>
              <h4>اسم المزايد</h4>
              <p className="text-[#808080]">13:59:00</p>
            </div>
          </div>
          <p className="text-[22px]w-[55px] font-bold bg-[#FFF8E5] p-1 text-[#FDBC01]">
            +20
          </p>
        </div>
        <div className="flex justify-between items-center mb-[10px]">
          <div className="flex justify-center items-center gap-3">
            <Image
              src={user_1}
              alt="user_1"
              width="50"
              height="50 "
              className="rounded-full"
            />
            <div>
              <h4>اسم المزايد</h4>
              <p className="text-[#808080]">13:59:00</p>
            </div>
          </div>
          <p className="text-[22px]w-[55px] font-bold bg-[#FFF8E5] p-1 text-[#FDBC01]">
            +20
          </p>
        </div>
        <div className="flex justify-between items-center mb-[10px]">
          <div className="flex justify-center items-center gap-3">
            <Image
              src={user_1}
              alt="user_1"
              width="50"
              height="50 "
              className="rounded-full"
            />
            <div>
              <h4>اسم المزايد</h4>
              <p className="text-[#808080]">13:59:00</p>
            </div>
          </div>
          <p className="text-[22px]w-[55px] font-bold bg-[#FFF8E5] p-1 text-[#FDBC01]">
            +20
          </p>
        </div>
        <div className="flex justify-between items-center mb-[10px]">
          <div className="flex justify-center items-center gap-3">
            <Image
              src={user_1}
              alt="user_1"
              width="50"
              height="50 "
              className="rounded-full"
            />
            <div>
              <h4>اسم المزايد</h4>
              <p className="text-[#808080]">13:59:00</p>
            </div>
          </div>
          <p className="text-[22px]w-[55px] font-bold bg-[#FFF8E5] p-1 text-[#FDBC01]">
            +20
          </p>
        </div>
        
      </div>

      <div className="layer_card">

        <div className="rounded-lg bg-[#F0F0F0] text-[#707070] flex justify-between items-center mb-[10px] h-[43] p-[10px]">
          <p className="text-[12px]">القيمة الابتدائية</p>
          <h2 className="text-[24] font-bold">5000</h2>
        </div>
        <div className="rounded-lg bg-[#F0F0F0] text-[#707070] flex justify-between items-center mb-[10px] h-[43] p-[10px]">
          <p className="text-[12px]">القيمة الابتدائية</p>
          <h2 className="text-[24] font-bold">5000</h2>
        </div>
        <div className="rounded-lg bg-[#F0F0F0] text-[#707070] flex justify-between items-center mb-[10px] h-[43] p-[10px]">
          <p className="text-[12px]">القيمة الابتدائية</p>
          <h2 className="text-[24] font-bold">5000</h2>
        </div>
        <div className="rounded-lg bg-[#F0F0F0] text-[#707070] flex justify-between items-center mb-[10px] h-[43] p-[10px]">
          <p className="text-[12px]">القيمة الابتدائية</p>
          <h2 className="text-[24] font-bold">5000</h2>
        </div>
        <div className="rounded-lg bg-[#F0F0F0] text-[#707070] flex justify-between items-center mb-[10px] h-[43] p-[10px]">
          <p className="text-[12px]">القيمة الابتدائية</p>
          <h2 className="text-[24] font-bold">5000</h2>
        </div>
      </div>
    </aside>
  );
}

export default Contenders;
