import type { Locale } from './i18n';

/** Results copied from the Bureau Veritas Douala quality certificates, issued 27 October 2026. */
export const lots = [
  {
    lot: 'SG 001', certificate: 'DLA/9/2026/078/4/001', received: '2026-10-26', issued: '2026-10-27',
    moisture: 7.66, sampleGrams: 2514, beansPer100g: 84, crm: 0.34,
    mouldy: 0.66, insect: 0, slaty: 9.33, germinated: 0, violet: 8.0, grade: 'FF' as const,
  },
  {
    lot: 'SG 002', certificate: 'DLA/9/2026/078/4/002', received: '2026-10-26', issued: '2026-10-27',
    moisture: 8.23, sampleGrams: 3050, beansPer100g: 83, crm: 1.66,
    mouldy: 0.33, insect: 0, slaty: 2.33, germinated: 0, violet: 8.66, grade: 'GF' as const,
  },
];

type Copy = {
  metaTitle: string; metaDesc: string; eyebrow: string; title: string; lead: string;
  howTitle: string; how: { title: string; text: string }[];
  resultsTitle: string; resultsIntro: string; caption: string;
  rows: { moisture: string; beans: string; crm: string; mouldy: string; insect: string; slaty: string; germinated: string; violet: string; grade: string; sensory: string; sample: string; cert: string; issued: string };
  gradeNames: { GF: string; FF: string }; sensoryOk: string; unitPct: string;
  noteTitle: string; note: string;
  beyondTitle: string; beyond: string[];
  ctaTitle: string; ctaText: string; ctaBtn: string; samplesBtn: string;
};

