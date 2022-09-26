import { createContext } from 'react';
import { useRouter } from 'next/router';
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
  const router = useRouter();
  if (session.loading) {
  } else {
    if (!session.session) {
      if (router.pathname.includes('/profile') && !session.session) {
        router.push('/sign-in');
        return (
          <div className='h-full grid place-content-center'>
            <p>Loading</p>
          </div>
        );
      }
    } else {
      if (router.pathname.includes('/sign-in')) {
        router.push('/profile');
      }
    }
  }
  return (
    <SessionContext.Provider value={session as Session}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContextProvider;
