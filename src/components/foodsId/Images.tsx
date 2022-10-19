import Image, { StaticImageData } from "next/future/image";
import { useState } from "react";

interface Images {
  images: {
    image01: StaticImageData;
    image02: StaticImageData;
    image03: StaticImageData;
  };
}

const Images = ({ images }: Images) => {
  const [order, setorder] = useState<StaticImageData>(images.image01);
  return (
    <div>
      <div className=" flex flex-col md:flex-row  items-center justify-center">
        {/* === MAIN IMAGE */}
        <Image
          src={order}
          height="224"
          width="224"
          alt="food"
          className="h-56 md:h-96 md:w-96 w-56 relative  object-fill"
        />
        {/* === OTHER IMAGES 3 */}
        <span className=" flex md:flex-col md:order-[-1] gap-5 px-10 py-2 my-3">
          <span
            onClick={() => setorder(images.image01)}
            className=" cursor-pointer md:h-20 md:w-20 h-12 w-12 
            rounded-full  ring-red-600  relative "
          >
            <Image
              src={images.image01}
              layout="fill"
              alt="food"
              className=" object-fill"
            />
          </span>
          <span
            onClick={() => setorder(images.image02)}
            className=" 
            cursor-pointer md:h-20 md:w-20 h-12 w-12 
            rounded-full  ring-red-600  relative "
          >
            <Image
              src={images.image02}
              layout="fill"
              alt="food"
              className="object-fill"
            />
          </span>
          <span
            onClick={() => setorder(images.image03)}
            className="
            cursor-pointer md:h-20 md:w-20 h-12 w-12 
            rounded-full  ring-red-600 relative "
          >
            <Image
              src={images.image03}
              layout="fill"
              alt="food"
              className="object-fill"
            />
          </span>
        </span>
      </div>
    </div>
  );
};
export default Images;
