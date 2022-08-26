import Image from "next/image";
import {
  RiFacebookLine,
  RiGithubLine,
  RiSendPlaneLine,
  RiTelegramLine,
  RiYoutubeLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <section id="footer" className="px-4 md:px-20 py-10  bg-red-100">
      <div
        className="  font-sans flex-wrap flex md:flex-row
       justify-center flex-col gap-10 "
      >
        {/* # 1 */}
        <div className=" w-72">
          <span
            className=" block h-14 w-14
         relative lg:h-20 lg:w-20"
          >
            <Image
              src="/res-logo.png"
              layout="fill"
              alt="logo"
              className=" object-contain"
            />
          </span>
          <span className=" my-2 sm:text-md text-base font-rockNroll block">
            HungryNaki
          </span>
          <p className=" font-sans text-slate-800 tracking-wide text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            pariatur accusamus
          </p>
        </div>

        {/* # 2 */}
        <div className=" flex flex-col gap-2">
          <h1 className=" font-medium text-sm md:text-base"> Delivery Time </h1>
          <h4 className=" text-xs font-sans font-medium">Sunday - Thursday</h4>
          <p className=" text-[10px] font-sans"> 10:00am - 11:00pm </p>

          <h4 className=" mt-5 text-xs font-sans font-medium">
            Friday - Saturday
          </h4>
          <p className=" text-[10px] font-sans"> Off day </p>
        </div>

        {/* # 3 */}
        <div className="">
          <div className=" flex flex-col gap-2">
            <h3 className=" font-medium text-sm md:text-base"> Contact </h3>
            <p className=" mb-5 font-sans text-[10px]">
              Location: Feni, Mohipal-3100, Bangladesh
            </p>

            <h3 className=" font-sans text-sm"> Phone: 0171234*6*8 </h3>

            <h3 className=" font-sans text-sm"> Email: example@gmail.com </h3>
          </div>
        </div>

        {/* # 4 */}
        <div className="">
          <div className=" flex flex-col items-start gap-2">
            <h3 className=" font-medium text-sm md:text-base"> Contact </h3>
            <p className=" mb-5 font-sans ">Subscribe our newsletter</p>

            <div className="flex flex-col items-center">
              <div className="  py-1 px-2  border-red-600 rounded-m border-b-4">
                <input
                  className=" text-xs placeholder:text-center
                w-48 font-sans outline-none bg-transparent"
                  placeholder="Enter Your Email"
                />
              </div>
              <span
                className=" right-2 flex w-14 h-8 top-0 bottom-0 my-auto py-1 px-1 
                 ml-2 hover:bg-rose-700 cursor-pointer
            bg-red-600 text-white justify-center items-center"
              >
                <RiSendPlaneLine className=" text-center" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-10 sm:flex justify-between">
        <p className=" font-sans text-xs text-red-600">
          Copyright - 2022, website made by 2M0N. All Rights Reserved
        </p>
        <div className=" flex gap-3 mt-5 sm:mt-0">
          <span> Follow : </span>
          <span className=" rounded-full bg-red-500 p-1 text-white">
            <RiFacebookLine />
          </span>
          <span className=" rounded-full bg-red-500 p-1  text-white">
            <RiGithubLine />
          </span>
          <span className=" rounded-full bg-red-500 p-1  text-white">
            <RiYoutubeLine />
          </span>
          <span className=" rounded-full bg-red-500 p-1  text-white ">
            <RiTelegramLine />
          </span>
        </div>
      </div>
    </section>
  );
};
export default Footer;
