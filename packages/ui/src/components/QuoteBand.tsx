import { Button } from './Button';
import { Container } from './Section';

export function QuoteBand({
  title, text, quote, email, phone,
}: { title: string; text: string; quote: { label: string; href: string }; email?: { label: string; href: string }; phone?: { label: string; href: string } }) {
  return (
    <div className="bg-dark-ground text-white">
      <Container className="flex flex-col gap-6 py-14 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="mt-3 text-lg text-white/80">{text}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button href={quote.href} variant="accent">{quote.label}</Button>
          {phone && <a href={phone.href} className="font-semibold underline-offset-4 hover:underline">{phone.label}</a>}
          {email && <a href={email.href} className="font-semibold underline-offset-4 hover:underline">{email.label}</a>}
        </div>
      </Container>
    </div>
  );
}
