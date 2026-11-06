import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import SiteForm from '@/components/SiteForm';
import { company, images } from '@/lib/content';
import { getUi, isLocale, type Locale } from '@/lib/i18n';

const text: Record<Locale, { lead: string; steps: string[]; stepsTitle: string; formTitle: string }> = {
  en: {
    lead: 'Tell us the product, the quantity and the destination. We reply with a written quote.',
    stepsTitle: 'What happens next',
    steps: ['We read your request and check availability.', 'We confirm specifications, packaging and lead time, and arrange samples if you need them.', 'You receive a written quote with terms.'],
    formTitle: 'Your request',
  },
  fr: {
    lead: 'Indiquez le produit, la quantité et la destination. Nous répondons par un devis écrit.',
    stepsTitle: 'Ce qui se passe ensuite',
    steps: ['Nous lisons votre demande et vérifions la disponibilité.', 'Nous confirmons les spécifications, l’emballage et les délais, et organisons des échantillons au besoin.', 'Vous recevez un devis écrit avec les conditions.'],
    formTitle: 'Votre demande',
  },
  es: {
    lead: 'Indíquenos el producto, la cantidad y el destino. Respondemos con un presupuesto por escrito.',
    stepsTitle: 'Qué sucede después',
    steps: ['Leemos su solicitud y comprobamos la disponibilidad.', 'Confirmamos especificaciones, embalaje y plazos, y organizamos muestras si las necesita.', 'Recibe un presupuesto por escrito con las condiciones.'],
    formTitle: 'Su solicitud',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: getUi(locale).quote, description: text[locale].lead };
}

export default async function RequestAQuote({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const ui = getUi(locale);
  const t = text[locale];
  return (
    <>
      <PageHero image={images.trade} crumbs={[{ label: ui.home, href: `/${locale}` }, { label: ui.quote }]} eyebrow={ui.quote} title={ui.quote} lead={t.lead}>
        <a href={company.phoneHref} className="btn btn--light">{ui.call} {company.phoneDisplay}</a>
      </PageHero>
      <section className="section section--mist" aria-labelledby="next-title">
        <div className="wrap product-body">
          <div className="product-info">
            <h2 className="h-1" id="next-title">{t.stepsTitle}</h2>
            <ol>{t.steps.map((s) => <li key={s}>{s}</li>)}</ol>
          </div>
          <div className="quote-card">
            <h2 className="h-3">{t.formTitle}</h2>
            <SiteForm kind="trade" locale={locale} />
          </div>
        </div>
      </section>
    </>
  );
}
