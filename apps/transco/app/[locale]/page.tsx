import { Hero, OfferCards, ProofStrip, QuoteBand, Section, SectionHead, Steps } from '@tw/ui';
import { notFound } from 'next/navigation';
import { getDict, getProduce, img } from '@/lib/content';
import { isLocale } from '@/lib/i18n';
import { path } from '@/lib/nav';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDict(locale);
  return (
    <>
      <Hero
        eyebrow={d.home.eyebrow}
        title={d.home.title}
        lead={d.home.lead}
        image={img.hero}
        primary={{ label: d.ui.quote, href: path(locale, '/request-a-quote') }}
        secondary={{ label: d.ui.seeProduce, href: path(locale, '/produce') }}
      />
      <Section tone="mist" className="!py-10">
        <ProofStrip items={d.home.proof.map((p) => ({ ...p }))} />
      </Section>
      <Section labelledBy="produce">
        <SectionHead id="produce" eyebrow={d.nav.produce} title={d.home.produceTitle} intro={d.home.produceIntro} />
        <OfferCards
          items={getProduce(locale).map((p) => ({ title: p.name, text: p.blurb, href: path(locale, `/produce/${p.slug}`), cta: d.ui.viewProduct, image: p.image }))}
        />
      </Section>
      <Section tone="dark" labelledBy="how">
        <SectionHead id="how" dark eyebrow={d.nav.qualityExport} title={d.home.howTitle} intro={d.home.howIntro} />
        <Steps dark items={d.home.steps} />
      </Section>
      <QuoteBand title={d.home.bandTitle} text={d.home.bandText} quote={{ label: d.ui.quote, href: path(locale, '/request-a-quote') }} />
    </>
  );
}
