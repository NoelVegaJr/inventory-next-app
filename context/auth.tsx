import { createContext, useEffect, useState } from 'react';
const initialValues = { session: {}, setSession: () => {} };
export const AuthContext = createContext(initialValues as any);

const AuthProvider = ({ children }: any) => {
  const [session, setSession] = useState({});

  useEffect(() => {
    fetch('/api/auth/session')
      .then((response) => response.json())
      .then((data) => setSession(data));
  }, []);

  console.log(session);

  return (
    <AuthContext.Provider value={{ session: session, setSession: setSession }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
