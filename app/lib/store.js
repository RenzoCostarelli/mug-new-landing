import create from 'zustand';

const useStore = create((set) => ({
  sectionName: '',
  setSectionName: (name) => set(() => ({ sectionName: name }))
}));

export default useStore;