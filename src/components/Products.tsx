import Image, { StaticImageData } from "next/image";
import useStore from "../store/mainStore";

export interface Products {
  id: string;
  title: string;
  price: number;
  image01: StaticImageData;
  image02: StaticImageData;
  image03: StaticImageData;
  category: string;
  quantity: number;
  desc: string;
}

const Products = ({ products }: { products: Products[] }) => {
  const { setCartItems } = useStore();

  return (
    <div className=" flex justify-center items-center my-10 gap-3 md:gap-10 flex-wrap">
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className=" relative w-40 h-48  sm:w-48 sm:h-48 
            ring-1 ring-red-100 flex flex-col justify-center rounded-sm
            hover:ring-2 hover:ring-red-500 transition"
          >
            <div className=" flex flex-col items-center ">
              <Image src={product.image01} height="70" width="70" alt="img" />
              <p className=" mt-6 text-xs">{product.title}</p>
            </div>
            <div className=" bottom-3 mt-8 text-center flex justify-between items-center mx-2">
              <span className=" text-md font-medium font-sans text-red-600">
                ${Math.floor(product.price)}
              </span>
              <button
                onClick={() => setCartItems(product, 1)}
                className=" font-sans text-white bg-red-600 px-3 py-[6px] 
                text-xs rounded cursor-pointer hover:bg-red-700"
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
