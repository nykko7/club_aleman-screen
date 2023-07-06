import { create } from "zustand";

interface useModuleModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useModuleModal = create<useModuleModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set(() => ({ isOpen: true })),
  onClose: () => set(() => ({ isOpen: false })),
}));
