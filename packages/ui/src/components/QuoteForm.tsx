'use client';
import { useState, type FormEvent } from 'react';
import { cx } from '../cx';

export type QuoteField =
  | { name: string; label: string; type: 'text' | 'email' | 'tel' | 'number'; required?: boolean; autoComplete?: string }
  | { name: string; label: string; type: 'select'; options: { value: string; label: string }[]; required?: boolean }
  | { name: string; label: string; type: 'textarea'; required?: boolean };

export type QuoteFormProps = {
  /** The part after formspree.io/f/. Empty means "not configured yet". */
  formId: string | undefined;
  site: string;
  locale: string;
  subject: string;
  fields: QuoteField[];
  labels: { submit: string; sending: string; success: string; error: string; notConfigured: string; required: string };
  contactFallback: string;
};

const input = 'w-full min-h-11 rounded-xl border border-field bg-white px-4 py-2.5 text-ink placeholder:text-field focus:border-blue';

export function QuoteForm({ formId, site, locale, subject, fields, labels, contactFallback }: QuoteFormProps) {
  const [state, setState] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formId) { setState('error'); return; }
    setState('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.currentTarget),
      });
      setState(res.ok ? 'ok' : 'error');
      if (res.ok) e.currentTarget.reset();
    } catch { setState('error'); }
  }

  if (state === 'ok') {
    return <p role="status" className="rounded-card bg-accent-soft p-6 text-lg font-semibold">{labels.success}</p>;
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2" noValidate={false}>
      <input type="hidden" name="_subject" value={subject} />
      <input type="hidden" name="site" value={site} />
      <input type="hidden" name="site_language" value={locale} />
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      {fields.map((f) => {
        const id = `qf-${f.name}`;
        const wide = f.type === 'textarea' || f.type === 'select';
        return (
          <div key={f.name} className={cx(wide && 'sm:col-span-2')}>
            <label htmlFor={id} className="mb-1.5 block text-sm font-semibold">
              {f.label}{f.required && <span className="text-signal"> *<span className="sr-only"> {labels.required}</span></span>}
            </label>
            {f.type === 'select' ? (
              <select id={id} name={f.name} required={f.required} className={input} defaultValue="">
                <option value="" disabled>—</option>
                {f.options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            ) : f.type === 'textarea' ? (
              <textarea id={id} name={f.name} required={f.required} rows={5} className={input} />
            ) : (
              <input id={id} name={f.name} type={f.type} required={f.required} autoComplete={'autoComplete' in f ? f.autoComplete : undefined} className={input} />
            )}
          </div>
        );
      })}
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={state === 'sending'}
          className="inline-flex min-h-12 items-center justify-center rounded-pill bg-blue px-8 py-3 text-base font-semibold text-white hover:bg-[#0f4296] disabled:opacity-60"
        >
          {state === 'sending' ? labels.sending : labels.submit}
        </button>
        {state === 'error' && (
          <p role="alert" className="mt-4 rounded-xl border border-signal p-4 text-signal">
            {formId ? labels.error : labels.notConfigured} <span className="text-ink">{contactFallback}</span>
          </p>
        )}
      </div>
    </form>
  );
}
