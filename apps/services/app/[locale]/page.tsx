import { QuoteBand, Section, SectionHead, Steps } from '@tw/ui';
import { notFound } from 'next/navigation';
import ServiceTiles from '@/components/ServiceTiles';
import FadeHero from '@/components/FadeHero';
import { isLocale } from '@/lib/i18n';
import { contact, getDict, getProperty, images, path } from '@/lib/site';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDict(locale);
  const q = path(locale, '/request-a-quote');
  return (
    <>
      <FadeHero
        eyebrow={d.home.eyebrow} title={d.home.title} lead={d.home.lead} chips={d.home.chips}
        primary={{ label: d.ui.quote, href: q }} secondary={{ label: `${d.ui.call} ${contact.phone}`, href: contact.phoneHref }}
        images={[images.mop, images.warehouse, images.cleanDesk, images.ladder, images.city, images.logistics]}
      />
      <Section labelledBy="services">
        <SectionHead id="services" title={d.home.servicesTitle} intro={d.home.servicesIntro} />
        <ServiceTiles cta={d.ui.viewService} items={getProperty(locale).map((s) => ({ title: s.name, text: s.blurb, href: path(locale, `/property-services/${s.slug}`), image: s.image }))} />
      </Section>
      <Section tone="accent-soft" labelledBy="why">
        <SectionHead id="why" title={d.home.whyTitle} />
        <ul className="grid gap-8 md:grid-cols-3">
          {d.home.why.map((w) => (
            <li key={w.title} className="border-l-4 border-accent-strong pl-5">
              <h3 className="font-heading text-xl font-bold text-ink">{w.title}</h3>
              <p className="mt-2 text-slate">{w.text}</p>
            </li>
          ))}
        </ul>
      </Section>
      <Section tone="dark" labelledBy="how">
        <SectionHead id="how" dark title={d.home.howTitle} intro={d.home.howIntro} />
        <Steps dark items={d.home.steps} />
      </Section>
      <QuoteBand title={d.home.bandTitle} text={d.home.bandText} quote={{ label: d.ui.quote, href: q }} />
    </>
  );
}
