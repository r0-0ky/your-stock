import { create } from 'zustand'
import { TgData } from './tg-data.types'

export const useTgDataStore = create((set) => ({
  tg: null,
  userId: null,
  setTg: (tg: any) => set(() => ({
    tg: tg,
    userId: tg?.initDataUnsafe?.user?.id
  })),
  removeTg: () => set({ tg: null }),
  removeUserId: () => set({ userId: null }),
}))