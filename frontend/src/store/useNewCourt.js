import { create } from "zustand";

const useNewCourt = create((set) => ({
  newCourt: null,
  setNewCourt: (nCourt) => set({ newCourt: nCourt }),
}));

export default useNewCourt;
