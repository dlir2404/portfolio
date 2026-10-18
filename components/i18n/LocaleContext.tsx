'use client';

import React, { createContext, useContext, useMemo, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Locale, Translations, getTranslations } from '@/lib/i18n';

interface LocaleContextValue {
  locale: Locale;
  t: Translations;
  toggleLocale: () => void;
  getLocalizedPath: (targetLocale: Locale, path?: string) => string;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  locale: initialLocale,
  children,
}: {
  locale?: Locale;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  // Determine locale from pathname if not explicitly passed
  const activeLocale: Locale = useMemo(() => {
    if (initialLocale) return initialLocale;
    if (pathname && (pathname === '/vi' || pathname.startsWith('/vi/'))) {
      return 'vi';
    }
    return 'en';
  }, [initialLocale, pathname]);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = activeLocale;
    }
  }, [activeLocale]);

  const t = useMemo(() => getTranslations(activeLocale), [activeLocale]);

  const getLocalizedPath = (targetLocale: Locale, customPath?: string): string => {
    const currentPath = customPath ?? (pathname || '/');
    const isCurrentlyVi = currentPath === '/vi' || currentPath.startsWith('/vi/');

    if (targetLocale === 'vi') {
      if (isCurrentlyVi) return currentPath;
      if (currentPath === '/' || currentPath === '') return '/vi/';
      return `/vi${currentPath.startsWith('/') ? currentPath : `/${currentPath}`}`;
    } else {
      if (!isCurrentlyVi) return currentPath;
      const stripped = currentPath.replace(/^\/vi(\/|$)/, '/');
      return stripped || '/';
    }
  };

  const toggleLocale = () => {
    const nextLocale: Locale = activeLocale === 'en' ? 'vi' : 'en';
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    const nextPath = getLocalizedPath(nextLocale) + hash;
    router.push(nextPath);
  };

  return (
    <LocaleContext.Provider
      value={{
        locale: activeLocale,
        t,
        toggleLocale,
        getLocalizedPath,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    return {
      locale: 'en' as Locale,
      t: getTranslations('en'),
      toggleLocale: () => {},
      getLocalizedPath: (loc: Locale) => (loc === 'vi' ? '/vi/' : '/'),
    };
  }
  return context;
}
