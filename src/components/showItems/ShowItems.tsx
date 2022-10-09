import Image from "next/image";
import Link from "next/link";
import { Products } from "../../@types";
import useStore from "../../store/mainStore";

const ShowItems = ({
  products,
  flex,
  left,
}: {
  products: Products[];
  flex?: boolean;
  left?: boolean;
}) => {
  const setCartItems = useStore((state) => state.setCartItems);

  return (
    <div
      className={
        flex
          ? `flex ${
              left === undefined && "justify-center"
            } items-center my-10 gap-3 md:gap-10 flex-wrap`
          : `grid lg:grid-cols-4 font-medium md:grid-cols-3
           grid-cols-2 justify-items-center md:gap-8 lg:gap-14 gap-3 
          justify-self-center`
      }
    >
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className=" relative w-40 h-48  sm:w-48 sm:h-48 
        ring-1  ring-dim flex flex-col justify-center rounded-sm
        hover:ring-2 hover:ring-primary transition"
          >
            <Link href={`/foods/${product.id}`}>
              <a className=" flex flex-col items-center ">
                <Image src={product.image01} height="70" width="70" alt="img" />
                <p className=" mt-6 text-xs">{product.title}</p>
              </a>
            </Link>

            <div className=" bottom-3 mt-8 text-center flex justify-between items-center mx-2">
              <span className=" text-md font-medium font-sans text-primary">
                ${Math.floor(product.price)}
              </span>
              <button
                onClick={() => setCartItems(product, 1)}
                className=" font-sans text-white  bg-primary px-3 py-[6px] 
            text-xs rounded cursor-pointer hover:bg-primaryDim"
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
export default ShowItems;
