import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/auth';

import type { ReactNode } from 'react';

type ProtectedRouteProps = {
  children: ReactNode;
};

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (user.id === 0) return <Navigate to="/login" replace />;

  return children;
}
