import create from "zustand";
import { Products } from "../components/Products";
import { toast } from "react-hot-toast";

interface Store {
  cart: boolean;
  setCart: () => void;
  sidebar: boolean;
  sidebarSwitch: (state: any) => void;
  showCart: boolean;
  setShowCart: (state: boolean) => void;
  cartItems: Products[];
  setCartItems: (state: Products, quantity: number) => any;
  totalPrice: number;
  totalQantity: number;
  onRemove: (state: Products) => void;
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
  onRemove: (product) =>
    set((state) => {
      const foundProduct: Products | any = state.cartItems.find(
        (item) => item.id === product.id
      );
      const oldCart: Products[] = state.cartItems.filter(
        (item) => item.id !== product.id
      );
      return {
        totalPrice:
          state.totalPrice - foundProduct.quantity * foundProduct.price,
        totalQantity: state.totalQantity - foundProduct.quantity,
        cartItems: oldCart,
      };
    }),
}));

export default useStore;
