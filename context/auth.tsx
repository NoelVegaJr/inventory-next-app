import { createContext, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { captureRejectionSymbol } from 'stream';
const initialValues = { auth: false };
export const AuthContext = createContext(initialValues);

const AuthProvider = ({ children }: any) => {
  const {
    isLoading,
    error,
    data: auth,
  } = useQuery(['auth'], async () => {
    const response = await fetch('/api/auth/session');
    const data = await response.json();
    return data;
  });

  if (isLoading) {
    console.log('loading auth');
    return <h1>loading</h1>;
  } else {
    console.log(auth);
  }

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
