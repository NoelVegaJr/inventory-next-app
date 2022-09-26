import { useState, useEffect } from 'react';

export interface Session {
  id: string;
  userId: number;
}

export const useSession = () => {
  const [session, setSession] = useState<Session | null>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/auth/session');
      const data = await response.json();
      setSession(data.session);
      setLoading(false);
    };
    fetchData();
  }, []);

  const logout = async () => {
    const response = await fetch('/api/auth/session', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json;' },
      body: JSON.stringify(session),
    });
    const data = await response.json();
    setSession(null);
  };

  const login = async (email: string, password: string) => {
    const response = await fetch('/api/auth/sign-in', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    if (data.session != null) {
      setSession({
        id: data.session.id,
        userId: data.session.userId,
      });
      return true;
    } else {
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
