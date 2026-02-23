import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Factory, Eye, Activity, Database, Cpu, Building, Users, BookOpen, Headphones, Utensils, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  const handleMouseEnter = (itemName: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setActiveDropdown(null), 120);
    setDropdownTimeout(timeout);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeout) clearTimeout(dropdownTimeout);
    };
  }, [dropdownTimeout]);

  const navItems = [
    { label: language === 'tr' ? 'Ana Sayfa' : 'Home', href: '/', dropdown: false },
    {
      label: language === 'tr' ? 'Hakkımızda' : 'About Us',
      href: '/about',
      dropdown: true,
      links: [
        { label: language === 'tr' ? 'Hakkımızda' : 'About Us', href: '/about' },
        { label: language === 'tr' ? 'İletişim' : 'Contact', href: '/contact' },
      ],
    },
    {
      label: language === 'tr' ? 'Ürün & Çözümler' : 'Product & Solutions',
      dropdown: true,
      links: [
        { label: 'MES Üretim Kontrol', href: '/production-control', icon: Factory },
        { label: 'MES Kalite Kontrol', href: '/quality-ai', icon: Eye },
        { label: 'MES Süreç İzleme', href: '/process-monitoring', icon: Activity },
        { label: 'ERP Entegrasyonu', href: '/erp-integration', icon: Database },
        { label: language === 'tr' ? 'Küçük İşletme' : 'Small Business', href: '/small-business', icon: Building },
        { label: language === 'tr' ? 'Orta Ölçekli' : 'Medium Business', href: '/medium-business', icon: Factory },
        { label: language === 'tr' ? 'Kurumsal' : 'Enterprise', href: '/enterprise', icon: Users },
        { label: language === 'tr' ? 'Özel Çözümler' : 'Custom Solutions', href: '/custom-solutions', icon: Cpu },
      ],
    },
    {
      label: language === 'tr' ? 'Sektörler' : 'Industries',
      dropdown: true,
      links: [
        { label: t('sector.electronics'), href: '/electronics', icon: Cpu },
        { label: t('sector.automotive'), href: '/automotive', icon: Cpu },
        { label: t('sector.machinery'), href: '/machinery', icon: Factory },
        { label: t('sector.food'), href: '/food-beverage', icon: Utensils },
        { label: t('sector.manufacturing'), href: '/manufacturing', icon: Factory },
        { label: t('sector.pharmaceutical'), href: '/pharmaceutical', icon: Heart },
      ],
    },
    {
      label: language === 'tr' ? 'Kaynaklar' : 'Resources',
      dropdown: true,
      links: [
        { label: 'Blog', href: '/blog', icon: BookOpen },
        { label: language === 'tr' ? 'Destek' : 'Support', href: '/support', icon: Headphones },
      ],
    },
    { label: language === 'tr' ? 'İletişim' : 'Contact', href: '/contact', dropdown: false },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center shrink-0 transition-opacity hover:opacity-90"
            onClick={() => { setIsMenuOpen(false); setActiveDropdown(null); }}
          >
            <img src="/images/hypevisionlogo.png" alt="Hype Vision" className="h-8 lg:h-9 w-auto" />
          </Link>

          {/* Center: desktop nav + language switcher */}
          <div className="flex items-center gap-3">
            {/* Desktop nav — pill container */}
            <nav className="hidden lg:flex items-center gap-1 p-1.5 rounded-2xl bg-slate-100/80">
              {navItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.dropdown && item.links ? (
                    <div onMouseEnter={() => handleMouseEnter(item.label)} onMouseLeave={handleMouseLeave}>
                      <button
                        className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
                          item.links.some((l) => isActive(l.href))
                            ? 'text-indigo-600 bg-white shadow-sm'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                        }`}
                      >
                        {item.label}
                        <ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === item.label && (
                        <div className="absolute top-full left-0 mt-2 min-w-[240px] py-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100">
                          <div className="absolute -top-1.5 left-5 w-3 h-3 bg-white border-l border-t border-slate-100 rotate-45" />
                          {item.links.map((link) => (
                            <Link
                              key={link.href + link.label}
                              to={link.href}
                              className={`flex items-center gap-3 px-4 py-2.5 text-sm rounded-xl mx-2 transition-all duration-150 ${
                                isActive(link.href)
                                  ? 'text-indigo-600 bg-indigo-50 font-medium'
                                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                              }`}
                              onClick={() => setActiveDropdown(null)}
                            >
                              {link.icon && <link.icon className="h-4 w-4 shrink-0 text-slate-400" />}
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href || '/'}
                      className={`block px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
                        isActive(item.href || '/')
                          ? 'text-indigo-600 bg-white shadow-sm'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Language switcher */}
            <div className="flex items-center gap-1 rounded-2xl border border-slate-200 bg-white/80 px-1 py-0.5">
              <button
                type="button"
                onClick={() => setLanguage('tr')}
                className={`px-2.5 py-1 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  language === 'tr'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                TR
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  language === 'en'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2.5 text-slate-600 hover:text-indigo-600 hover:bg-slate-100 rounded-xl transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 bg-slate-50/90 backdrop-blur-sm border-t border-slate-100 rounded-b-2xl">
            <div className="flex flex-col gap-1 p-2 rounded-2xl bg-white/60">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown && item.links ? (
                    <>
                      <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-500">{item.label}</div>
                      {item.links.map((link) => (
                        <Link
                          key={link.href + link.label}
                          to={link.href}
                          className={`flex items-center gap-3 pl-5 pr-4 py-3 text-sm rounded-xl transition-all duration-150 ${
                            isActive(link.href) ? 'text-indigo-600 bg-indigo-50 font-medium' : 'text-slate-600 hover:bg-slate-100 active:bg-slate-200'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.icon && <link.icon className="h-4 w-4 text-slate-400 shrink-0" />}
                          {link.label}
                        </Link>
                      ))}
                    </>
                  ) : (
                    <Link
                      to={item.href || '/'}
                      className={`block px-4 py-3 text-sm font-medium rounded-xl transition-all duration-150 ${
                        isActive(item.href || '/') ? 'text-indigo-600 bg-indigo-50' : 'text-slate-700 hover:bg-slate-100 active:bg-slate-200'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
