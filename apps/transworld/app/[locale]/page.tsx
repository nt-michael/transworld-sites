import { notFound } from 'next/navigation';
import HeroSlider, { type Slide } from '@/components/HeroSlider';
import { images } from '@/lib/content';
import { homeSlides } from '@/lib/copy';
import { getUi, isLocale } from '@/lib/i18n';

/**
 * Home is the hero slider only, between the header and the footer.
 * Every other section has its own page.
 */
export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const p = (s = '') => `/${locale}${s}`;

  const ui = getUi(locale);
  const text = homeSlides[locale];
  const base: Pick<Slide, 'tone' | 'image'>[] = [
    { tone: 'sky', image: images.city },
    { tone: 'amber', image: images.trade },
    { tone: 'sky', image: images.hero },
  ];
  const links = [
    [p('/about'), p('/contact')],
    [p('/global-trade'), p('/global-trade#products')],
    [p('/global-trade/farm-to-market'), p('/contact')],
  ];
  const slides: Slide[] = base.map((b, i) => ({
    ...b,
    label: text[i].label,
    eyebrow: text[i].eyebrow,
    title: text[i].title,
    text: text[i].text,
    primary: { href: links[i][0], label: text[i].primary },
    secondary: { href: links[i][1], label: text[i].secondary },
  }));

  return <HeroSlider slides={slides} labels={{ pause: ui.pause, play: ui.play, slide: ui.slide, of: ui.of }} />;
}
