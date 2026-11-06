import '@fontsource-variable/sora';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { Footer, Header } from '@tw/ui';
import LangSwitch from '@/components/LangSwitch';
import Providers from '@/components/Providers';
import Wordmark from '@/components/Wordmark';
import { getDict } from '@/lib/content';
import { isLocale, locales } from '@/lib/i18n';
import { getNav, path } from '@/lib/nav';
import '../globals.css';

export const generateStaticParams = () => locales.map((locale) => ({ locale }));

const base = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000'));

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const d = getDict(locale);
  return {
    metadataBase: base,
    title: { default: d.meta.title, template: '%s | Transco SG Group' },
    description: d.meta.description,
    alternates: { canonical: `/${locale}`, languages: { fr: '/fr', en: '/en', 'x-default': '/fr' } },
    openGraph: { type: 'website', siteName: 'Transco SG Group', locale: locale === 'fr' ? 'fr_CM' : 'en_CM', alternateLocale: locale === 'fr' ? ['en_CM'] : ['fr_CM'], url: `/${locale}`, title: d.meta.title, description: d.meta.description },
    twitter: { card: 'summary_large_image', title: d.meta.title, description: d.meta.description },
  };
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDict(locale);
  const year = new Date().getFullYear();

  return (
    <html lang={locale} data-site="transco" className={GeistSans.variable}>
      <body>
        <Providers>
          <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">
            {d.ui.skip}
          </a>
          <Header
            logo={<Wordmark />}
            homeHref={path(locale)}
            homeLabel={d.ui.home}
            nav={getNav(locale)}
            quote={{ label: d.ui.quote, short: d.ui.quoteShort, href: path(locale, '/request-a-quote') }}
            lang={<LangSwitch locale={locale} label={d.ui.langLabel} />}
            menuLabel={d.ui.menu}
            closeLabel={d.ui.closeMenu}
            navLabel={d.ui.nav}
          />
          <main id="main">{children}</main>
          <Footer
            logo={<Wordmark light />}
            about={d.ui.footerAbout}
            columns={[
              { title: d.ui.footerNav, links: getNav(locale).map((n) => ({ label: n.label, href: n.href })) },
              { title: d.ui.footerLegal, links: [{ label: d.ui.quote, href: path(locale, '/request-a-quote') }, { label: d.privacy.title, href: path(locale, '/privacy') }] },
            ]}
            legal={[{ label: getDict(locale).privacy.title, href: path(locale, '/privacy') }]}
            contact={<p className="max-w-xl text-white/75">{d.ui.contactNote}</p>}
            copyright={`© ${year} Transco SG Group. ${d.ui.rights}`}
          />
        </Providers>
      </body>
    </html>
  );
}
