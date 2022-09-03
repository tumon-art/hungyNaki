import Image from "next/image";
import useStore from "../store/mainStore";
import { RiCloseLine } from "react-icons/ri";

const CartItems = () => {
  const { cartItems, onRemove, toggleQuantity } = useStore();
  return (
    <div className="flex flex-col gap-y-4">
      {cartItems.map((product) => {
        return (
          <div key={product.id} className=" px-2 py-2  shadow-md  flex gap-2">
            <div>
              <Image src={product.image01} height="40" width="40" alt="img" />
            </div>

            <span className=" font-rockNroll text-[12px]">
              <p>{product.title}</p>
              <div
                className=" w-28 flex  justify-between my-2
              0 font-sans"
              >
                <span> {product.quantity}x </span>
                <span className="  text-primary">
                  ${product.quantity * product.price}
                </span>
              </div>

              {/* === INC / DEC */}
              <div
                className=" flex font-sans text-lg justify-between
               px-2 items-center   bg-red-50 w-44"
              >
                <span
                  className=" cursor-pointer"
                  onClick={() => {
                    toggleQuantity(product.id, "dec");
                  }}
                >
                  -
                </span>

                <span className=" text-sm">{product.quantity}</span>

                <span
                  className=" cursor-pointer"
                  onClick={() => {
                    toggleQuantity(product.id, "inc");
                  }}
                >
                  +
                </span>

                {/* ==== DELETE ITEM */}
                <span
                  onClick={() => onRemove(product.id)}
                  className="  cursor-pointer text-white rounded-sm
              bg-primary self-center"
                >
                  <RiCloseLine />
                </span>
              </div>
            </span>
          </div>
        );
      })}
    </div>
  );
};
export default CartItems;
