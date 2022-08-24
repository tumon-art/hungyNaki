import Image from "next/image";

const foods = () => {
  return (
    <section className="">
      <div className=" w-full h-40 md:h-60 z-[-1] overflow-hidden relative">
        <Image
          src="/allfoods.jpg"
          height="15"
          width="100"
          layout="fill"
          alt="allfoods"
          className=" relative object-cover"
        />
        <div
          className=" w-[100vw] h-[100vh]
          bg-blue-800 opacity-40 absolute"
        ></div>

        <span
          className=" flex items-center justify-center
           ml-14 md:ml-28 absolute top-0 bottom-0 my-auto font-rockNroll
         text-3xl font-extrabold md:text-4xl text-white"
        >
          All Food{" "}
        </span>
      </div>
    </section>
  );
};
export default foods;
