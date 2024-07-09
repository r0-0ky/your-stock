import { create } from 'zustand'

export const useUserStore = create((set) => ({
  isLoad: false,
  isFirstLogin: true,
  currentNavId: 1,
  setIsLoad: (load: boolean) => set({ isLoad: load }),
  setIsFirstLogin: (isFirstLogin: boolean) => set({ isFirstLogin: isFirstLogin }),
  setCurrentNavId: (currentNavId: number) => set({ currentNavId: currentNavId }),
}))