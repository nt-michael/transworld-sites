import { PageHeader, QuoteForm, Section, SectionHead, Steps } from '@tw/ui';
import { notFound } from 'next/navigation';
import { getDict, getProduce, site } from '@/lib/content';
import { isLocale } from '@/lib/i18n';
import { path } from '@/lib/nav';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return isLocale(locale) ? { title: getDict(locale).request.title, description: getDict(locale).request.lead } : {};
}

export default async function RequestAQuote({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDict(locale);
  const f = d.form;
  return (
    <>
      <PageHeader eyebrow={d.request.eyebrow} title={d.request.title} lead={d.request.lead} crumbs={[{ label: d.ui.home.split(',')[0], href: path(locale) }, { label: d.request.title }]} />
      <Section tone="mist" labelledBy="next">
        <SectionHead id="next" title={d.request.stepsTitle} />
        <Steps items={d.request.steps} />
      </Section>
      <Section labelledBy="form">
        <SectionHead id="form" title={d.request.formTitle} />
        <div className="max-w-3xl">
          <QuoteForm
            formId={site.formEnv}
            site="transco"
            locale={locale}
            subject={f.subject}
            contactFallback={f.fallback}
            labels={{ submit: f.submit, sending: f.sending, success: f.success, error: f.error, notConfigured: f.notConfigured, required: f.required }}
            fields={[
              { name: 'name', label: f.name, type: 'text', required: true, autoComplete: 'name' },
              { name: 'company', label: f.company, type: 'text', autoComplete: 'organization' },
              { name: 'email', label: f.email, type: 'email', required: true, autoComplete: 'email' },
              { name: 'phone', label: f.phone, type: 'tel', autoComplete: 'tel' },
              { name: 'product', label: f.produce, type: 'select', required: true, options: [...getProduce(locale).map((p) => ({ value: p.name, label: p.name })), { value: 'Other', label: f.any }] },
              { name: 'quantity', label: f.quantity, type: 'text' },
              { name: 'destination', label: f.destination, type: 'text' },
              { name: 'message', label: f.message, type: 'textarea' },
            ]}
          />
        </div>
      </Section>
    </>
  );
}
