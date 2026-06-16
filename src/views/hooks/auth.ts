import { useEffect, useState } from 'react';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const checkAuth = async () => {
      try {
        const res = await fetch('/api/auth/me', {
          credentials: 'include',
        });

        if (!isMounted) return;

        if (res.status === 401) {
          setUser(null);
          return;
        }

        const data = await res.json();
        setUser(data);
      } catch {
        setUser(null);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    checkAuth();

    return () => {
      isMounted = false;
    };
  }, []);

  return { user, loading };
}
