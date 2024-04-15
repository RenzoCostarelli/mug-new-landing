import { create } from "zustand";

const useStore = create((set) => ({
  sectionName: "",
  setSectionName: (name) => set(() => ({ sectionName: name })),
  isLoaded: false,
  setLoaded: (isLoaded) => set({ isLoaded }),
}));

export default useStore;
