import { useEffect, useState } from 'react';
import { useUserContext } from '../contexts/userContext';

export function useAuth() {
  const { user, setUser } = useUserContext();
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
          setUser({ id: 0 });
          return;
        }

        const data = await res.json();

        setUser({
          id: data.id,
          firstName: data.first_name,
          lastName: data.last_name,
          email: data.email,
        });
      } catch {
        setUser({ id: 0 });
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    checkAuth();

    return () => {
      isMounted = false;
    };
  }, [setUser]);

  return { user, loading };
}
