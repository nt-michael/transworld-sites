import Image from 'next/image';
import Link from 'next/link';
import Arrow from './Arrow';

/** Whole-card link: photo on top, then label, title, text and a "learn more" cue. */
export default function Card({
  href,
  image,
  index,
  eyebrow,
  title,
  text,
  cta = 'Learn more',
  tone = 'blue',
  portrait = false,
  sizes = '(min-width: 1080px) 33vw, (min-width: 640px) 50vw, 100vw',
}: {
  href: string;
  image?: string;
  index?: number;
  eyebrow?: string;
  title: string;
  text?: string;
  cta?: string;
  tone?: 'blue' | 'amber' | 'aqua';
  portrait?: boolean;
  sizes?: string;
}) {
  return (
    <Link href={href} className={`card card--${tone}${portrait ? ' card--portrait' : ''}`}>
      <span className="card-media">
        {image ? (
          <Image src={image} alt="" fill sizes={sizes} />
        ) : (
          <span className="card-ph" aria-hidden="true">
            {index !== undefined ? String(index + 1).padStart(2, '0') : ''}
          </span>
        )}
      </span>
      <span className="card-body">
        {eyebrow && <span className="card-eyebrow">{eyebrow}</span>}
        <strong className="card-title">{title}</strong>
        {text && <span className="card-text">{text}</span>}
        <span className="link-arrow">
          {cta} <Arrow />
        </span>
      </span>
    </Link>
  );
}
