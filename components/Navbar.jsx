/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { favorite, notifications, price_change, previous } from "../assets";
import { navLinks } from "../constants";
import Image from "next/image";

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverOut = () => {
    setIsHovered(false);
  };
  return (
    <nav className="full-w bg-[#9B0257] pb-5 md:pb-0 md:h-[73px] leading-[73px] px-5">
      <div className="container mx-auto   md:flex justify-between items-center;">
        <ul className="element_center gap-4 sm:gap-9">
          {navLinks.map((item) => (
            <li className="text-white hover:text-[#323232]" key={item.id}>
              {item.title}
            </li>
          ))}
        </ul>

        <div className="element_center gap-9">
          <Image
            src={price_change}
            alt={"price_change"}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverOut}
            className="svg_img price_change"
          />

          <Image
            src={notifications}
            alt="notifications"
            className="svg_img notifications"
          />
          <Image src={favorite} alt="favorite" className="svg_img favorite" />

          <button className="element_center text-white bg-[#FFA810] h-[40px] w-[80px] rounded-2xl	">
           <span className="ml-1">العربية</span>
          <Image
            src={previous}
            alt="previous"
            className=""
          />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
