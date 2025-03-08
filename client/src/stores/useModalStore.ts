import { create } from "zustand";
import { ReactNode } from "react";

type ModalStore = {
  isOpen: boolean;
  content: ReactNode | null;
  actions: {
    setContent: (content: React.ReactNode) => void;
    toggle: (value: boolean) => void;
  };
};

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  content: null,
  actions: {
    setContent: (content) => set({ content }),
    toggle: (value) => set({ isOpen: value }),
  },
}));
