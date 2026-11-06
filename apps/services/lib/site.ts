import { company, images, services as enServices } from './content';
import type { SiteLocale as L } from './i18n';
import { getServices } from './tx/services';

export const site = { name: 'TransWorld Property Services', formEnv: process.env.NEXT_PUBLIC_FORMSPREE_SERVICES_QUOTE };
/** No street address is published for now: phone, email and the quote form only. */
export const contact = { phone: company.phoneDisplay, phoneHref: company.phoneHref, email: company.email };
export const path = (l: L, p = '') => `/${l}${p}`;

const serviceImages: Record<string, string> = {
  'commercial-cleaning': images.cleanDesk,
  'post-construction-cleaning': images.mop,
  demolition: images.ladder,
  drywall: images.ladder,
  'concrete-work': images.warehouse,
  'moving-support': images.logistics,
};

export type Item = { slug: string; name: string; blurb: string; overview: string; includes: string[]; suitedFor: string[]; note?: string; image?: string };

export const getProperty = (l: L): Item[] => {
  const text = getServices(l);
  return enServices.map((s, i) => ({ ...text[i], slug: s.slug, image: serviceImages[s.slug] ?? images.city }));
};

export { images };

export type Dict = {
  meta: { title: string; description: string; ogTitle: string };
  ui: { home: string; skip: string; menu: string; closeMenu: string; nav: string; langLabel: string; quote: string; quoteShort: string; call: string; viewService: string; footerAbout: string; footerNav: string; footerLegal: string; rights: string };
  nav: { property: string; about: string; contact: string };
  home: {
    eyebrow: string; title: string; lead: string; chips: string[];
    servicesTitle: string; servicesIntro: string;
    whyTitle: string; why: { title: string; text: string }[];
    howTitle: string; howIntro: string; steps: { title: string; text: string }[];
    bandTitle: string; bandText: string;
  };
  service: { included: string; excluded: string; suited: string; note: string; howTitle: string; steps: { title: string; text: string }[] };
  propertyIndex: { title: string; lead: string };
  about: { eyebrow: string; title: string; lead: string; blocks: { title: string; text: string }[]; factsTitle: string; reg: string; phone: string; email: string };
  contact: { eyebrow: string; title: string; lead: string; direct: string; directText: string };
  request: { eyebrow: string; title: string; lead: string; stepsTitle: string; steps: { title: string; text: string }[]; formTitle: string };
  form: { name: string; company: string; email: string; phone: string; need: string; place: string; timing: string; message: string; subject: string; submit: string; sending: string; success: string; error: string; notConfigured: string; required: string; fallback: string };
  privacy: { title: string; lead: string; blocks: { title: string; text: string }[] };
};

