import { RiCloseLine } from "react-icons/ri";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { list } from "../data/list";
import Link from "next/link";
import useStore from "../store/mainStore";
import CartItems from "./CartItems";
import toast from "react-hot-toast";
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
      className={` absolute h-[100vh] sidebar left-0 w-[100vw] z-40 top-0
      ${cart ? "translate-x-0" : " translate-x-[2000px]"}`}
    >
      <div
        className="absolute  right-0 top-0 h-[100vh] w-full"
        onClick={setCart}
      ></div>
      <div
        onClick={setCart}
        className=" absolute right-40 bg-dim opacity-40 
      h-full blur-3xl w-3/6 md:w-2/6"
      ></div>
      <aside
        className={` ${cart ? "translate-x-0" : "translate-x-80"}
        right-0  absolute transition-transform flex flex-col
        duration-200 top-0 bg-white h-[100vh]  w-4/6 md:w-2/6`}
      >
        <div className=" relative w-full h-full">
          <div className=" bg-dim  flex items-center justify-center">
            <RiCloseLine
              onClick={setCart}
              className=" text-xl cursor-pointer  bg-primary rounded-full
            my-4 ring-2 z-10 ring-primary  text-white"
            />
          </div>

          <div className=" h-[90vh] overflow-auto">
            <CartItems />
          </div>

          <footer
            className=" absolute justify-between  px-3
           text-white font-rockNroll bottom-0 flex items-center
            bg-primary h-14 w-full"
          >
            <div className=" flex items-center gap-1">
              <span>Subtotal: {``} </span>
              <span className=" text-xl">${totalPrice}</span>
            </div>

            <button
              onClick={() => toast.error(`It's Demo`)}
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
