import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { authed } = useAuth();
  const location = useLocation();

  if (!authed) {
    return <Navigate to="/giris" replace state={{ from: location.pathname }} />;
  }

  return children;
}
