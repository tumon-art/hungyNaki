import Image from "next/image";
import products from "../data/products";
import useStore from "../store/mainStore";
import ShowItems from "./showItems/ShowItems";

const HotPizza = () => {
  const { setCartItems } = useStore();

  const filterd = products.filter((products) => {
    return products.category == "Pizza";
  });

  return (
    <div>
      <h2
        className=" font-rockNroll text-xl font-extrabold
             text-center my-8"
      >
        Hot Pizza
      </h2>

      <div
        className=" flex flex-wrap justify-center
             justify-items-center md:gap-10  gap-3 "
      >
        <ShowItems products={filterd.slice(0, 4)} />
      </div>
    </div>
  );
};
export default HotPizza;
