/** Text wordmark until Transco supplies a logo. */
export default function Wordmark({ light }: { light?: boolean }) {
  return (
    <span className={`inline-flex items-baseline gap-1.5 font-heading text-xl font-bold tracking-tight ${light ? 'text-white' : 'text-ink'}`}>
      <span aria-hidden="true" className="inline-block size-3 rounded-full bg-accent-strong" style={light ? { background: 'var(--accent)' } : undefined} />
      Transco<span className={light ? 'text-accent' : 'text-accent-strong'}>SG</span><span className="font-medium">Group</span>
    </span>
  );
}
