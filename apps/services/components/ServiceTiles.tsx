/* eslint-disable @next/next/no-img-element */
import { Link } from '@tw/ui';

export default function ServiceTiles({ items, cta }: { items: { title: string; text: string; href: string; image?: string }[]; cta: string }) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((o, i) => (
        <li key={o.href} className="group relative overflow-hidden rounded-3xl bg-dark-ground text-white">
          {o.image && <img src={o.image} alt="" loading="lazy" className="absolute inset-0 size-full object-cover opacity-45 transition-opacity duration-300 group-hover:opacity-60" />}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-ground via-dark-ground/70 to-transparent" aria-hidden="true" />
          <div className="relative flex min-h-80 flex-col justify-end p-6">
            <span aria-hidden="true" className="absolute left-6 top-5 font-heading text-5xl font-extrabold text-accent">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="font-heading text-2xl font-bold">{o.title}</h3>
            <p className="mt-2 text-white/80">{o.text}</p>
            <Link href={o.href} className="mt-4 inline-flex min-h-11 items-center gap-2 font-semibold text-accent after:absolute after:inset-0 after:content-['']">
              {cta}<span className="sr-only">: {o.title}</span><span aria-hidden="true">→</span>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
