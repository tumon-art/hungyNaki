import Image from "next/image";
import { useEffect, useState } from "react";
import { RiShoppingBasketLine, RiUserLine, RiMenuLine } from "react-icons/ri";
import useStore from "../store/mainStore";
import Cart from "./Cart";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
const Navbar = () => {
  const { sidebarSwitch, sidebar, cart, setCart, totalQantity } = useStore();
  const [position, setPosition] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => setPosition(window.scrollY), []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     let moving = window.scrollY;

  //     setVisible(position > moving);
  //     setPosition(moving);
  //   };

  //   let head = document.getElementById("head") as HTMLElement;

  //   if (head) {
  //     if (visible == true) head.style.transform = "translateY(0px)";
  //     else head.style.transform = "translateY(-200px)";
  //   }

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [position]);

  return (
    <>
      <Cart />
      <div
        className={` transition-all z-30 top-0 bg-white w-full lg:px-32 md:px-10
      md:py-4 py-1 flex justify-between ${position > 200 && " shadow-md"}`}
      >
        <div className=" pl-2 flex flex-col items-center justify-between">
          <span className=" relative h-9 w-9 lg:h-14 lg:w-14">
            <Image src="/res-logo.png" layout="fill" alt="logo" />
          </span>

          <span className=" text-xs sm:text-base font-rockNroll block">
            HungryNaki
          </span>
        </div>
        <TopNav />
        <div className=" pr-2 flex gap-4 items-center text-xl">
          <span onClick={setCart} className=" cursor-pointer relative">
            <RiShoppingBasketLine className=" text-xl" />
            <span
              className=" absolute bg-red-500
                    rounded-full h-4 w-4 text-white font-bold
                     top-[-6px] text-sm flex 
                    justify-center items-center  right-[-6px]"
            >
              {totalQantity}
            </span>
          </span>
          <RiUserLine className=" cursor-pointer" />
          <RiMenuLine
            onClick={sidebarSwitch}
            className=" cursor-pointer md:hidden"
          />
        </div>

        <Sidebar />
      </div>

      {position > 0 && (
        <div
          id="head"
          className={` transition-all z-30 top-0 bg-white w-full lg:px-32 md:px-10
      md:py-4 py-1 fixed flex justify-between ${
        position > 200 && " shadow-md"
      }`}
        >
          <div className=" pl-2 flex flex-col items-center justify-between">
            <span className=" relative h-9 w-9 lg:h-14 lg:w-14">
              <Image src="/res-logo.png" layout="fill" alt="logo" />
            </span>

            <span className=" text-xs sm:text-base font-rockNroll block">
              HungryNaki
            </span>
          </div>

          <TopNav />

          <div className=" pr-2 flex gap-4 items-center text-xl">
            <span onClick={setCart} className=" relative">
              <RiShoppingBasketLine className=" text-xl" />
              <span
                className=" absolute bg-red-500
                    rounded-full h-4 w-4 text-white font-bold
                     top-[-6px] text-sm flex cursor-pointer
                    justify-center items-center  right-[-6px]"
              >
                {totalQantity}
              </span>
            </span>
            <RiUserLine className=" cursor-pointer" />
            <RiMenuLine
              onClick={sidebarSwitch}
              className=" cursor-pointer md:hidden"
            />
          </div>
          <Sidebar />
        </div>
      )}
    </>
  );
};
export default Navbar;
