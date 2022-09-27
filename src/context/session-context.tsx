import { createContext } from 'react';
import useSession from '../hooks/useSession';

interface Session {
  session: { id: string; userId: number };
  logout: () => void;
  login: (email: string, password: string) => Promise<boolean>;
  loading: boolean;
}
const initialValues = {
  session: {
    id: '',
    userId: 0,
  },
  logout: () => {},
  login: (email: string, password: string) => {},
  loading: false,
};
export const SessionContext = createContext(initialValues as Session);

export const SessionContextProvider = ({ children }: { children: any }) => {
  const session = useSession();
  console.log('refreshing context');
  return (
    <SessionContext.Provider value={session as Session}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContextProvider;
