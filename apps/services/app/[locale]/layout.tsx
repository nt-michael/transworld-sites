import '@fontsource-variable/sora';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { Footer, Header } from '@tw/ui';
import LangSwitch from '@/components/LangSwitch';
import Logo from '@/components/Logo';
import LogoLight from '@/components/LogoLight';
import Providers from '@/components/Providers';
import { isLocale, locales } from '@/lib/i18n';
import { getNav } from '@/lib/nav';
import { contact, getDict, path } from '@/lib/site';
import '../globals.css';

export const generateStaticParams = () => locales.map((locale) => ({ locale }));

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const d = getDict(locale);
  return { title: { default: d.meta.title, template: `%s | TransWorld SG` }, description: d.meta.description, alternates: { languages: { en: '/en', fr: '/fr' } } };
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDict(locale);
  const nav = getNav(locale);
  return (
    <html lang={locale} data-site="services" className={GeistSans.variable}>
      <body>
        <Providers>
          <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">{d.ui.skip}</a>
          <Header
            logo={<Logo />}
            homeHref={path(locale)}
            homeLabel={d.ui.home}
            nav={nav}
            quote={{ label: d.ui.quote, short: d.ui.quoteShort, href: path(locale, '/request-a-quote') }}
            phone={{ label: contact.phone, href: contact.phoneHref }}
            lang={<LangSwitch locale={locale} label={d.ui.langLabel} />}
            menuLabel={d.ui.menu}
            closeLabel={d.ui.closeMenu}
            navLabel={d.ui.nav}
          />
          <main id="main">{children}</main>
          <Footer
            logo={<LogoLight />}
            about={d.ui.footerAbout}
            columns={[
              { title: d.ui.footerNav, links: nav.map((n) => ({ label: n.label, href: n.href })) },
              { title: d.ui.footerLegal, links: [{ label: d.ui.quote, href: path(locale, '/request-a-quote') }, { label: d.privacy.title, href: path(locale, '/privacy') }] },
            ]}
            legal={[{ label: d.privacy.title, href: path(locale, '/privacy') }]}
            contact={
              <p className="max-w-xl text-white/75">
                {contact.address} · <a className="underline" href={contact.phoneHref}>{contact.phone}</a> · <a className="underline" href={`mailto:${contact.email}`}>{contact.email}</a>
              </p>
            }
            copyright={`© ${new Date().getFullYear()} TransWorld SG Consulting Group. ${d.ui.rights}`}
          />
        </Providers>
      </body>
    </html>
  );
}
