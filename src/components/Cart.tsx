import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { list } from "../data/list";
import Link from "next/link";
import useStore from "../store/mainStore";

const Cart = () => {
  const { cart, setCart } = useStore();

  useEffect(() => {
    if (cart === true) {
      document.getElementsByTagName<any>("BODY")[0].style.overflow = "hidden";
    } else
      document.getElementsByTagName<any>("BODY")[0].style.overflow = "auto";
  }, [cart]);

  const router = useRouter();

  return (
    <div
      className={`absolute h-[100vh] sidebar w-[100vw] z-10 top-0
         ${cart ? "translate-x-0" : " translate-x-[2000px]"}`}
    >
      <div
        className="absolute  right-0 top-0 h-[100vh] w-full"
        onClick={setCart}
      ></div>
      <aside
        className={` ${cart ? "translate-x-0" : "translate-x-80"}
                right-0  absolute transition-transform
                duration-200 top-0 bg-white h-[100vh]  w-2/4
                `}
      >
        <div className=" bg-red-50  flex items-center justify-center">
          <IoMdClose
            onClick={setCart}
            className=" text-xl cursor-pointer  bg-red-600 rounded-full
                         my-4 ring-2 z-10 ring-red-600  text-white
                         "
          />
        </div>
        CART
      </aside>
    </div>
  );
};
export default Cart;
