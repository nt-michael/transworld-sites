import { company, images, services as enServices } from './content';
import { sourcingDetails, type Detail } from './detail';
import type { SiteLocale as L } from './i18n';
import { getServices } from './tx/services';

export const site = { name: 'TransWorld SG Consulting Group', formEnv: process.env.NEXT_PUBLIC_FORMSPREE_SERVICES_QUOTE };
export const contact = { phone: company.phoneDisplay, phoneHref: company.phoneHref, email: company.email, address: company.address };
export const path = (l: L, p = '') => `/${l}${p}`;

const serviceImages: Record<string, string> = {
  'commercial-cleaning': images.cleanDesk,
  'post-construction-cleaning': images.mop,
  demolition: images.ladder,
  drywall: images.ladder,
  'concrete-work': images.warehouse,
  'moving-support': images.logistics,
};

export type Item = Detail & { image?: string };

/** Property services: slugs from the EN list, text per locale. */
export const getProperty = (l: L): Item[] => {
  const text = getServices(l);
  return enServices.map((s, i) => ({ slug: s.slug, ...text[i], image: serviceImages[s.slug] ?? images.city }));
};

/** The first five entries are the sourcing services (the rest are partner pages for the trade site). */
export const getSourcing = (l: L): Item[] => sourcingDetails[l].slice(0, 5).map((d) => ({ ...d, image: images.trade }));

export { images };

export type Dict = {
  meta: { title: string; description: string };
  ui: {
    home: string; skip: string; menu: string; closeMenu: string; nav: string; langLabel: string; quote: string; quoteShort: string; call: string; viewService: string;
    footerAbout: string; footerNav: string; footerLegal: string; rights: string; includedWord: string;
  };
  nav: { property: string; sourcing: string; about: string; contact: string };
  home: {
    eyebrow: string; title: string; lead: string; proof: { label: string; value: string }[];
    propertyEyebrow: string; propertyTitle: string; propertyIntro: string;
    sourcingEyebrow: string; sourcingTitle: string; sourcingIntro: string;
    howTitle: string; howIntro: string; steps: { title: string; text: string }[];
    bandTitle: string; bandText: string;
  };
  service: { eyebrow: string; included: string; excluded: string; suited: string; note: string; howTitle: string; steps: { title: string; text: string }[] };
  propertyIndex: { title: string; lead: string };
  sourcingIndex: { title: string; lead: string; notIncluded: string[] };
  about: { eyebrow: string; title: string; lead: string; blocks: { title: string; text: string }[]; factsTitle: string; address: string; reg: string; phone: string; email: string };
  contact: { eyebrow: string; title: string; lead: string; direct: string; directText: string };
  request: { eyebrow: string; title: string; lead: string; stepsTitle: string; steps: { title: string; text: string }[]; formTitle: string };
  form: { name: string; company: string; email: string; phone: string; need: string; place: string; timing: string; message: string; subject: string; submit: string; sending: string; success: string; error: string; notConfigured: string; required: string; fallback: string; groupProperty: string; groupSourcing: string };
  privacy: { title: string; lead: string; blocks: { title: string; text: string }[] };
};

