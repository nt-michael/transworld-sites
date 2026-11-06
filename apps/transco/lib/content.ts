import type { Locale } from './i18n';

const u = (id: string, w = 1400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

/** Free stock photos until Transco supplies its own (see docs/editorial-and-navigation.md). */
export const img = {
  hero: u('photo-1500382017468-9049fed747ef', 2000),
  cocoa: u('photo-1543840312-56c8bf2c350d', 1000),
  coffee: u('photo-1743356629215-abb470447e71', 1000),
  shea: u('photo-1573812461383-e5f8b759d12e', 1000),
  pepper: u('photo-1649952052743-5e8f37c348c5', 1000),
  djansang: u('photo-1508748169069-82590c9f26e6', 1000),
  logistics: u('photo-1678182451047-196f22a4143e', 1600),
};

export const site = {
  name: 'Transco SG Group',
  formEnv: process.env.NEXT_PUBLIC_FORMSPREE_TRANSCO_QUOTE,
};

type ProduceText = { name: string; blurb: string; about: string; form: string; use: string[] };
export type Produce = { slug: string; image: string } & ProduceText;

const produceBase = [
  { slug: 'cacao', image: img.cocoa },
  { slug: 'cafe', image: img.coffee },
  { slug: 'karite', image: img.shea },
  { slug: 'poivre-de-penja', image: img.pepper },
  { slug: 'djansang', image: img.djansang },
] as const;

const produceText: Record<Locale, ProduceText[]> = {
  fr: [
    { name: 'Fèves de cacao', blurb: 'Fèves fermentées et séchées, triées avant l’export.', about: 'Le cacao est l’une des grandes cultures du Cameroun. Nous proposons des fèves fermentées et séchées, triées et conditionnées en sacs pour l’export.', form: 'Fèves entières, séchées', use: ['Chocolatiers et fabricants de chocolat', 'Transformateurs de cacao', 'Négociants et distributeurs'] },
    { name: 'Café', blurb: 'Café vert, en grains, pour torréfacteurs et négociants.', about: 'Café vert (non torréfié) en sacs. Le type de café et la zone de culture sont confirmés pour chaque offre.', form: 'Café vert en grains', use: ['Torréfacteurs', 'Négociants en café', 'Importateurs'] },
    { name: 'Noix de karité', blurb: 'Noix brutes, pour la production de beurre de karité.', about: 'Noix de karité brutes, récoltées puis séchées. Elles sont destinées aux unités qui produisent le beurre de karité.', form: 'Noix brutes, séchées', use: ['Producteurs de beurre de karité', 'Fabricants de cosmétiques', 'Importateurs'] },
    { name: 'Poivre de Penja', blurb: 'Poivre noir et blanc de la région de Penja.', about: 'Le poivre de Penja est une épice camerounaise reconnue par une indication géographique. Nous proposons le poivre noir et le poivre blanc.', form: 'Grains, noirs ou blancs', use: ['Épiceries fines et restaurateurs', 'Distributeurs de produits alimentaires', 'Importateurs'] },
    { name: 'Djansang', blurb: 'Graines utilisées en cuisine africaine.', about: 'Graines traditionnelles utilisées en cuisine d’Afrique centrale. Elles sont vendues séchées.', form: 'Graines séchées', use: ['Épiceries africaines', 'Distributeurs', 'Restaurants'] },
  ],
  en: [
    { name: 'Cocoa beans', blurb: 'Fermented, dried beans, sorted before export.', about: 'Cocoa is one of Cameroon’s major crops. We offer fermented and dried beans, sorted and packed in bags for export.', form: 'Whole beans, dried', use: ['Chocolate makers', 'Cocoa processors', 'Traders and distributors'] },
    { name: 'Coffee', blurb: 'Green coffee beans for roasters and traders.', about: 'Green (unroasted) coffee in bags. The coffee type and growing area are confirmed for each offer.', form: 'Green coffee beans', use: ['Roasters', 'Coffee traders', 'Importers'] },
    { name: 'Shea nuts', blurb: 'Raw nuts for shea butter production.', about: 'Raw shea nuts, harvested and dried. They are meant for units that produce shea butter.', form: 'Raw nuts, dried', use: ['Shea butter producers', 'Cosmetics makers', 'Importers'] },
    { name: 'Penja pepper', blurb: 'Black and white pepper from the Penja area.', about: 'Penja pepper is a Cameroonian spice protected by a geographical indication. We offer black and white pepper.', form: 'Whole berries, black or white', use: ['Fine food shops and restaurants', 'Food distributors', 'Importers'] },
    { name: 'Djansang', blurb: 'Seeds used in African cooking.', about: 'Traditional seeds used in Central African cooking. They are sold dried.', form: 'Dried seeds', use: ['African grocers', 'Distributors', 'Restaurants'] },
  ],
};

export const getProduce = (l: Locale): Produce[] => produceBase.map((b, i) => ({ ...b, ...produceText[l][i] }));

export type Dict = {
  meta: { title: string; description: string };
  ui: {
    home: string; skip: string; menu: string; closeMenu: string; nav: string; langLabel: string;
    quote: string; quoteShort: string; seeProduce: string; viewProduct: string; discover: string;
    footerAbout: string; footerNav: string; footerLegal: string; rights: string; contactNote: string; pending: string;
  };
  nav: { produce: string; origin: string; qualityExport: string; about: string; contact: string };
  qe: { drying: [string, string]; inspection: [string, string]; shipping: [string, string] };
  home: {
    eyebrow: string; title: string; lead: string;
    proof: { label: string; value: string }[];
    produceTitle: string; produceIntro: string;
    howTitle: string; howIntro: string; steps: { title: string; text: string }[];
    bandTitle: string; bandText: string;
  };
  produce: { eyebrow: string; title: string; lead: string; specTitle: string; spec: { origin: string; form: string; packaging: string; moq: string; terms: string; docs: string }; tbc: string; included: string; excluded: string; suited: string; includedItems: string[]; excludedItems: string[]; };
  origin: { eyebrow: string; title: string; lead: string; areas: { name: string; text: string }[]; note: string; calendarTitle: string; calendarText: string };
  qualityExport: { eyebrow: string; title: string; lead: string; stepsTitle: string; steps: { title: string; text: string }[]; docsTitle: string; docs: string[]; faqTitle: string; faq: { q: string; a: string }[] };
  about: { eyebrow: string; title: string; lead: string; blocks: { title: string; text: string }[] };
  contact: { eyebrow: string; title: string; lead: string; direct: string; directText: string };
  request: { eyebrow: string; title: string; lead: string; stepsTitle: string; steps: { title: string; text: string }[]; formTitle: string };
  form: { name: string; company: string; email: string; phone: string; produce: string; quantity: string; destination: string; message: string; any: string; subject: string; submit: string; sending: string; success: string; error: string; notConfigured: string; required: string; fallback: string };
  privacy: { title: string; lead: string; blocks: { title: string; text: string }[] };
};

const fr: Dict = {
  meta: { title: 'Transco SG Group', description: 'Produits agricoles bruts du Cameroun, triés et prêts à exporter : cacao, café, karité, poivre de Penja, djansang.' },
  ui: {
    home: 'Transco SG Group, accueil', skip: 'Aller au contenu principal', menu: 'Ouvrir le menu', closeMenu: 'Fermer le menu', nav: 'Navigation principale', langLabel: 'Langue',
    quote: 'Demander un devis', quoteShort: 'Devis', seeProduce: 'Voir les produits', viewProduct: 'Voir le produit', discover: 'En savoir plus',
    footerAbout: 'Produits agricoles bruts du Cameroun, pour les acheteurs et les transformateurs.', footerNav: 'Navigation', footerLegal: 'Informations', rights: 'Tous droits réservés.', contactNote: 'Pour toute demande, utilisez le formulaire de devis. Nous répondons par courriel.', pending: 'À confirmer',
  },
  nav: { produce: 'Produits', origin: 'Origine', qualityExport: 'Qualité et export', about: 'À propos', contact: 'Contact' },
  qe: { drying: ['Tri, séchage et conditionnement', 'Comment les lots sont préparés avant l’export'], inspection: ['Inspection et documents', 'Ce qui accompagne chaque lot'], shipping: ['Expédition', 'Du port camerounais à votre entrepôt'] },
  home: {
    eyebrow: 'Transco SG Group · Cameroun',
    title: 'Des produits agricoles du Cameroun, triés et prêts à exporter.',
    lead: 'Cacao, café, noix de karité, poivre de Penja et djansang, achetés auprès de producteurs camerounais et préparés pour l’export.',
    proof: [{ label: 'Origine', value: 'Cameroun' }, { label: 'Produits', value: '5 produits bruts' }, { label: 'Langues', value: 'Français et anglais' }],
    produceTitle: 'Ce que nous proposons', produceIntro: 'Des produits bruts, non transformés. Chaque offre précise la forme, le conditionnement et la quantité minimale.',
    howTitle: 'Comment se déroule une commande', howIntro: 'Quatre étapes, de votre demande à l’expédition.',
    steps: [
      { title: 'Votre demande', text: 'Produit, quantité souhaitée et pays de destination.' },
      { title: 'Notre offre', text: 'Nous répondons par courriel avec les conditions et les délais.' },
      { title: 'Échantillon et contrôle', text: 'Un échantillon peut être préparé et contrôlé avant la commande.' },
      { title: 'Expédition', text: 'Documents d’export et expédition avec un transitaire.' },
    ],
    bandTitle: 'Dites-nous ce qu’il vous faut.', bandText: 'Indiquez le produit, la quantité et la destination. Nous répondons par courriel.',
  },
  produce: {
    eyebrow: 'Produits', title: 'Nos produits agricoles bruts', lead: 'Cinq produits du Cameroun, vendus sans transformation. Demandez un devis pour connaître le prix, le conditionnement et le délai.',
    specTitle: 'Fiche produit', spec: { origin: 'Origine', form: 'Forme', packaging: 'Conditionnement', moq: 'Quantité minimale', terms: 'Conditions d’expédition', docs: 'Documents' }, tbc: 'À confirmer avec l’offre',
    included: 'Inclus dans l’offre', excluded: 'Non inclus', suited: 'Pour qui',
    includedItems: ['Prix et conditionnement confirmés par écrit', 'Échantillon sur demande', 'Documents d’export'], excludedItems: ['Transformation du produit', 'Dédouanement dans le pays de destination'],
  },
  origin: {
    eyebrow: 'Origine', title: 'Du Cameroun, de la culture à l’export', lead: 'Voici où ces cultures poussent au Cameroun. Nos zones d’achat sont précisées pour chaque offre.',
    areas: [
      { name: 'Cacao', text: 'Cultivé surtout dans les régions du Centre, du Sud, du Sud-Ouest, du Littoral et de l’Est.' },
      { name: 'Café', text: 'L’arabica pousse en altitude, dans l’Ouest et le Nord-Ouest. Le robusta pousse dans les zones plus basses, au Littoral et au Centre.' },
      { name: 'Karité', text: 'Pousse dans les régions du nord : Adamaoua, Nord et Extrême-Nord.' },
      { name: 'Poivre de Penja', text: 'Cultivé autour de Penja, dans la région du Littoral, et protégé par une indication géographique.' },
      { name: 'Djansang', text: 'Provient des zones forestières du sud du pays.' },
    ],
    note: 'Ces informations décrivent les zones de culture du pays. Les producteurs et coopératives avec lesquels nous travaillons seront présentés ici dès qu’ils auront confirmé leur participation.',
    calendarTitle: 'Calendrier de récolte', calendarText: 'Le calendrier de disponibilité par produit sera publié ici. En attendant, indiquez la période souhaitée dans votre demande de devis.',
  },
  qualityExport: {
    eyebrow: 'Qualité et export', title: 'Préparer, contrôler, expédier', lead: 'Ce que nous faisons entre le champ et le port, et ce qui accompagne chaque lot.',
    stepsTitle: 'De la récolte au port',
    steps: [
      { title: 'Tri', text: 'On retire les grains abîmés et les corps étrangers.' },
      { title: 'Séchage', text: 'Le séchage ramène le produit à un taux d’humidité adapté à la conservation.' },
      { title: 'Conditionnement', text: 'Les lots sont mis en sacs et identifiés.' },
      { title: 'Contrôle', text: 'Un échantillon de chaque lot peut être inspecté par un tiers indépendant, à la demande de l’acheteur.' },
      { title: 'Documents', text: 'Les documents commerciaux et d’export sont préparés pour chaque expédition.' },
      { title: 'Expédition', text: 'Nous travaillons avec un transitaire jusqu’au port de destination.' },
    ],
    docsTitle: 'Documents qui accompagnent un lot', docs: ['Facture commerciale et liste de colisage', 'Certificat d’origine', 'Certificat phytosanitaire, selon le produit', 'Rapport d’inspection, si demandé'],
    faqTitle: 'Questions fréquentes',
    faq: [
      { q: 'Quelle est la quantité minimale ?', a: 'Elle dépend du produit. Elle est indiquée dans chaque offre.' },
      { q: 'Puis-je recevoir un échantillon ?', a: 'Oui, sur demande. Précisez le produit et l’adresse de livraison dans le formulaire.' },
      { q: 'Qui paie l’inspection par un tiers ?', a: 'Elle est convenue avec l’acheteur avant la commande.' },
      { q: 'Quels délais prévoir ?', a: 'Ils dépendent du produit, de la saison et de la destination. Ils sont confirmés dans l’offre.' },
    ],
  },
  about: {
    eyebrow: 'À propos', title: 'Transco SG Group', lead: 'Une entreprise camerounaise qui prépare et exporte des produits agricoles bruts.',
    blocks: [
      { title: 'Ce que nous faisons', text: 'Nous achetons des produits agricoles auprès de producteurs camerounais, nous les trions et les conditionnons, puis nous organisons l’export.' },
      { title: 'Ce que nous ne faisons pas', text: 'Nous ne transformons pas les produits. Nous vendons des produits bruts.' },
      { title: 'Comment nous travaillons', text: 'Chaque offre est écrite : produit, forme, conditionnement, quantité minimale, conditions d’expédition et délai.' },
    ],
  },
  contact: { eyebrow: 'Contact', title: 'Parlons de votre besoin', lead: 'Le formulaire de devis est le moyen le plus rapide de nous joindre.', direct: 'Autres demandes', directText: 'Pour une question qui n’est pas une demande de devis, écrivez-nous avec le même formulaire en choisissant « Autre produit ou question ».' },
  request: {
    eyebrow: 'Devis', title: 'Demander un devis', lead: 'Dites-nous le produit, la quantité et la destination. Nous répondons par courriel avec nos conditions.',
    stepsTitle: 'Ce qui se passe ensuite',
    steps: [
      { title: 'Nous lisons votre demande', text: 'Nous vérifions le produit, la quantité et la destination.' },
      { title: 'Nous répondons par courriel', text: 'Vous recevez les conditions, le conditionnement et les délais.' },
      { title: 'Échantillon, si besoin', text: 'Nous préparons un échantillon avant la commande.' },
    ],
    formTitle: 'Votre demande',
  },
  form: {
    name: 'Nom', company: 'Entreprise', email: 'Courriel', phone: 'Téléphone', produce: 'Produit', quantity: 'Quantité souhaitée', destination: 'Pays de destination', message: 'Message', any: 'Autre produit ou question',
    subject: 'Demande de devis : Transco SG Group', submit: 'Envoyer la demande', sending: 'Envoi en cours…', success: 'Merci. Nous avons bien reçu votre demande et nous vous répondrons par courriel.',
    error: 'Votre demande n’a pas pu être envoyée.', notConfigured: 'Le formulaire n’est pas encore activé : votre demande n’a pas été envoyée.', required: '(obligatoire)', fallback: 'Réessayez dans quelques minutes.',
  },
  privacy: {
    title: 'Confidentialité', lead: 'Ce que nous faisons des informations que vous nous envoyez.',
    blocks: [
      { title: 'Ce que nous collectons', text: 'Seulement ce que vous écrivez dans le formulaire : nom, entreprise, courriel, téléphone, produit, quantité, destination et message.' },
      { title: 'Pourquoi', text: 'Pour répondre à votre demande de devis. Nous n’utilisons pas ces informations pour de la publicité.' },
      { title: 'Comment', text: 'Le formulaire est traité par le service Formspree, qui nous transmet votre message par courriel.' },
      { title: 'Vos droits', text: 'Vous pouvez nous demander de corriger ou de supprimer votre demande en nous écrivant avec le même formulaire.' },
    ],
  },
};

const en: Dict = {
  meta: { title: 'Transco SG Group', description: 'Raw agricultural products from Cameroon, sorted and ready to export: cocoa, coffee, shea, Penja pepper, djansang.' },
  ui: {
    home: 'Transco SG Group, home', skip: 'Skip to main content', menu: 'Open menu', closeMenu: 'Close menu', nav: 'Main navigation', langLabel: 'Language',
    quote: 'Request a quote', quoteShort: 'Quote', seeProduce: 'See the produce', viewProduct: 'View product', discover: 'Learn more',
    footerAbout: 'Raw agricultural products from Cameroon, for buyers and processors.', footerNav: 'Navigation', footerLegal: 'Information', rights: 'All rights reserved.', contactNote: 'For any request, use the quote form. We reply by email.', pending: 'To be confirmed',
  },
  nav: { produce: 'Produce', origin: 'Origin', qualityExport: 'Quality and export', about: 'About', contact: 'Contact' },
  qe: { drying: ['Sorting, drying and packing', 'How lots are prepared before export'], inspection: ['Inspection and documents', 'What comes with each lot'], shipping: ['Shipping', 'From a Cameroonian port to your warehouse'] },
  home: {
    eyebrow: 'Transco SG Group · Cameroon',
    title: 'Agricultural produce from Cameroon, sorted and ready to export.',
    lead: 'Cocoa, coffee, shea nuts, Penja pepper and djansang, bought from Cameroonian growers and prepared for export.',
    proof: [{ label: 'Origin', value: 'Cameroon' }, { label: 'Produce', value: '5 raw products' }, { label: 'Languages', value: 'French and English' }],
    produceTitle: 'What we offer', produceIntro: 'Raw, unprocessed produce. Each offer states the form, the packaging and the minimum order.',
    howTitle: 'How an order works', howIntro: 'Four steps, from your request to shipping.',
    steps: [
      { title: 'Your request', text: 'Product, quantity and destination country.' },
      { title: 'Our offer', text: 'We reply by email with terms and lead times.' },
      { title: 'Sample and check', text: 'A sample can be prepared and checked before you order.' },
      { title: 'Shipping', text: 'Export documents and shipping with a freight forwarder.' },
    ],
    bandTitle: 'Tell us what you need.', bandText: 'Give us the product, the quantity and the destination. We reply by email.',
  },
  produce: {
    eyebrow: 'Produce', title: 'Our raw agricultural products', lead: 'Five products from Cameroon, sold without processing. Request a quote to get the price, packaging and lead time.',
    specTitle: 'Product sheet', spec: { origin: 'Origin', form: 'Form', packaging: 'Packaging', moq: 'Minimum order', terms: 'Shipping terms', docs: 'Documents' }, tbc: 'Confirmed with the offer',
    included: 'Included in the offer', excluded: 'Not included', suited: 'Suited for',
    includedItems: ['Price and packaging confirmed in writing', 'Sample on request', 'Export documents'], excludedItems: ['Processing the product', 'Customs clearance in the destination country'],
  },
  origin: {
    eyebrow: 'Origin', title: 'From Cameroon, from crop to export', lead: 'Here is where these crops grow in Cameroon. Our buying areas are stated in each offer.',
    areas: [
      { name: 'Cocoa', text: 'Grown mostly in the Centre, South, South-West, Littoral and East regions.' },
      { name: 'Coffee', text: 'Arabica grows at altitude, in the West and North-West. Robusta grows in lower areas of the Littoral and Centre.' },
      { name: 'Shea', text: 'Grows in the northern regions: Adamawa, North and Far North.' },
      { name: 'Penja pepper', text: 'Grown around Penja, in the Littoral region, and protected by a geographical indication.' },
      { name: 'Djansang', text: 'Comes from the forest areas in the south of the country.' },
    ],
    note: 'This describes where the crops grow across the country. The growers and cooperatives we work with will be introduced here once they have confirmed their participation.',
    calendarTitle: 'Harvest calendar', calendarText: 'The availability calendar for each product will be published here. Meanwhile, state the period you need in your quote request.',
  },
  qualityExport: {
    eyebrow: 'Quality and export', title: 'Prepare, check, ship', lead: 'What we do between the field and the port, and what comes with each lot.',
    stepsTitle: 'From harvest to port',
    steps: [
      { title: 'Sorting', text: 'Damaged beans and foreign matter are removed.' },
      { title: 'Drying', text: 'Drying brings the product to a moisture level suited to storage.' },
      { title: 'Packing', text: 'Lots are bagged and labelled.' },
      { title: 'Checking', text: 'A sample of each lot can be inspected by an independent third party, at the buyer’s request.' },
      { title: 'Documents', text: 'Commercial and export documents are prepared for each shipment.' },
      { title: 'Shipping', text: 'We work with a freight forwarder to the destination port.' },
    ],
    docsTitle: 'Documents that come with a lot', docs: ['Commercial invoice and packing list', 'Certificate of origin', 'Phytosanitary certificate, depending on the product', 'Inspection report, if requested'],
    faqTitle: 'Frequently asked questions',
    faq: [
      { q: 'What is the minimum order?', a: 'It depends on the product. It is stated in each offer.' },
      { q: 'Can I get a sample?', a: 'Yes, on request. State the product and the delivery address in the form.' },
      { q: 'Who pays for the third-party inspection?', a: 'It is agreed with the buyer before the order.' },
      { q: 'What lead times should I expect?', a: 'They depend on the product, the season and the destination. They are confirmed in the offer.' },
    ],
  },
  about: {
    eyebrow: 'About', title: 'Transco SG Group', lead: 'A Cameroonian company that prepares and exports raw agricultural products.',
    blocks: [
      { title: 'What we do', text: 'We buy agricultural products from Cameroonian growers, sort and pack them, then arrange the export.' },
      { title: 'What we do not do', text: 'We do not process the products. We sell raw produce.' },
      { title: 'How we work', text: 'Each offer is written down: product, form, packaging, minimum order, shipping terms and lead time.' },
    ],
  },
  contact: { eyebrow: 'Contact', title: 'Let’s talk about what you need', lead: 'The quote form is the fastest way to reach us.', direct: 'Other requests', directText: 'For a question that is not a quote request, write to us with the same form and choose “Other product or question”.' },
  request: {
    eyebrow: 'Quote', title: 'Request a quote', lead: 'Tell us the product, the quantity and the destination. We reply by email with our terms.',
    stepsTitle: 'What happens next',
    steps: [
      { title: 'We read your request', text: 'We check the product, the quantity and the destination.' },
      { title: 'We reply by email', text: 'You get the terms, the packaging and the lead times.' },
      { title: 'Sample, if needed', text: 'We prepare a sample before you order.' },
    ],
    formTitle: 'Your request',
  },
  form: {
    name: 'Name', company: 'Company', email: 'Email', phone: 'Phone', produce: 'Product', quantity: 'Quantity needed', destination: 'Destination country', message: 'Message', any: 'Other product or question',
    subject: 'Quote request: Transco SG Group', submit: 'Send request', sending: 'Sending…', success: 'Thank you. We have received your request and will reply by email.',
    error: 'Your request could not be sent.', notConfigured: 'The form is not active yet: your request was not sent.', required: '(required)', fallback: 'Please try again in a few minutes.',
  },
  privacy: {
    title: 'Privacy', lead: 'What we do with the information you send us.',
    blocks: [
      { title: 'What we collect', text: 'Only what you write in the form: name, company, email, phone, product, quantity, destination and message.' },
      { title: 'Why', text: 'To answer your quote request. We do not use this information for advertising.' },
      { title: 'How', text: 'The form is processed by the Formspree service, which forwards your message to us by email.' },
      { title: 'Your rights', text: 'You can ask us to correct or delete your request by writing to us with the same form.' },
    ],
  },
};

export const getDict = (l: Locale): Dict => (l === 'fr' ? fr : en);
