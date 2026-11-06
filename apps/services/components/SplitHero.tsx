/* eslint-disable @next/next/no-img-element */
import { Button, Container } from '@tw/ui';

export default function SplitHero({
  eyebrow, title, lead, chips, primary, secondary, imageMain, imageSub,
}: {
  eyebrow: string; title: string; lead: string; chips: string[];
  primary: { label: string; href: string }; secondary: { label: string; href: string };
  imageMain: string; imageSub: string;
}) {
  return (
    <div className="overflow-hidden bg-accent-soft">
      <Container className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-pill bg-white px-4 py-1.5 text-sm font-semibold text-accent-strong">
            <span aria-hidden="true" className="size-2 rounded-full bg-accent-strong" />{eyebrow}
          </p>
          <h1 className="mt-5 text-5xl font-extrabold leading-[1.02] text-ink sm:text-7xl">{title}</h1>
          <p className="mt-6 max-w-xl text-lg text-slate sm:text-xl">{lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={primary.href}>{primary.label}</Button>
            <Button href={secondary.href} variant="secondary">{secondary.label}</Button>
          </div>
          <ul className="mt-8 flex flex-wrap gap-2">
            {chips.map((c) => (
              <li key={c} className="rounded-pill border border-accent-strong/25 bg-white/70 px-3 py-1 text-sm font-medium text-ink">{c}</li>
            ))}
          </ul>
        </div>
        <div className="relative mx-auto w-full max-w-xl pb-10 pr-6 lg:max-w-none">
          <div aria-hidden="true" className="absolute -right-2 top-6 size-full rounded-[2rem] bg-accent" />
          <img src={imageMain} alt="" className="relative aspect-[5/4] w-full rounded-[2rem] object-cover shadow-xl" />
          <img src={imageSub} alt="" className="absolute -bottom-0 -left-4 aspect-square w-2/5 rounded-3xl border-4 border-accent-soft object-cover shadow-xl" />
        </div>
      </Container>
    </div>
  );
}
