import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { list } from "../data/list";
import Link from "next/link";
import useStore from "../store/mainStore";
import CartItems from "./CartItems";

const Cart = () => {
  const { cart, setCart, totalPrice } = useStore();
  useEffect(() => {
    if (cart === true) {
      document.getElementsByTagName<any>("BODY")[0].style.overflow = "hidden";
    } else
      document.getElementsByTagName<any>("BODY")[0].style.overflow = "auto";
  }, [cart]);

  const router = useRouter();

  return (
    <div
      className={` absolute h-[100vh] sidebar w-[100vw] z-10 top-0
      ${cart ? "translate-x-0" : " translate-x-[2000px]"}`}
    >
      <div
        className="absolute  right-0 top-0 h-[100vh] w-full"
        onClick={setCart}
      ></div>
      <div
        className=" absolute right-40 bg-rose-200 opacity-40 
      h-full blur-3xl w-3/6 md:w-2/6"
      ></div>
      <aside
        className={` ${cart ? "translate-x-0" : "translate-x-80"}
        right-0  absolute transition-transform flex flex-col
        duration-200 top-0 bg-white h-[100vh]  w-4/6 md:w-2/6`}
      >
        <div className=" relative w-full h-full">
          <div className=" bg-red-100  flex items-center justify-center">
            <IoMdClose
              onClick={setCart}
              className=" text-xl cursor-pointer  bg-red-600 rounded-full
            my-4 ring-2 z-10 ring-red-600  text-white"
            />
          </div>

          <div className=" h-[90vh] overflow-auto">
            <CartItems />
          </div>

          <footer
            className=" absolute justify-between  px-3
           text-white font-rockNroll bottom-0 flex items-center
            bg-red-600 h-14 w-full"
          >
            <div className=" flex items-center gap-1">
              <span>Subtotal: {``} </span>
              <span className=" text-xl">${totalPrice}</span>
            </div>

            <button
              className=" bg-white 
            px-2 pb-[2px] rounded-md text-gray-900"
            >
              Checkout
            </button>
          </footer>
        </div>
      </aside>
    </div>
  );
};
export default Cart;