const en: Dict = {
  meta: {
    title: 'Commercial Cleaning, Post-Construction, Demolition and Drywall in Ottawa',
    ogTitle: 'Property services, scoped in writing',
    description: 'Commercial cleaning, post-construction cleaning, demolition, drywall, concrete work and moving support for commercial properties in Ottawa. Written quote, clear scope, walk-through at handover.',
  },
  ui: { home: 'TransWorld Property Services, home', skip: 'Skip to main content', menu: 'Open menu', closeMenu: 'Close menu', nav: 'Main navigation', langLabel: 'Language', quote: 'Request a quote', quoteShort: 'Quote', call: 'Call', viewService: 'See what is included', footerAbout: 'Cleaning and construction support for commercial properties, scoped in writing.', footerNav: 'Services', footerLegal: 'Company', rights: 'All rights reserved.' },
  nav: { property: 'Services', about: 'About', contact: 'Contact' },
  home: {
    eyebrow: 'Property Services · Ottawa',
    title: 'Ready to open. Ready to hand over.',
    lead: 'Cleaning and construction support for commercial properties. Every job starts with a written scope and ends with a walk-through.',
    chips: ['Written quote', 'Scope and exclusions in writing', 'English and French'],
    servicesTitle: 'Six services, one crew lead to talk to',
    servicesIntro: 'Pick the job. Each page says what is included, what is not, and who it suits.',
    whyTitle: 'What you get on every job',
    why: [
      { title: 'A written scope', text: 'What we will do, where, and by when, before work starts.' },
      { title: 'Clear exclusions', text: 'What is not in the price, so there are no surprises on the invoice.' },
      { title: 'A walk-through', text: 'We go through the result with you at handover and note anything to fix.' },
    ],
    howTitle: 'From request to handover',
    howIntro: 'Four steps, in this order.',
    steps: [
      { title: 'Tell us the job', text: 'The site, what needs doing and the dates that matter.' },
      { title: 'We review it', text: 'A call, photos or a visit, depending on the job.' },
      { title: 'You get a written quote', text: 'Scope, what is included, what is not, and the timing.' },
      { title: 'Work and handover', text: 'We do the work and walk through the result with you.' },
    ],
    bandTitle: 'Tell us what needs doing.', bandText: 'Send the site, the scope and the dates. You get a written quote.',
  },
  service: {
    included: 'Included', excluded: 'Good to know', suited: 'Suited for', note: 'Limits', howTitle: 'How it works',
    steps: [
      { title: 'Tell us the job', text: 'Site, scope and dates.' },
      { title: 'We review it', text: 'A call, photos or a visit.' },
      { title: 'Written quote', text: 'Scope, inclusions and timing.' },
      { title: 'Work and handover', text: 'We walk through the result with you.' },
    ],
  },
  propertyIndex: { title: 'Property Services', lead: 'Six services for commercial properties, from daily cleaning to demolition and moving support.' },
  about: {
    eyebrow: 'About', title: 'TransWorld Property Services', lead: 'We keep commercial properties ready: cleaned, repaired, cleared and moved.',
    blocks: [
      { title: 'Cleaning', text: 'Commercial cleaning and post-construction cleaning, so a space is ready to use.' },
      { title: 'Construction support', text: 'Demolition, drywall and concrete work for renovation and fit-out projects.' },
      { title: 'How we work', text: 'Every job starts with a written scope and ends with a walk-through.' },
    ],
    factsTitle: 'Company details', reg: 'Registration number', phone: 'Phone', email: 'Email',
  },
  contact: { eyebrow: 'Contact', title: 'Tell us what needs doing', lead: 'The quote form is the fastest way to reach us. You can also call or write.', direct: 'Reach us directly', directText: 'For a job, the quote form gets you a written answer.' },
  request: {
    eyebrow: 'Quote', title: 'Request a quote', lead: 'Tell us the site, the scope and the dates. You get a written quote.', stepsTitle: 'What happens next',
    steps: [
      { title: 'We read your request', text: 'We check the site, the scope and the dates.' },
      { title: 'We get in touch', text: 'A call, photos or a visit, depending on the job.' },
      { title: 'You get a written quote', text: 'Scope, inclusions, exclusions and timing.' },
    ],
    formTitle: 'Your request',
  },
  form: {
    name: 'Name', company: 'Company', email: 'Email', phone: 'Phone', need: 'What do you need?', place: 'Site address or city', timing: 'When do you need it?', message: 'Details', subject: 'Quote request: Property Services',
    submit: 'Send request', sending: 'Sending…', success: 'Thank you. We have received your request and will get back to you.', error: 'Your request could not be sent.', notConfigured: 'The form is not active yet: your request was not sent.', required: '(required)', fallback: 'Please call or try again in a few minutes.',
  },
  privacy: {
    title: 'Privacy', lead: 'What we do with the information you send us.',
    blocks: [
      { title: 'What we collect', text: 'Only what you write in the form: name, company, email, phone, site address or city, timing, the service you need and your message.' },
      { title: 'Why', text: 'To answer your request. We do not use this information for advertising.' },
      { title: 'How', text: 'The form is processed by the Formspree service, which forwards your message to us by email.' },
      { title: 'Your rights', text: 'You can ask us to correct or delete your request by writing to us.' },
    ],
  },
};

