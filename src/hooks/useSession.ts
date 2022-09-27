import { useState, useEffect } from 'react';

export interface Session {
  id: string;
  userId: number;
}

export const useSession = () => {
  const [session, setSession] = useState<Session | null>();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    console.log('using session');
    const fetchData = async () => {
      const response = await fetch('/api/auth/session');
      const session = await response.json();

      if (response.ok) {
        setSession(session);
      } else {
        setSession(null);
      }

      setLoading(false);
    };
    fetchData();
  }, []);

  const logout = async () => {
    console.log(session);
    await fetch('/api/auth/session', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json;' },
      body: JSON.stringify(session),
    });
    setSession(null);
  };

  const login = async (email: string, password: string) => {
    const response = await fetch('/api/auth/sign-in', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const session = (await response.json()) as Session;

    if (response.ok) {
      console.log('logging', session);
      setSession((prev) => {
        return {
          id: session.id,
          userId: session.userId,
        };
      });
      return true;
    } else {
      console.log('null session');
      setSession(null);
      return false;
    }
  };

  return {
    session,
    logout,
    login,
    loading,
  };
};

export default useSession;
