import Image from "next/image";
import useStore from "../store/mainStore";

const CartItems = () => {
  const { cartItems } = useStore();
  console.log(cartItems);
  return (
    <div className=" px-2 py-2 flex flex-col gap-y-4">
      {cartItems.map((product) => {
        return (
          <div key={product.id} className=" flex gap-2">
            <Image src={product.image01} height="40" width="40" alt="img" />
            <span className=" font-rockNroll text-[12px]">
              <p>{product.title}</p>
              <div className=" flex justify-around font-sans">
                <span> {product.quantity}x </span>
                <span className=" text-red-600">
                  ${product.quantity * product.price}
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