export const qualityCopy: Record<Locale, Copy> = {
  en: {
    metaTitle: 'Quality control: independent cocoa analysis by Bureau Veritas',
    metaDesc: 'Cocoa lots tested by Bureau Veritas Douala: moisture, defects, cut test and grade, with the certificate number for each lot.',
    eyebrow: 'Quality control', title: 'Every lot is tested by someone else.',
    lead: 'We do not grade our own cocoa. Bureau Veritas, an independent inspection company, analyses samples and issues a certificate for each lot.',
    howTitle: 'What is checked',
    how: [
      { title: 'Moisture', text: 'Measured on a sample, because wet beans mould in transit.' },
      { title: 'Defects and foreign matter', text: 'The sample is sieved and sorted: flat beans, clusters, broken beans, fragments and shell.' },
      { title: 'Cut test on 300 beans', text: 'Beans are cut open and counted for mould, insect damage, slaty, germinated and violet beans.' },
      { title: 'Grade and smell', text: 'The lot is classed (Good Fermented, Fair Fermented or Fair Average Fermented) and checked for off-odours.' },
    ],
    resultsTitle: 'Recent results', resultsIntro: 'Two cocoa lots analysed in October 2026. Figures are as printed on the certificates.', caption: 'Bureau Veritas Douala analysis results for cocoa lots SG 001 and SG 002',
    rows: { moisture: 'Moisture', beans: 'Beans per 100 g', crm: 'Total CRM', mouldy: 'Mouldy beans', insect: 'Insect-damaged beans', slaty: 'Slaty beans', germinated: 'Germinated beans', violet: 'Violet beans', grade: 'Classification', sensory: 'Smell', sample: 'Sample weight', cert: 'Certificate no.', issued: 'Issued' },
    gradeNames: { GF: 'Good Fermented (GF)', FF: 'Fair Fermented (FF)' }, sensoryOk: 'Typical cocoa odour, no contamination', unitPct: '%',
    noteTitle: 'Read this first',
    note: 'As stated on the certificates, results apply to samples taken by the client (TransWorld SG Consulting Group Inc.). They describe the sample, not every bag in a shipment. Ask us for the certificate of the lot you are buying.',
    beyondTitle: 'What happens next', beyond: ['Request samples of the lot you are interested in.', 'We send the certificate with the quote.', 'You can have your own lab or inspector verify before you commit.'],
    ctaTitle: 'Want the certificate for a lot?', ctaText: 'Tell us the product and quantity. We reply with the certificate and a quote.', ctaBtn: 'Request a quote', samplesBtn: 'Request samples',
  },
  fr: {
    metaTitle: 'Contrôle qualité : analyses indépendantes du cacao par Bureau Veritas',
    metaDesc: 'Lots de cacao analysés par Bureau Veritas Douala : humidité, défauts, test à la coupe et classement, avec le numéro de certificat de chaque lot.',
    eyebrow: 'Contrôle qualité', title: 'Chaque lot est analysé par un tiers.',
    lead: 'Nous ne classons pas notre propre cacao. Bureau Veritas, société d’inspection indépendante, analyse des échantillons et délivre un certificat pour chaque lot.',
    howTitle: 'Ce qui est vérifié',
    how: [
      { title: 'Humidité', text: 'Mesurée sur un échantillon, car des fèves humides moisissent pendant le transport.' },
      { title: 'Défauts et matières étrangères', text: 'L’échantillon est tamisé et trié : fèves plates, grappes, fèves cassées, fragments et coques.' },
      { title: 'Test à la coupe sur 300 fèves', text: 'Les fèves sont coupées et comptées : moisies, attaquées par les insectes, ardoisées, germées et violettes.' },
      { title: 'Classement et odeur', text: 'Le lot est classé (Good Fermented, Fair Fermented ou Fair Average Fermented) et contrôlé pour les odeurs anormales.' },
    ],
    resultsTitle: 'Résultats récents', resultsIntro: 'Deux lots de cacao analysés en octobre 2026. Les chiffres sont ceux imprimés sur les certificats.', caption: 'Résultats d’analyse de Bureau Veritas Douala pour les lots de cacao SG 001 et SG 002',
    rows: { moisture: 'Humidité', beans: 'Fèves par 100 g', crm: 'Total CRM', mouldy: 'Fèves moisies', insect: 'Fèves attaquées par les insectes', slaty: 'Fèves ardoisées', germinated: 'Fèves germées', violet: 'Fèves violettes', grade: 'Classement', sensory: 'Odeur', sample: 'Poids de l’échantillon', cert: 'N° de certificat', issued: 'Émis le' },
    gradeNames: { GF: 'Good Fermented (GF)', FF: 'Fair Fermented (FF)' }, sensoryOk: 'Odeur typique du cacao, aucune contamination', unitPct: ' %',
    noteTitle: 'À lire d’abord',
    note: 'Comme l’indiquent les certificats, les résultats portent sur des échantillons prélevés par le client (TransWorld SG Consulting Group Inc.). Ils décrivent l’échantillon, pas chaque sac d’une expédition. Demandez-nous le certificat du lot que vous achetez.',
    beyondTitle: 'La suite', beyond: ['Demandez des échantillons du lot qui vous intéresse.', 'Nous joignons le certificat au devis.', 'Vous pouvez faire vérifier par votre propre laboratoire ou inspecteur avant de vous engager.'],
    ctaTitle: 'Vous voulez le certificat d’un lot ?', ctaText: 'Indiquez le produit et la quantité. Nous répondons avec le certificat et un devis.', ctaBtn: 'Demander un devis', samplesBtn: 'Demander des échantillons',
  },
  es: {
    metaTitle: 'Control de calidad: análisis independiente del cacao por Bureau Veritas',
    metaDesc: 'Lotes de cacao analizados por Bureau Veritas Douala: humedad, defectos, prueba de corte y clasificación, con el número de certificado de cada lote.',
    eyebrow: 'Control de calidad', title: 'Cada lote lo analiza un tercero.',
    lead: 'No clasificamos nuestro propio cacao. Bureau Veritas, una empresa de inspección independiente, analiza muestras y emite un certificado por cada lote.',
    howTitle: 'Qué se comprueba',
    how: [
      { title: 'Humedad', text: 'Se mide en una muestra, porque los granos húmedos se enmohecen durante el transporte.' },
      { title: 'Defectos y materias extrañas', text: 'La muestra se tamiza y se clasifica: granos planos, racimos, granos rotos, fragmentos y cáscara.' },
      { title: 'Prueba de corte en 300 granos', text: 'Se cortan y se cuentan los granos mohosos, dañados por insectos, pizarrosos, germinados y violetas.' },
      { title: 'Clasificación y olor', text: 'El lote se clasifica (Good Fermented, Fair Fermented o Fair Average Fermented) y se comprueba que no haya olores extraños.' },
    ],
    resultsTitle: 'Resultados recientes', resultsIntro: 'Dos lotes de cacao analizados en octubre de 2026. Las cifras son las impresas en los certificados.', caption: 'Resultados de análisis de Bureau Veritas Douala para los lotes de cacao SG 001 y SG 002',
    rows: { moisture: 'Humedad', beans: 'Granos por 100 g', crm: 'Total CRM', mouldy: 'Granos mohosos', insect: 'Granos dañados por insectos', slaty: 'Granos pizarrosos', germinated: 'Granos germinados', violet: 'Granos violetas', grade: 'Clasificación', sensory: 'Olor', sample: 'Peso de la muestra', cert: 'N.º de certificado', issued: 'Emitido' },
    gradeNames: { GF: 'Good Fermented (GF)', FF: 'Fair Fermented (FF)' }, sensoryOk: 'Olor típico del cacao, sin contaminación', unitPct: ' %',
    noteTitle: 'Lea esto primero',
    note: 'Como indican los certificados, los resultados corresponden a muestras tomadas por el cliente (TransWorld SG Consulting Group Inc.). Describen la muestra, no cada saco de un envío. Solicítenos el certificado del lote que va a comprar.',
    beyondTitle: 'Qué sigue', beyond: ['Solicite muestras del lote que le interesa.', 'Enviamos el certificado con el presupuesto.', 'Puede hacer verificar el lote por su propio laboratorio o inspector antes de comprometerse.'],
    ctaTitle: '¿Quiere el certificado de un lote?', ctaText: 'Indíquenos el producto y la cantidad. Respondemos con el certificado y un presupuesto.', ctaBtn: 'Solicitar un presupuesto', samplesBtn: 'Solicitar muestras',
  },
};
