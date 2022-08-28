import Image from "next/image";
import useStore from "../store/mainStore";
import { RiCloseLine } from "react-icons/ri";

const CartItems = () => {
  const { cartItems, onRemove } = useStore();
  console.log(cartItems);
  return (
    <div className=" px-2 py-2 flex flex-col gap-y-4">
      {cartItems.map((product) => {
        return (
          <div key={product.id} className=" flex gap-2">
            <div>
              <Image src={product.image01} height="40" width="40" alt="img" />
            </div>

            <span className=" font-rockNroll text-[12px]">
              <p>{product.title}</p>
              <div
                className=" flex gap-1
              0 font-sans"
              >
                <span> {product.quantity}x </span>
                <span className=" text-red-600">
                  ${product.quantity * product.price}
                </span>
              </div>

              <div className=" bg-red-100 w-28">INC DEC</div>
            </span>

            <span
              onClick={() => onRemove(product)}
              className=" absolute right-10 text-white rounded-sm
             bg-red-500 self-center"
            >
              <RiCloseLine />
            </span>
          </div>
        );
      })}
    </div>
  );
};
export default CartItems;
