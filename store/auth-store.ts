import create from 'zustand';

export interface Session {
  id: string;
  userId: number;
}

// Zustand
type Store = {
  session: Session | null;
  login: (email: string, password: string) => void;
  logout: () => void;
};

const useStore = create<Store>((set) => ({
  session: null,
  login: async (email, password) => {
    const response = await fetch('/api/auth/sign-in', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    set((state) => ({
      ...state,
      session: data.session,
    }));
  },
  logout: () =>
    set((state) => ({
      ...state,
      session: null,
    })),
}));

export default useStore;
