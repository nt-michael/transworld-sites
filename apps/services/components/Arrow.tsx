export default function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg className="arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={diagonal ? 'M7 17L17 7M9 7h8v8' : 'M5 12h14M13 6l6 6-6 6'} />
    </svg>
  );
}
