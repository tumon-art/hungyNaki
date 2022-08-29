import Image from "next/image";
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
            <span className="  text-red-600">HUNGRY? {` `}</span>
            Just wait
          </p>

          <p
            className="pt-1 font-bold  text-2xl md:text-4xl text-slate-800
                    md:my-4 my-2 "
          >
            food at {` `}
            <span className=" text-red-600">your door</span>
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
                hover:bg-gray-700 text-xs  bg-red-600  md:py-[9px] md:px-6 
                px-3 py-1 rounded text-white"
          >
            <span> Order now</span> <RiArrowRightSLine className=" mt-[2px]" />
          </button>

          <button
            className="text-xs md:font-bold  text-red-500
                ring-1 ring-red-500 md:py-[9px] md:px-6  px-3 py-1 rounded"
          >
            See all foods
          </button>
        </div>

        <div className="flex gap-3 md:gap-5 md:text-sm text-xs mt-5">
          <p className="  flex font-medium text-slate-800 gap-2 items-center">
            <span className=" bg-red-600 p-[6px] rounded-full">
              <RiCarLine className=" text-white" />
            </span>
            No shipping charge
          </p>
          <p className=" flex  font-medium text-slate-800 gap-2 items-center">
            <span className=" bg-red-600 p-[6px] rounded-full">
              <RiShieldCheckLine className=" text-white" />
            </span>
            100% secure checkout
          </p>
        </div>
      </div>

      <div className=" flex flex-col items-center">
        <div
          className=" flex h-[280px] w-[280px] 

                lg:h-[450px] lg:w-[450px] relative"
        >
          <Image
            src="/hero.webp"
            layout="fill"
            alt="hero banner"
            className=" object-fill"
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
