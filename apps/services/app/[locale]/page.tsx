import { Hero, OfferCards, ProofStrip, QuoteBand, Section, SectionHead, Steps } from '@tw/ui';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n';
import { getDict, getProperty, getSourcing, images, path } from '@/lib/site';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDict(locale);
  const q = path(locale, '/request-a-quote');
  return (
    <>
      <Hero eyebrow={d.home.eyebrow} title={d.home.title} lead={d.home.lead} image={images.city} primary={{ label: d.ui.quote, href: q }} secondary={{ label: d.ui.call, href: 'tel:+14373326929' }} />
      <Section tone="mist" className="!py-10"><ProofStrip items={d.home.proof.map((p) => ({ ...p }))} /></Section>
      <Section labelledBy="property">
        <SectionHead id="property" eyebrow={d.home.propertyEyebrow} title={d.home.propertyTitle} intro={d.home.propertyIntro} />
        <OfferCards items={getProperty(locale).map((s) => ({ title: s.name, text: s.blurb, href: path(locale, `/property-services/${s.slug}`), cta: d.ui.viewService, image: s.image }))} />
      </Section>
      <Section tone="mist" labelledBy="sourcing">
        <SectionHead id="sourcing" eyebrow={d.home.sourcingEyebrow} title={d.home.sourcingTitle} intro={d.home.sourcingIntro} />
        <OfferCards items={getSourcing(locale).map((s) => ({ title: s.name, text: s.blurb, href: path(locale, `/procurement-sourcing/${s.slug}`), cta: d.ui.viewService, image: s.image }))} />
      </Section>
      <Section tone="dark" labelledBy="how">
        <SectionHead id="how" dark title={d.home.howTitle} intro={d.home.howIntro} />
        <Steps dark items={d.home.steps} />
      </Section>
      <QuoteBand title={d.home.bandTitle} text={d.home.bandText} quote={{ label: d.ui.quote, href: q }} />
    </>
  );
}
