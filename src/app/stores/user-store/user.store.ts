import { create } from 'zustand'

export const useUserStore = create((set) => ({
  isLoad: false,
  setIsLoad: (load: boolean) => set({ isLoad: load }),
}))