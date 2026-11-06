'use client';

import { useId, useState, type FormEvent } from 'react';
import { company, services } from '@/lib/content';
import type { Locale } from '@/lib/i18n';
import { areaValues, formText, languageValues, topicValues, type FormKind } from '@/lib/tx/forms';

/**
 * One Formspree form per kind. Each ID is its own environment variable in Vercel
 * (the part after formspree.io/f/). Next.js inlines NEXT_PUBLIC_ variables at build
 * time, so each must be written out in full here. Without an ID the form says
 * honestly that nothing was sent.
 */
const FORM_IDS: Record<FormKind, string | undefined> = {
  property: process.env.NEXT_PUBLIC_FORMSPREE_PROPERTY,
  trade: process.env.NEXT_PUBLIC_FORMSPREE_TRADE,
  contact: process.env.NEXT_PUBLIC_FORMSPREE_CONTACT,
  careers: process.env.NEXT_PUBLIC_FORMSPREE_CAREERS,
};

type Status = 'idle' | 'sending' | 'sent' | 'error' | 'unconfigured';

export default function SiteForm({
  kind,
  locale,
  product,
  productLabel,
  serviceLabels,
}: {
  kind: FormKind;
  locale: Locale;
  /** English product name, sent to the team. */
  product?: string;
  /** Localised product name, shown to the visitor. */
  productLabel?: string;
  /** Localised service names, in the same order as `services`. */
  serviceLabels?: string[];
}) {
  const id = useId();
  const t = formText[locale];
  const [status, setStatus] = useState<Status>('idle');
  const formId = FORM_IDS[kind];

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'sending') return;
    if (!formId) {
      setStatus('unconfigured');
      return;
    }
    const form = event.currentTarget;
    setStatus('sending');
    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (!response.ok) throw new Error(String(response.status));
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  const message: Record<Status, string> = {
    idle: '',
    sending: t.sending,
    sent: t.sent,
    error: t.error(company.email),
    unconfigured: t.unconfigured(company.phoneDisplay, company.email),
  };

  // The team reads the subject line, so it stays in English whatever language the visitor used.
  const en = formText.en.subjects;
  const subject = kind === 'trade' ? en.trade(product ?? '') : en[kind];
  const field = (name: string) => `${id}-${name}`;

  return (
    <form className={`form form--${kind}`} onSubmit={onSubmit}>
      <input type="hidden" name="_subject" value={subject} />
      <input type="hidden" name="request_type" value={kind} />
      <input type="hidden" name="site_language" value={locale} />
      {product && <input type="hidden" name="product" value={product} />}
      <div className="hp" aria-hidden="true">
        <label>
          {t.hp}
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {kind === 'trade' && (product || productLabel) && <p className="form-note">{t.tradeNote(productLabel ?? product ?? '')}</p>}

      {kind === 'property' && (
        <>
          <div className="form-row">
            <div className="field">
              <label htmlFor={field('service')}>{t.service}</label>
              <select id={field('service')} name="service" required>
                {services.map((s, i) => (
                  <option key={s.slug} value={s.name}>
                    {serviceLabels?.[i] ?? s.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor={field('date')}>{t.dateOpt}</label>
              <input id={field('date')} name="date" type="date" />
            </div>
          </div>
          <div className="field">
            <label htmlFor={field('address')}>{t.address}</label>
            <input id={field('address')} name="address" type="text" autoComplete="street-address" required />
          </div>
          <div className="field">
            <label htmlFor={field('desc')}>{t.describe}</label>
            <textarea id={field('desc')} name="description" rows={4} required />
          </div>
        </>
      )}

      {kind === 'contact' && (
        <div className="field">
          <label htmlFor={field('topic')}>{t.topic}</label>
          <select id={field('topic')} name="topic" required>
            {topicValues.map((value, i) => (
              <option key={value} value={value}>
                {t.topics[i]}
              </option>
            ))}
          </select>
        </div>
      )}

      {kind === 'careers' && (
        <div className="form-row">
          <div className="field">
            <label htmlFor={field('area')}>{t.area}</label>
            <select id={field('area')} name="area" required>
              {areaValues.map((value, i) => (
                <option key={value} value={value}>
                  {t.areas[i]}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor={field('lang')}>{t.language}</label>
            <select id={field('lang')} name="preferred_language">
              {languageValues.map((value, i) => (
                <option key={value} value={value}>
                  {t.languages[i]}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      <div className="form-row">
        <div className="field">
          <label htmlFor={field('name')}>{t.fullName}</label>
          <input id={field('name')} name="name" type="text" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor={field('email')}>{t.email}</label>
          <input id={field('email')} name="email" type="email" autoComplete="email" required />
        </div>
      </div>

      {kind === 'trade' && (
        <>
          <div className="form-row">
            <div className="field">
              <label htmlFor={field('company')}>{t.company}</label>
              <input id={field('company')} name="company" type="text" autoComplete="organization" required />
            </div>
            <div className="field">
              <label htmlFor={field('qty')}>{t.quantity}</label>
              <input id={field('qty')} name="quantity" type="text" required />
            </div>
          </div>
          <div className="field">
            <label htmlFor={field('msg')}>{t.messageOpt}</label>
            <textarea id={field('msg')} name="message" rows={4} />
          </div>
        </>
      )}

      {kind === 'contact' && (
        <>
          <div className="form-row">
            <div className="field">
              <label htmlFor={field('company')}>{t.companyOpt}</label>
              <input id={field('company')} name="company" type="text" autoComplete="organization" />
            </div>
            <div className="field">
              <label htmlFor={field('phone')}>{t.phoneOpt}</label>
              <input id={field('phone')} name="phone" type="tel" autoComplete="tel" />
            </div>
          </div>
          <div className="field">
            <label htmlFor={field('msg')}>{t.message}</label>
            <textarea id={field('msg')} name="message" rows={5} required />
          </div>
        </>
      )}

      {kind === 'careers' && (
        <>
          <div className="form-row">
            <div className="field">
              <label htmlFor={field('phone')}>{t.phoneOpt}</label>
              <input id={field('phone')} name="phone" type="tel" autoComplete="tel" />
            </div>
            <div className="field">
              <label htmlFor={field('link')}>{t.linkOpt}</label>
              <input id={field('link')} name="cv_link" type="url" autoComplete="url" />
            </div>
          </div>
          <div className="field">
            <label htmlFor={field('msg')}>{t.message}</label>
            <textarea id={field('msg')} name="message" rows={5} required />
          </div>
        </>
      )}

      {kind === 'property' && (
        <div className="field">
          <label htmlFor={field('phone')}>{t.phoneOpt}</label>
          <input id={field('phone')} name="phone" type="tel" autoComplete="tel" />
        </div>
      )}

      <button type="submit" className="btn btn--primary btn--block" aria-disabled={status === 'sending'}>
        {status === 'sending' ? t.sending : kind === 'contact' || kind === 'careers' ? t.sendMessage : t.send}
      </button>
      <p role="status" className={`form-status form-status--${status}`}>
        {message[status]}
      </p>
    </form>
  );
}
