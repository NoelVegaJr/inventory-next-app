import { useState, useEffect } from 'react';

export interface Session {
  id: string;
  userId: number;
}

export const useSession = () => {
  const [session, setSession] = useState<Session | null>();
  const [loading, setLoading] = useState<boolean>(true);

  async function destroy() {
    const response = await fetch('/api/auth/session', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json;' },
      body: JSON.stringify(session),
    });
    const data = await response.json();
    setSession(null);
  }

  async function login(email: string, password: string) {
    const response = await fetch('/api/auth/sign-in', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const session = await response.json();

    if (session != null) {
      setSession({
        id: session.id,
        userId: session.userId,
      });
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/auth/session');
      const data = await response.json();
      setSession(data.session);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (!session) {
    return { session: null, login: login, loadingSession: loading };
  } else {
    return {
      session: {
        id: session.id,
        userId: session.userId,
        destroy: destroy,
      },
      login: login,
      loading: loading,
    };
  }
};

export default useSession;
