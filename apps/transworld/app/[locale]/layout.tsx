import '@fontsource/archivo/500.css';
import '@fontsource/archivo/600.css';
import '@fontsource/archivo/700.css';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MainShell from '@/components/MainShell';
import { getUi, isLocale, locales } from '@/lib/i18n';
import '../globals.css';
import '../legal.css';
import '../footer.css';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: {
    default: 'TransWorld SG Consulting Group',
    template: '%s | TransWorld SG Consulting Group',
  },
  description:
    'Quality-checked African agricultural products, delivered to Canadian businesses.',
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const ui = getUi(locale);

  return (
    <html lang={locale} className={GeistSans.variable}>
      <head>
        {/* Marks that scripts run, so scroll reveals never hide content without them. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a href="#main" className="skip">
          {ui.skip}
        </a>
        <Header locale={locale} ui={ui} />
        <MainShell locale={locale} notice={ui.notTranslated}>{children}</MainShell>
        <Footer locale={locale} ui={ui} />
      </body>
    </html>
  );
}
