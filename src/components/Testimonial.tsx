import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const list = [
  {
    text: `"Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Perferendis atque, quam minus totam maiores laborum!
         Impedit consectetur illum aliquid odit. 
         Odit dolore ipsum quod debitis nostrum 
         necessitatibus quis dolorem quas!"`,
    img: "/ava-1.jpg",
    name: "Jhon Doe",
  },
  {
    text: `"Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Perferendis atque, quam minus totam maiores laborum!
         Impedit consectetur illum aliquid odit. 
         Odit dolore ipsum quod debitis nostrum 
         necessitatibus quis dolorem quas!"`,
    img: "/ava-2.jpg",
    name: "Mitchell Marsh",
  },
  {
    text: `"Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Perferendis atque, quam minus totam maiores laborum!
         Impedit consectetur illum aliquid odit. 
         Odit dolore ipsum quod debitis nostrum 
         necessitatibus quis dolorem quas!"`,
    img: "/ava-3.jpg",
    name: "Steven Crock",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <section
      className=" md:grid md:mx-20 my-20 justify-center
         md:grid-cols-2"
    >
      <div className=" my-10 px-3 font-rockNroll">
        <h3 className=" text-1xl md:text-2xl md:font-extrabold text-red-600">
          Testimonial
        </h3>
        <h1 className=" md:text-3xl md:font-extrabold my-4 text-slate-800 font-medium text-2xl">
          What our {` `}
          <span className=" text-red-600">customers</span>
          {` `} are saying
        </h1>

        <p className=" tracking-wide text-gray-500 my-7 text-xs font-sans">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          quasi qui minus quos sit perspiciatis inventore quis provident placeat
          fugiat!
        </p>

        <Slider {...settings}>
          {list.map((e, i) => {
            return (
              <div key={i}>
                <p className=" text-gray-500 mb-5 tracking-wider leading-6 text-xs font-sans">
                  {e.text}
                </p>
                <span className=" flex items-center gap-6">
                  <Image
                    src={e.img}
                    height="40"
                    width="40"
                    alt="img"
                    quality={100}
                    className=" rounded-md py-4 object-cover"
                  />

                  <p className=" text-sm">{e.name}</p>
                </span>
              </div>
            );
          })}
        </Slider>
      </div>

      <div className=" flex justify-center">
        <Image
          src="/network.png"
          width="460"
          height="460"
          alt="img"
          className=" object-contain"
        />
      </div>
    </section>
  );
};
export default Testimonial;
