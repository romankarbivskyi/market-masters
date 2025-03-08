import { Pair } from "@/types";
import {create} from "zustand";

interface PairState {
  pair: Pair | null;
  setPair: (pair: Pair| null) => void;
}

export const usePairStore = create<PairState>()((set) => ({
  pair: null,
  setPair: (pair) => set({ pair }),
}));