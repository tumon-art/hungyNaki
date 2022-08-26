import create from "zustand";
import { Products } from "../components/Products";

interface Store {
  sidebar: boolean;
  sidebarSwitch: (state: any) => void;
  showCart: boolean;
  setShowCart: (state: boolean) => void;
  cartItems: Products[];
  setCartItems: (state: Products) => any;
}

const useStore = create<Store>((set) => ({
  sidebar: false,
  sidebarSwitch: () => set((state) => ({ sidebar: !state.sidebar })),
  showCart: false,
  setShowCart: () => set((state) => ({ showCart: !state.showCart })),
  cartItems: [],
  setCartItems: (payload: Products) =>
    set((state) => ({
      cartItems: [...state.cartItems, payload],
    })),
}));

export default useStore;
