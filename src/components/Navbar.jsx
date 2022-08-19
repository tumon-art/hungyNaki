import Image from "next/image"
import { RiShoppingBasketLine, RiUserLine, RiMenuLine } from "react-icons/ri"
const Navbar = () => {
    return (
        <div className=" mx-2 py-1 flex justify-between">
            <div className=" flex flex-col items-center justify-between">

                <Image src="/res-logo.png" height='40' width='40' alt='logo' />
                <span className=" font-rockNroll block">

                </span>
            </div>

            <div className=" flex gap-4 items-center text-xl">
                <span className=" relative">
                    <RiShoppingBasketLine className=" text-xl" />
                    <span className=" absolute bg-red-500 
                    rounded-full h-4 w-4 text-white font-bold
                     top-[-6px] text-sm flex 
                    justify-center items-center  right-[-6px]">0</span>
                </span>
                <RiUserLine />
                <RiMenuLine />
            </div>
        </div >
    )
}
export default Navbar
