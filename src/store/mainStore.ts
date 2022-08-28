import create from "zustand";
import { Products } from "../components/Products";
import { toast } from "react-hot-toast";
import products from "../data/products";

interface Store {
  cart: boolean;
  setCart: () => void;
  sidebar: boolean;
  sidebarSwitch: (state: any) => void;
  showCart: boolean;
  setShowCart: (state: boolean) => void;
  cartItems: Products[];
  setCartItems: (product: Products, quantity: number) => any;
  totalPrice: number;
  totalQantity: number;
  onRemove: (id: string) => void;
  toggleQuantity: (id: string, value: "dec" | "inc") => void;
}

const useStore = create<Store>((set) => ({
  cart: false,
  setCart: () => set((state) => ({ cart: !state.cart })),
  sidebar: false,
  sidebarSwitch: () => set((state) => ({ sidebar: !state.sidebar })),
  showCart: false,
  setShowCart: () => set((state) => ({ showCart: !state.showCart })),
  totalPrice: 0,
  totalQantity: 0,
  cartItems: [],
  setCartItems: (product: Products, quantity: number) =>
    set((state) => {
      let isDuplicat = state.cartItems.find((e) => e.id == product.id);

      if (isDuplicat == undefined) {
        toast.success(`${quantity} ${product.title} added to your Cart`);
        return {
          totalQantity: state.totalQantity + quantity,
          totalPrice: state.totalPrice + product.price * quantity,
          cartItems: [...state.cartItems, product],
        };
      }

      if (isDuplicat) {
        const oldItems = state.cartItems.filter(
          (item) => item.id !== product.id
        );
        toast.success(`${quantity} ${product.title} added to your Cart`);
        return {
          totalQantity: state.totalQantity + quantity,
          totalPrice: state.totalPrice + product.price * quantity,
          cartItems: [
            ...oldItems,
            { ...isDuplicat, quantity: isDuplicat.quantity + quantity },
          ],
        };
      }

      return { cartItems: [...state.cartItems] };
    }),
  onRemove: (id) =>
    set((state) => {
      const foundProduct: Products | any = state.cartItems.find(
        (item) => item.id === id
      );
      const oldCart: Products[] = state.cartItems.filter(
        (item) => item.id !== id
      );
      toast.error(
        `${foundProduct.quantity} ${foundProduct.title} removed from your Cart!`
      );
      return {
        totalPrice:
          state.totalPrice - foundProduct.quantity * foundProduct.price,
        totalQantity: state.totalQantity - foundProduct.quantity,
        cartItems: oldCart,
      };
    }),
  toggleQuantity: (id, value) =>
    set((state) => {
      const foundProduct: Products | any = state.cartItems.find(
        (product) => product.id === id
      );

      const index = state.cartItems.findIndex((product) => product.id === id);

      const newCartItmes = state.cartItems;

      if (value === "inc") {
        newCartItmes.splice(index, 1, {
          ...foundProduct,
          quantity: foundProduct.quantity + 1,
        });

        return {
          totalPrice: state.totalPrice + foundProduct.price,
          totalQantity: state.totalQantity + 1,
          cartItems: newCartItmes,
        };
      }

      if (value === "dec") {
        if (foundProduct.quantity > 1) {
          newCartItmes.splice(index, 1, {
            ...foundProduct,
            quantity: foundProduct.quantity - 1,
          });

          return {
            totalPrice: state.totalPrice - foundProduct.price,
            totalQantity: state.totalQantity - 1,
            cartItems: newCartItmes,
          };
        }
      }
      return { cartItems: [...state.cartItems] };
    }),
}));

export default useStore;
