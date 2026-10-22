import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { SUNUM_LOGIN } from '../paths';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { authed } = useAuth();
  const location = useLocation();

  if (!authed) {
    return <Navigate to={SUNUM_LOGIN} replace state={{ from: location.pathname }} />;
  }

  return children;
}
