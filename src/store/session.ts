import {create} from 'zustand';
import type {UserI} from '#/interfaces'

type SessionContext = {
    user: UserI | null,
    setUser: (user: UserI) => void,
}

export const useSession = create<SessionContext>((set) => ({
    user: null,
    setUser: (user: UserI) => set({user}),
}));


