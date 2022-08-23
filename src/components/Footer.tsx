import Image from "next/image";

const Footer = () => {
  return (
    <div className=" px-10 font-rockNroll flex flex-col gap-10 py-10 bg-red-100">
      {/* # 1 */}
      <div className="">
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
        <p className=" font-sans text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          pariatur accusamus
        </p>
      </div>

      {/* # 2 */}
      <div className=" flex flex-col gap-2">
        <h1 className=" font-samibold text-sm"> Delivery Time </h1>
        <h4 className=" text-xs font-sans font-medium">Sunday - Thursday</h4>
        <p className=" text-[10px] font-sans"> 10:00am - 11:00pm </p>

        <h4 className=" mt-5 text-xs font-sans font-medium">
          Friday - Saturday
        </h4>
        <p className=" text-[10px] font-sans"> Off day </p>
      </div>

      {/* # 3 */}
      <div>
        <div className=" flex flex-col gap-2">
          <h3 className=" font-samibold text-sm"> Contact </h3>
          <p className=" mb-5 font-sans text-[10px]">
            Location: Feni, Mohipal-3100, Bangladesh
          </p>

          <h3 className=" font-sans text-sm"> Phone: 0171234*6*8 </h3>

          <h3 className=" font-sans text-sm"> Email: example@gmail.com </h3>
        </div>
      </div>

      {/* # 4 */}
      <div>
        <div className=" flex flex-col gap-2">
          <h3 className=" font-samibold text-sm"> Contact </h3>
          <p className=" mb-5 font-sans ">Subscribe our newsletter</p>

          <input className=" bg-transparent" />
        </div>
      </div>
    </div>
  );
};
export default Footer;
