import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import ScrollRestoration from './components/ScrollRestoration';
import HubPage from './pages/HubPage';
import DeckPage from './pages/DeckPage';
import VideoPage from './pages/VideoPage';
import LoginPage from './pages/LoginPage';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <AuthProvider>
        <HashRouter>
          <ScrollRestoration />
          <Routes>
            <Route path="/giris" element={<LoginPage />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <HubPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/sunum/:deckId"
              element={
                <ProtectedRoute>
                  <DeckPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/video/:videoId"
              element={
                <ProtectedRoute>
                  <VideoPage />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </HashRouter>
      </AuthProvider>
    </I18nextProvider>
  </StrictMode>
);
