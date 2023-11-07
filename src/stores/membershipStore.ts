import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

interface DataState {
  isMembership: boolean
}

interface Actions {
  setIsMemberShip: (value: boolean) => void
}

const initialState: DataState = {
  isMembership: false,
}

export const useMemberShipStore = create(
  persist(
    immer<DataState & Actions>((set) => ({
      ...initialState,
      setIsMemberShip: (value) => {
        return set((draft) => {
          draft.isMembership = value
        })
      },
    })),
    {
      name: 'membership',
      storage: createJSONStorage(() => localStorage),
      // partialize: (state) => ({ collections: state.isMembership }), // whitelist
    },
  ),
)
