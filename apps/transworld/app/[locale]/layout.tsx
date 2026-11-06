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

const seo = {
  en: { title: 'TransWorld SG Consulting | Cocoa and African produce for Canadian businesses', og: 'Quality-checked African produce for Canadian businesses', description: 'Cocoa beans, cocoa butter, coffee and shea from African producers, checked by independent third-party inspection and delivered to Canadian businesses. Request a quote or samples.', locale: 'en_CA' },
  fr: { title: 'TransWorld SG Consulting | Cacao et produits africains pour entreprises canadiennes', og: 'Des produits africains contrôlés pour les entreprises canadiennes', description: 'Fèves de cacao, beurre de cacao, café et karité de producteurs africains, contrôlés par une inspection indépendante et livrés aux entreprises canadiennes. Demandez un devis ou des échantillons.', locale: 'fr_CA' },
  es: { title: 'TransWorld SG Consulting | Cacao y productos africanos para empresas canadienses', og: 'Productos africanos controlados para empresas canadienses', description: 'Granos de cacao, manteca de cacao, café y karité de productores africanos, con inspección independiente de terceros, entregados a empresas canadienses. Solicite un presupuesto o muestras.', locale: 'es_CA' },
} as const;


const base = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000'));

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = seo[locale];
  return {
    metadataBase: base,
    title: { default: t.title, template: '%s | TransWorld SG Consulting' },
    description: t.description,
    alternates: { canonical: `/${locale}`, languages: { en: '/en', fr: '/fr', es: '/es', 'x-default': '/en' } },
    openGraph: { type: 'website', siteName: 'TransWorld SG Consulting Group', locale: t.locale, alternateLocale: Object.values(seo).map((x) => x.locale).filter((l) => l !== t.locale), url: `/${locale}`, title: t.title, description: t.description },
    twitter: { card: 'summary_large_image', title: t.title, description: t.description },
  };
}

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
