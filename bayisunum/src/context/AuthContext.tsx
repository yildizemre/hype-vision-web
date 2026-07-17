import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import { clearAuth, isAuthenticated, setAuthenticated, verifyLoginToken } from '../lib/auth';

type AuthContextValue = {
  authed: boolean;
  login: (token: string) => Promise<boolean>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authed, setAuthed] = useState(isAuthenticated);

  const login = useCallback(async (token: string) => {
    const ok = await verifyLoginToken(token);
    if (ok) {
      setAuthenticated();
      setAuthed(true);
    }
    return ok;
  }, []);

  const logout = useCallback(() => {
    clearAuth();
    setAuthed(false);
  }, []);

  const value = useMemo(() => ({ authed, login, logout }), [authed, login, logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth AuthProvider içinde kullanılmalı');
  return ctx;
}
