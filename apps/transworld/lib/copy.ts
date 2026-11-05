import type { Locale } from './i18n';

type ByLocale<T> = Record<Locale, T>;

/** Menu copy. Subsidiary names are brand names and stay the same in every language. */
export const navCopy: ByLocale<{
  aboutIntro: string;
  aboutGroup: string;
  aboutLinks: [string, string, string];
  aboutWork: string;
  aboutFeature: [string, string];
  propertyIntro: string;
  propertyServices: string;
  propertyStart: string;
  propertyFeature: string;
  tradeIntro: string;
  tradeGroup: string;
  tradeFeature: [string, string];
  sourcingIntro: string;
  sourcingDo: string;
  sourcingWork: string;
  sourcingLinks: [string, string];
  sourcingFeature: [string, string];
}> = {
  en: {
    aboutIntro: 'Who we are, how we work with partner producers, and how we check quality.',
    aboutGroup: 'The group',
    aboutLinks: ['What we do', 'How it works', 'Company details'],
    aboutWork: 'Work with us',
    aboutFeature: ['One name, one standard', 'About the group'],
    propertyIntro: 'Cleaning, construction support and moving help for commercial properties.',
    propertyServices: 'Services',
    propertyStart: 'Get started',
    propertyFeature: 'Spaces ready to use',
    tradeIntro: 'Importation, distribution and market development for natural agricultural products from Africa.',
    tradeGroup: 'Trade',
    tradeFeature: ['From farm to global market', 'Follow the nine steps'],
    sourcingIntro: 'Supplier search, purchasing, quality control and export preparation, done at the source.',
    sourcingDo: 'What we do',
    sourcingWork: 'Work with us',
    sourcingLinks: ['What we source today', 'Our products'],
    sourcingFeature: ['Checked at the source', 'Ask us to source a product'],
  },
  fr: {
    aboutIntro: 'Qui nous sommes, comment nous travaillons avec des producteurs partenaires et comment nous contrôlons la qualité.',
    aboutGroup: 'Le groupe',
    aboutLinks: ['Ce que nous faisons', 'Comment ça fonctionne', 'Renseignements sur l’entreprise'],
    aboutWork: 'Travailler avec nous',
    aboutFeature: ['Un seul nom, une seule exigence', 'À propos du groupe'],
    propertyIntro: 'Nettoyage, soutien à la construction et aide au déménagement pour les immeubles commerciaux.',
    propertyServices: 'Services',
    propertyStart: 'Pour commencer',
    propertyFeature: 'Des espaces prêts à l’emploi',
    tradeIntro: 'Importation, distribution et développement de marchés pour des produits agricoles naturels d’Afrique.',
    tradeGroup: 'Commerce',
    tradeFeature: ['De la ferme au marché mondial', 'Suivre les neuf étapes'],
    sourcingIntro: 'Recherche de fournisseurs, achats, contrôle de la qualité et préparation à l’exportation, réalisés à la source.',
    sourcingDo: 'Ce que nous faisons',
    sourcingWork: 'Travailler avec nous',
    sourcingLinks: ['Ce que nous approvisionnons', 'Nos produits'],
    sourcingFeature: ['Vérifié à la source', 'Demandez-nous d’approvisionner un produit'],
  },
  es: {
    aboutIntro: 'Quiénes somos, cómo trabajamos con productores socios y cómo controlamos la calidad.',
    aboutGroup: 'El grupo',
    aboutLinks: ['Lo que hacemos', 'Cómo funciona', 'Datos de la empresa'],
    aboutWork: 'Trabaje con nosotros',
    aboutFeature: ['Un nombre, un estándar', 'Acerca del grupo'],
    propertyIntro: 'Limpieza, apoyo a la construcción y ayuda en mudanzas para inmuebles comerciales.',
    propertyServices: 'Servicios',
    propertyStart: 'Para empezar',
    propertyFeature: 'Espacios listos para usar',
    tradeIntro: 'Importación, distribución y desarrollo de mercados para productos agrícolas naturales de África.',
    tradeGroup: 'Comercio',
    tradeFeature: ['De la granja al mercado mundial', 'Siga los nueve pasos'],
    sourcingIntro: 'Búsqueda de proveedores, compras, control de calidad y preparación para la exportación, hechos en origen.',
    sourcingDo: 'Lo que hacemos',
    sourcingWork: 'Trabaje con nosotros',
    sourcingLinks: ['Lo que abastecemos hoy', 'Nuestros productos'],
    sourcingFeature: ['Comprobado en origen', 'Pídanos abastecer un producto'],
  },
};

export type SlideText = {
  label: string;
  eyebrow: string;
  title: string;
  text: string;
  primary: string;
  secondary: string;
};

export const homeSlides: ByLocale<SlideText[]> = {
  en: [
    { label: 'The company', eyebrow: 'TransWorld SG Consulting Group', title: 'Quality-checked African products for Canadian businesses.', text: 'We bring cocoa, shea butter and other agricultural products from trusted partner producers to Canada.', primary: 'About us', secondary: 'Contact us' },
    { label: 'Global Trade', eyebrow: 'Global Trade', title: 'African products for Canadian buyers.', text: 'Importation, distribution and market development for natural agricultural products.', primary: 'Explore Global Trade', secondary: 'See the products' },
    { label: 'Quality', eyebrow: 'Quality control', title: 'Each lot checked before it ships.', text: 'Samples are sent for independent third-party inspection before an order is confirmed.', primary: 'See how it works', secondary: 'Request samples' },
  ],
  fr: [
    { label: 'L’entreprise', eyebrow: 'TransWorld SG Consulting Group', title: 'Des produits africains contrôlés pour les entreprises canadiennes.', text: 'Nous apportons au Canada du cacao, du beurre de karité et d’autres produits agricoles de producteurs partenaires de confiance.', primary: 'À propos de nous', secondary: 'Nous contacter' },
    { label: 'Global Trade', eyebrow: 'Global Trade', title: 'Des produits africains pour les acheteurs canadiens.', text: 'Importation, distribution et développement de marchés pour des produits agricoles naturels.', primary: 'Découvrir Global Trade', secondary: 'Voir les produits' },
    { label: 'Qualité', eyebrow: 'Contrôle de la qualité', title: 'Chaque lot vérifié avant l’expédition.', text: 'Des échantillons sont envoyés pour une inspection indépendante par un tiers avant la confirmation d’une commande.', primary: 'Voir comment ça fonctionne', secondary: 'Demander des échantillons' },
  ],
  es: [
    { label: 'La empresa', eyebrow: 'TransWorld SG Consulting Group', title: 'Productos africanos con control de calidad para empresas canadienses.', text: 'Llevamos a Canadá cacao, manteca de karité y otros productos agrícolas de productores socios de confianza.', primary: 'Quiénes somos', secondary: 'Contáctenos' },
    { label: 'Global Trade', eyebrow: 'Global Trade', title: 'Productos africanos para compradores canadienses.', text: 'Importación, distribución y desarrollo de mercados para productos agrícolas naturales.', primary: 'Explorar Global Trade', secondary: 'Ver los productos' },
    { label: 'Calidad', eyebrow: 'Control de calidad', title: 'Cada lote revisado antes de enviarse.', text: 'Se envían muestras a una inspección independiente de un tercero antes de confirmar un pedido.', primary: 'Vea cómo funciona', secondary: 'Pedir muestras' },
  ],
};
