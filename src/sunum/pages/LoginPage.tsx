import { useState, type FormEvent } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { KeyRound, Loader2, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { LOGO_FOOTER } from '../lib/assets';
import { SUNUM_HUB } from '../paths';

export default function LoginPage() {
  const { authed, login } = useAuth();
  const location = useLocation();
  const [token, setToken] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const from = (location.state as { from?: string } | null)?.from ?? SUNUM_HUB;

  if (authed) {
    return <Navigate to={from} replace />;
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    if (!token.trim()) {
      setError('Login token gerekli.');
      return;
    }
    setLoading(true);
    const ok = await login(token);
    setLoading(false);
    if (!ok) {
      setError('Geçersiz token. Lütfen tekrar deneyin.');
      setToken('');
    }
  };

  return (
    <div className="min-h-dvh min-h-screen hero-bg flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,202,220,0.12),transparent_60%)]" />

      <div className="relative w-full max-w-[min(100%,28rem)] sm:max-w-md">
        <div className="text-center mb-6 sm:mb-8">
          <img
            src={LOGO_FOOTER}
            alt="Hype Vision"
            className="h-9 sm:h-11 md:h-12 w-auto max-w-[min(100%,17.5rem)] mx-auto mb-5 sm:mb-6 object-contain"
            width={280}
            height={48}
          />
          <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-vision-light mb-2">
            Müşteri Sunum Merkezi
          </p>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">Giriş</h1>
          <p className="text-xs sm:text-sm text-white/65 mt-2 px-2">Devam etmek için login token girin.</p>
        </div>

        <form
          onSubmit={onSubmit}
          className="panel-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl shadow-vision/10 space-y-4 sm:space-y-5"
        >
          <div>
            <label htmlFor="login-token" className="block text-xs font-semibold text-gray-600 mb-2">
              Login token
            </label>
            <div className="relative">
              <KeyRound size={16} className="absolute left-3 sm:left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                id="login-token"
                type="password"
                autoComplete="off"
                autoFocus
                value={token}
                onChange={(e) => {
                  setToken(e.target.value);
                  if (error) setError('');
                }}
                placeholder="Token"
                className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 text-sm text-night placeholder:text-gray-400 focus:outline-none focus:border-vision focus:ring-2 focus:ring-vision/20 transition-shadow"
              />
            </div>
          </div>

          {error ? (
            <p className="flex items-start gap-2 text-xs sm:text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2.5">
              <AlertCircle size={16} className="shrink-0 mt-0.5" />
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 sm:py-3 rounded-xl bg-vision text-white text-sm font-semibold hover:bg-vision-dark disabled:opacity-60 transition-colors flex items-center justify-center gap-2"
          >
            {loading ? <Loader2 size={18} className="animate-spin" /> : null}
            Giriş yap
          </button>
        </form>

        <p className="text-center text-[9px] sm:text-[10px] text-white/40 mt-5 sm:mt-6 px-2 leading-relaxed">
          Yetkisiz erişim engellenir · Oturum tarayıcı kapanınca sona erer
        </p>
      </div>
    </div>
  );
}
