import create from "zustand";

const useStore = create((set) => {
  sidebar: false;
  sidebarSwitch: () => set((state: any) => ({ sidebar: !state.sidebar }));
});

export default useStore;
