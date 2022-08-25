import Image, { StaticImageData } from "next/image";

export interface Products {
  products: {
    id: string;
    title: string;
    price: number;
    image01: StaticImageData;
    image02: StaticImageData;
    image03: StaticImageData;
    category: string;

    desc: string;
  }[];
}

const Products = ({ products }: Products) => {
  return (
    <div className=" flex justify-center items-center my-10 mx-10 gap-10 flex-wrap">
      {products.map((products) => {
        return (
          <div
            key={products.id}
            className=" relative w-40 h-48  sm:w-48 sm:h-48 
                       ring-1 ring-red-100 flex flex-col justify-center rounded-sm
                        hover:ring-2 hover:ring-red-500 transition"
          >
            <div className=" flex flex-col items-center ">
              <Image src={products.image01} height="70" width="70" alt="img" />
              <p className=" mt-6 text-xs">{products.title}</p>
            </div>
            <div className=" bottom-3 mt-8 text-center flex justify-between items-center mx-2">
              <span className=" text-md font-medium font-sans text-red-600">
                ${Math.floor(products.price)}
              </span>
              <button
                className=" font-sans text-white bg-red-600 px-3 py-[6px] 
                                  text-xs rounded cursor-move hover:bg-red-700"
              >
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Products;