const fr: Dict = {
  meta: {
    title: 'Nettoyage commercial, après construction, démolition et cloisons sèches à Ottawa',
    ogTitle: 'Services immobiliers, définis par écrit',
    description: 'Nettoyage commercial, nettoyage après construction, démolition, cloisons sèches, travaux de béton et aide au déménagement pour immeubles commerciaux à Ottawa. Devis écrit, étendue claire, visite de remise.',
  },
  ui: { home: 'TransWorld Property Services, accueil', skip: 'Aller au contenu principal', menu: 'Ouvrir le menu', closeMenu: 'Fermer le menu', nav: 'Navigation principale', langLabel: 'Langue', quote: 'Demander un devis', quoteShort: 'Devis', call: 'Appeler', viewService: 'Voir ce qui est inclus', footerAbout: 'Nettoyage et soutien à la construction pour immeubles commerciaux, définis par écrit.', footerNav: 'Services', footerLegal: 'Entreprise', rights: 'Tous droits réservés.' },
  nav: { property: 'Services', about: 'À propos', contact: 'Contact' },
  home: {
    eyebrow: 'Services immobiliers · Ottawa',
    title: 'Prêt à ouvrir. Prêt à remettre.',
    lead: 'Nettoyage et soutien à la construction pour immeubles commerciaux. Chaque mandat commence par une étendue écrite et se termine par une visite de remise.',
    chips: ['Devis écrit', 'Étendue et exclusions par écrit', 'Français et anglais'],
    servicesTitle: 'Six services, un seul chef d’équipe à qui parler',
    servicesIntro: 'Choisissez le travail. Chaque page dit ce qui est inclus, ce qui ne l’est pas et à qui le service convient.',
    whyTitle: 'Ce que vous obtenez à chaque mandat',
    why: [
      { title: 'Une étendue écrite', text: 'Ce que nous ferons, où et pour quand, avant le début des travaux.' },
      { title: 'Des exclusions claires', text: 'Ce qui n’est pas dans le prix, pour éviter les surprises sur la facture.' },
      { title: 'Une visite de remise', text: 'Nous passons en revue le résultat avec vous et notons ce qui reste à corriger.' },
    ],
    howTitle: 'De la demande à la remise',
    howIntro: 'Quatre étapes, dans cet ordre.',
    steps: [
      { title: 'Décrivez le travail', text: 'Le lieu, ce qu’il faut faire et les dates qui comptent.' },
      { title: 'Nous l’examinons', text: 'Un appel, des photos ou une visite, selon le travail.' },
      { title: 'Vous recevez un devis écrit', text: 'L’étendue, ce qui est inclus, ce qui ne l’est pas et l’échéancier.' },
      { title: 'Travaux et remise', text: 'Nous faisons le travail et passons en revue le résultat avec vous.' },
    ],
    bandTitle: 'Dites-nous ce qu’il y a à faire.', bandText: 'Indiquez le lieu, l’étendue et les dates. Vous recevez un devis écrit.',
  },
  service: {
    included: 'Inclus', excluded: 'Bon à savoir', suited: 'Convient à', note: 'Limites', howTitle: 'Comment ça fonctionne',
    steps: [
      { title: 'Décrivez le travail', text: 'Lieu, étendue et dates.' },
      { title: 'Nous l’examinons', text: 'Un appel, des photos ou une visite.' },
      { title: 'Devis écrit', text: 'Étendue, inclusions et échéancier.' },
      { title: 'Travaux et remise', text: 'Nous passons en revue le résultat avec vous.' },
    ],
  },
  propertyIndex: { title: 'Services immobiliers', lead: 'Six services pour les immeubles commerciaux, du nettoyage courant à la démolition et à l’aide au déménagement.' },
  about: {
    eyebrow: 'À propos', title: 'TransWorld Property Services', lead: 'Nous gardons les immeubles commerciaux prêts : nettoyés, réparés, dégagés et déménagés.',
    blocks: [
      { title: 'Nettoyage', text: 'Nettoyage commercial et nettoyage après construction, pour qu’un lieu soit prêt à l’usage.' },
      { title: 'Soutien à la construction', text: 'Démolition, cloisons sèches et travaux de béton pour les projets de rénovation et d’aménagement.' },
      { title: 'Notre façon de travailler', text: 'Chaque mandat commence par une étendue écrite et se termine par une visite de remise.' },
    ],
    factsTitle: 'Renseignements sur l’entreprise', reg: 'N° d’enregistrement', phone: 'Téléphone', email: 'Courriel',
  },
  contact: { eyebrow: 'Contact', title: 'Dites-nous ce qu’il y a à faire', lead: 'Le formulaire de devis est le moyen le plus rapide de nous joindre. Vous pouvez aussi nous appeler ou nous écrire.', direct: 'Nous joindre directement', directText: 'Pour un mandat, le formulaire de devis vous donne une réponse écrite.' },
  request: {
    eyebrow: 'Devis', title: 'Demander un devis', lead: 'Indiquez le lieu, l’étendue et les dates. Vous recevez un devis écrit.', stepsTitle: 'Ce qui se passe ensuite',
    steps: [
      { title: 'Nous lisons votre demande', text: 'Nous vérifions le lieu, l’étendue et les dates.' },
      { title: 'Nous vous contactons', text: 'Un appel, des photos ou une visite, selon le travail.' },
      { title: 'Vous recevez un devis écrit', text: 'Étendue, inclusions, exclusions et échéancier.' },
    ],
    formTitle: 'Votre demande',
  },
  form: {
    name: 'Nom', company: 'Entreprise', email: 'Courriel', phone: 'Téléphone', need: 'De quoi avez-vous besoin ?', place: 'Adresse du lieu ou ville', timing: 'Pour quand en avez-vous besoin ?', message: 'Détails', subject: 'Demande de devis : Property Services',
    submit: 'Envoyer la demande', sending: 'Envoi en cours…', success: 'Merci. Nous avons bien reçu votre demande et nous vous répondrons.', error: 'Votre demande n’a pas pu être envoyée.', notConfigured: 'Le formulaire n’est pas encore activé : votre demande n’a pas été envoyée.', required: '(obligatoire)', fallback: 'Appelez-nous ou réessayez dans quelques minutes.',
  },
  privacy: {
    title: 'Confidentialité', lead: 'Ce que nous faisons des informations que vous nous envoyez.',
    blocks: [
      { title: 'Ce que nous collectons', text: 'Seulement ce que vous écrivez dans le formulaire : nom, entreprise, courriel, téléphone, adresse du lieu ou ville, échéancier, service demandé et message.' },
      { title: 'Pourquoi', text: 'Pour répondre à votre demande. Nous n’utilisons pas ces informations pour de la publicité.' },
      { title: 'Comment', text: 'Le formulaire est traité par le service Formspree, qui nous transmet votre message par courriel.' },
      { title: 'Vos droits', text: 'Vous pouvez nous demander de corriger ou de supprimer votre demande en nous écrivant.' },
    ],
  },
};

export const getDict = (l: L): Dict => (l === 'fr' ? fr : en);