const en: Dict = {
  meta: { title: 'TransWorld SG Consulting: Property Services and Sourcing', description: 'Commercial cleaning, post-construction cleaning, demolition, drywall, concrete work and moving support, plus supplier search and procurement at origin.' },
  ui: { home: 'TransWorld SG Consulting Group, home', skip: 'Skip to main content', menu: 'Open menu', closeMenu: 'Close menu', nav: 'Main navigation', langLabel: 'Language', quote: 'Request a quote', quoteShort: 'Quote', call: 'Call', viewService: 'View service', footerAbout: 'Property services and sourcing, scoped in writing.', footerNav: 'Navigation', footerLegal: 'Information', rights: 'All rights reserved.', includedWord: 'Included' },
  nav: { property: 'Property Services', sourcing: 'Procurement & Sourcing', about: 'About', contact: 'Contact' },
  home: {
    eyebrow: 'Property Services · Procurement & Sourcing',
    title: 'Cleaning, construction support and sourcing, scoped in writing.',
    lead: 'Commercial cleaning, post-construction cleaning, demolition, drywall, concrete work and moving support, plus supplier search and procurement at origin.',
    proof: [{ label: 'Based in', value: 'Ottawa, Ontario' }, { label: 'Property services', value: '6 services' }, { label: 'Sourcing services', value: '5 services' }, { label: 'Languages', value: 'English and French' }],
    propertyEyebrow: 'Property Services', propertyTitle: 'Make the space ready', propertyIntro: 'Cleaning and construction support for commercial properties. Each service page says what is included.',
    sourcingEyebrow: 'Procurement & Sourcing', sourcingTitle: 'Find, buy and check at origin', sourcingIntro: 'For buyers who need suppliers, purchasing and quality checks on the ground.',
    howTitle: 'How a job works', howIntro: 'Four steps from your request to handover.',
    steps: [
      { title: 'Tell us the job', text: 'The site, what needs doing and the dates that matter.' },
      { title: 'We review it', text: 'A call, photos or a visit, depending on the job.' },
      { title: 'You get a written quote', text: 'Scope, what is included, what is not, and the timing.' },
      { title: 'Work and handover', text: 'We do the work and walk through the result with you.' },
    ],
    bandTitle: 'Tell us what needs doing.', bandText: 'Send the site, the scope and the dates. You get a written quote.',
  },
  service: {
    eyebrow: 'Service', included: 'Included', excluded: 'Good to know', suited: 'Suited for', note: 'Limits', howTitle: 'How it works',
    steps: [
      { title: 'Tell us the job', text: 'Site, scope and dates.' },
      { title: 'We review it', text: 'A call, photos or a visit.' },
      { title: 'Written quote', text: 'Scope, inclusions and timing.' },
      { title: 'Work and handover', text: 'We walk through the result with you.' },
    ],
  },
  propertyIndex: { title: 'Property Services', lead: 'Six services for commercial properties, from daily cleaning to demolition and moving support.' },
  sourcingIndex: { title: 'Procurement & Sourcing', lead: 'Supplier search, purchasing, quality control and export preparation at origin.', notIncluded: [] },
  about: {
    eyebrow: 'About', title: 'TransWorld SG Consulting Group', lead: 'A company that does two things: it keeps commercial properties ready, and it sources and checks products at origin.',
    blocks: [
      { title: 'Property Services', text: 'Cleaning and construction support: commercial cleaning, post-construction cleaning, demolition, drywall, concrete work and moving support.' },
      { title: 'Procurement & Sourcing', text: 'Supplier search, procurement, quality control, export preparation and supplier development.' },
      { title: 'How we work', text: 'Every job starts with a written scope and ends with a walk-through.' },
    ],
    factsTitle: 'Company details', address: 'Address', reg: 'Registration number', phone: 'Phone', email: 'Email',
  },
  contact: { eyebrow: 'Contact', title: 'Tell us what needs doing', lead: 'The quote form is the fastest way to reach us. You can also call.', direct: 'Reach us directly', directText: 'Phone and email are below. For a job, the quote form gets you a written answer.' },
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
    name: 'Name', company: 'Company', email: 'Email', phone: 'Phone', need: 'What do you need?', place: 'Site address or city', timing: 'When do you need it?', message: 'Details', subject: 'Quote request: Property Services and Sourcing',
    submit: 'Send request', sending: 'Sending…', success: 'Thank you. We have received your request and will get back to you.', error: 'Your request could not be sent.', notConfigured: 'The form is not active yet: your request was not sent.', required: '(required)', fallback: 'Please call or try again in a few minutes.',
    groupProperty: 'Property Services', groupSourcing: 'Procurement & Sourcing',
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
  meta: { title: 'TransWorld SG Consulting : services immobiliers et approvisionnement', description: 'Nettoyage commercial, nettoyage après construction, démolition, cloisons sèches, travaux de béton et aide au déménagement, ainsi que recherche de fournisseurs et achats à la source.' },
  ui: { home: 'TransWorld SG Consulting Group, accueil', skip: 'Aller au contenu principal', menu: 'Ouvrir le menu', closeMenu: 'Fermer le menu', nav: 'Navigation principale', langLabel: 'Langue', quote: 'Demander un devis', quoteShort: 'Devis', call: 'Appeler', viewService: 'Voir le service', footerAbout: 'Services immobiliers et approvisionnement, définis par écrit.', footerNav: 'Navigation', footerLegal: 'Informations', rights: 'Tous droits réservés.', includedWord: 'Inclus' },
  nav: { property: 'Property Services', sourcing: 'Procurement & Sourcing', about: 'À propos', contact: 'Contact' },
  home: {
    eyebrow: 'Property Services · Procurement & Sourcing',
    title: 'Nettoyage, soutien à la construction et approvisionnement, définis par écrit.',
    lead: 'Nettoyage commercial, nettoyage après construction, démolition, cloisons sèches, travaux de béton et aide au déménagement, ainsi que recherche de fournisseurs et achats à la source.',
    proof: [{ label: 'Établis à', value: 'Ottawa, Ontario' }, { label: 'Services immobiliers', value: '6 services' }, { label: 'Services d’approvisionnement', value: '5 services' }, { label: 'Langues', value: 'Français et anglais' }],
    propertyEyebrow: 'Property Services', propertyTitle: 'Rendre les lieux prêts', propertyIntro: 'Nettoyage et soutien à la construction pour les immeubles commerciaux. Chaque page de service indique ce qui est inclus.',
    sourcingEyebrow: 'Procurement & Sourcing', sourcingTitle: 'Trouver, acheter et vérifier à la source', sourcingIntro: 'Pour les acheteurs qui ont besoin de fournisseurs, d’achats et de contrôles de qualité sur place.',
    howTitle: 'Comment se déroule un mandat', howIntro: 'Quatre étapes, de votre demande à la remise des lieux.',
    steps: [
      { title: 'Décrivez le travail', text: 'Le lieu, ce qu’il faut faire et les dates qui comptent.' },
      { title: 'Nous l’examinons', text: 'Un appel, des photos ou une visite, selon le travail.' },
      { title: 'Vous recevez un devis écrit', text: 'L’étendue, ce qui est inclus, ce qui ne l’est pas et l’échéancier.' },
      { title: 'Travaux et remise', text: 'Nous faisons le travail et passons en revue le résultat avec vous.' },
    ],
    bandTitle: 'Dites-nous ce qu’il y a à faire.', bandText: 'Indiquez le lieu, l’étendue et les dates. Vous recevez un devis écrit.',
  },
  service: {
    eyebrow: 'Service', included: 'Inclus', excluded: 'Bon à savoir', suited: 'Convient à', note: 'Limites', howTitle: 'Comment ça fonctionne',
    steps: [
      { title: 'Décrivez le travail', text: 'Lieu, étendue et dates.' },
      { title: 'Nous l’examinons', text: 'Un appel, des photos ou une visite.' },
      { title: 'Devis écrit', text: 'Étendue, inclusions et échéancier.' },
      { title: 'Travaux et remise', text: 'Nous passons en revue le résultat avec vous.' },
    ],
  },
  propertyIndex: { title: 'Property Services', lead: 'Six services pour les immeubles commerciaux, du nettoyage courant à la démolition et à l’aide au déménagement.' },
  sourcingIndex: { title: 'Procurement & Sourcing', lead: 'Recherche de fournisseurs, achats, contrôle de la qualité et préparation à l’exportation, directement à la source.', notIncluded: [] },
  about: {
    eyebrow: 'À propos', title: 'TransWorld SG Consulting Group', lead: 'Une entreprise qui fait deux choses : garder les immeubles commerciaux prêts, et trouver et vérifier des produits à la source.',
    blocks: [
      { title: 'Property Services', text: 'Nettoyage et soutien à la construction : nettoyage commercial, nettoyage après construction, démolition, cloisons sèches, travaux de béton et aide au déménagement.' },
      { title: 'Procurement & Sourcing', text: 'Recherche de fournisseurs, achats, contrôle de la qualité, préparation à l’exportation et développement de fournisseurs.' },
      { title: 'Notre façon de travailler', text: 'Chaque mandat commence par une étendue écrite et se termine par une visite de remise.' },
    ],
    factsTitle: 'Renseignements sur l’entreprise', address: 'Adresse', reg: 'N° d’enregistrement', phone: 'Téléphone', email: 'Courriel',
  },
  contact: { eyebrow: 'Contact', title: 'Dites-nous ce qu’il y a à faire', lead: 'Le formulaire de devis est le moyen le plus rapide de nous joindre. Vous pouvez aussi nous appeler.', direct: 'Nous joindre directement', directText: 'Le téléphone et le courriel sont ci-dessous. Pour un mandat, le formulaire de devis vous donne une réponse écrite.' },
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
    name: 'Nom', company: 'Entreprise', email: 'Courriel', phone: 'Téléphone', need: 'De quoi avez-vous besoin ?', place: 'Adresse du lieu ou ville', timing: 'Pour quand en avez-vous besoin ?', message: 'Détails', subject: 'Demande de devis : Property Services et Sourcing',
    submit: 'Envoyer la demande', sending: 'Envoi en cours…', success: 'Merci. Nous avons bien reçu votre demande et nous vous répondrons.', error: 'Votre demande n’a pas pu être envoyée.', notConfigured: 'Le formulaire n’est pas encore activé : votre demande n’a pas été envoyée.', required: '(obligatoire)', fallback: 'Appelez-nous ou réessayez dans quelques minutes.',
    groupProperty: 'Property Services', groupSourcing: 'Procurement & Sourcing',
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
