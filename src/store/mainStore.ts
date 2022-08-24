import create from "zustand";

interface store {
  sidebar: boolean;
  sidebarSwitch: (state: any) => void;
}

const useStore = create<store>((set) => ({
  sidebar: false,
  sidebarSwitch: () => set((state) => ({ sidebar: !state.sidebar })),
}));

export default useStore;
