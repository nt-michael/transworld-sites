'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { isTranslated, type Locale } from '@/lib/i18n';

/**
 * The <main> element. A page that is not translated yet is marked lang="en"
 * and gets a short notice in the visitor's language.
 */
export default function MainShell({ locale, notice, children }: { locale: Locale; notice: string; children: ReactNode }) {
  const pathname = usePathname() ?? '';
  const path = pathname.split('/').slice(2).join('/');
  const done = locale === 'en' || isTranslated(path);
  return (
    <main id="main" lang={done ? undefined : 'en'}>
      {!done && (
        <p className="notice" lang={locale}>
          <span className="wrap">{notice}</span>
        </p>
      )}
      {children}
    </main>
  );
}
