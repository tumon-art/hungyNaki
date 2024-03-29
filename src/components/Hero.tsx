import Image from "next/future/image";
import Link from "next/link";
import {
  RiArrowRightSLine,
  RiCarLine,
  RiShieldCheckLine,
} from "react-icons/ri";

const Hero = () => {
  return (
    <div className=" md:flex my-20 w-full lg:px-32 md:px-10">
      <div className=" flex flex-col items-center md:items-start">
        <div className=" font-rockNroll">
          <p
            className=" font-bold  text-slate-800
            md:my-4 md:text-2xlmy-2"
          >
            Easy way to make an order
          </p>

          <p
            className=" pt-1 text-2xl md:text-4xl md:my-4 my-2 
            text-slate-800  font-extrabold "
          >
            <span className=" text-primary">HUNGRY? </span>
            Just wait
          </p>

          <p
            className="pt-1 font-bold  text-2xl md:text-4xl text-slate-800
                    md:my-4 my-2 "
          >
            food at
            <span className=" text-primary">your door</span>
          </p>
        </div>
        <p
          className=" text-xs md:text-sm text-center md:text-left md:pr-32
          sm:px-44 px-10 md:px-0 my-6 text-gray-500"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui magni
          delectus tenetur autem, sint veritatis!
        </p>

        <div className=" flex gap-14 my-6">
          <button
            className=" flex items-center transition md:font-bold
                hover:bg-gray-700 text-xs  bg-primary  md:py-[9px] md:px-6 
                px-3 py-1 rounded text-white"
          >
            <span> Order now</span> <RiArrowRightSLine className=" mt-[2px]" />
          </button>

          <Link href="/foods">
            <button
              className="text-xs md:font-bold  text-primary
                ring-1 ring-primary md:py-[9px] md:px-6  px-3 py-1 rounded"
            >
              See all foods
            </button>
          </Link>
        </div>

        <div className="flex gap-3 md:gap-5 md:text-sm text-xs mt-5">
          <p className="  flex font-medium text-slate-800 gap-2 items-center">
            <span className=" bg-primary p-[6px] rounded-full">
              <RiCarLine className=" text-white" />
            </span>
            No shipping charge
          </p>
          <p className=" flex  font-medium text-slate-800 gap-2 items-center">
            <span className=" bg-primary p-[6px] rounded-full">
              <RiShieldCheckLine className=" text-white" />
            </span>
            100% secure checkout
          </p>
        </div>
      </div>

      <div className=" flex flex-col items-center">
        <Image
          src="/hero.webp"
          alt="hero banner"
          width="580"
          height="480"
          priority
          className="flex h-[280px] w-[280px] 
            lg:h-[450px] lg:w-[560px] relative object-fill"
        />
      </div>
    </div>
  );
};
export default Hero;
