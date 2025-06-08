import React from "react";
import { create } from "zustand";

const useCourt = create((set) => ({
  selectedCourt: null,
  setSelectedCourt: (selCourt) => set({ selectedCourt: selCourt }),
  messages: [],
  setMessages: (msgs) => set({ messages: msgs }),
  state: "judge",
  setState: (stat) => set({ state: stat }),
}));

export default useCourt;
