import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import ScrollRestoration from './components/ScrollRestoration';
import HubPage from './pages/HubPage';
import DeckPage from './pages/DeckPage';
import VideoPage from './pages/VideoPage';
import LoginPage from './pages/LoginPage';
import { SUNUM_HUB } from './paths';

/** /sunum/* — ana sitede gizli sunum merkezi (menüde yok) */
export default function SunumApp() {
  return (
    <AuthProvider>
      <ScrollRestoration />
      <Routes>
        <Route path="giris" element={<LoginPage />} />
        <Route
          index
          element={
            <ProtectedRoute>
              <HubPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="deck/:deckId"
          element={
            <ProtectedRoute>
              <DeckPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="video/:videoId"
          element={
            <ProtectedRoute>
              <VideoPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to={SUNUM_HUB} replace />} />
      </Routes>
    </AuthProvider>
  );
}
