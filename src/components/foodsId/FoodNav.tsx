import { Products } from "../../@types";
import useStore from "../../store/mainStore";

const FoodNav = ({ item }: { item: Products }) => {
  const { setCartItems } = useStore();
  return (
    <div className=" flex flex-col justify-center gap-2 md:gap-4 ml-10">
      <h1 className=" font-rockNroll text-xl  md:text-4xl"> {item.title} </h1>
      <p className=" text-red-600 text-md md:text-xl font-semibold">
        Price: <span className=" ml-2 md:text-2xl">${item.price}</span>
      </p>
      <p className=" font-medium  md:text-xl ">
        Category :
        <span className=" ml-3 bg-red-100 px-2 py-1 rounded font-medium">
          {item.category}
        </span>
      </p>

      <button
        onClick={() => setCartItems(item, 1)}
        className=" inline w-28 rounded text-sm md:text-md py-1 
      cursor-pointer hover:bg-red-800 mt-5 bg-red-600 text-white"
      >
        Add to Cart
      </button>
    </div>
  );
};
export default FoodNav;
