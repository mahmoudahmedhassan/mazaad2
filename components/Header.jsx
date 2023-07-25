import Image from "next/image";
import {logo} from '../assets'
import { dropdownSelector } from "../constants";
function Header() {
  return (
    <header className="container flex py-[7px] gap-3 ">
      <dvi className="basis-[70%] flex">
        <div className="relative basis-[50%] md:basis-[30%]  lg:max-w-sm">
          <select className="w-full p-2.5 text-[#D20653] bg-[#FAE6ED]  border shadow-sm outline-none appearance-none focus:border-red-200 border_select">
            {dropdownSelector.map((item) => (
              <option
                className="text-[#323232]"
                key={item.id}
                value={item.title}
              >
                {item.title}
              </option>
            ))}
          </select>
        </div>
        <div className="basis-[50%] md:basis-[70%]">
          <input
            type="text"
            placeholder="ابحث هنا"
            className="w-full pl-[10px] p-2.5 border-solid outline-none border-[1px] border-gray-[#D20653] bg-[#FAE6ED]   "
          />
        </div>
      </dvi>
      <div className="basis-[30%] flex justify-end items-center">
        <Image src={logo} alt={"logo"}/>
      </div>
    </header>
  );
}

export default Header;
