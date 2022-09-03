import Image from "next/image";

const service = [
  {
    img: "service-01.png",
    name: "Quick Delivery",
    desc: "Lorem  ipsum dolor, sit amet consectetur adipisicing elit. \nMinus, doloremque.",
  },
  {
    img: "service-02.png",
    name: "Super Dine In",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. \nMinus, doloremque.",
  },
  {
    img: "service-03.png",
    name: "Easy Pick Up",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. \nMinus, doloremque.",
  },
];

const Desc2 = () => {
  return (
    <section className=" flex md:my-28 my-14 flex-col justify-center">
      <div className=" font-rockNroll">
        <p
          className="  text-primary text-center font-medium text-lg 
                md:text-xl "
        >
          What we serve
        </p>
        <p
          className=" mt-5 text-slate-700 text-2xl font-extrabold
                 md:text-4xl text-center"
        >
          Just sit back at home
        </p>
        <p
          className="text-slate-700 text-2xl font-extrabold 
                 md:text-4xl text-center"
        >
          we will {` `}
          <span className="  text-primary">take care</span>
        </p>

        <p
          className=" md:mt-10  mt-6 md:text-sm text-xs text-center font-sans
                 text-zinc-500"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
          officiis?
          <br></br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          eius.
        </p>
      </div>

      <div className=" flex flex-col gap-14 md:flex-row justify-center my-10 md:my-16">
        {service.map((e, i) => {
          return (
            <div key={i} className="flex flex-col items-center">
              <Image
                src={`/${e.img}`}
                height="80px"
                width="80"
                alt="icon"
                className=" object-contain"
              />

              <h3 className=" text-lg font-bold my-4 text-center">{e.name}</h3>
              <p
                className="  md:text-sm text-xs text-center 
                            py-3 w-2/3 break-words font-sans
                 text-zinc-500"
              >
                {e.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Desc2;
