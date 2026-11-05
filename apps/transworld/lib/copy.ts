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
    aboutIntro: 'One group with three subsidiaries: Property Services, Global Trade, and Procurement & Sourcing.',
    aboutGroup: 'The group',
    aboutLinks: ['Our subsidiaries', 'How they work together', 'Registered companies'],
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
    aboutIntro: 'Un groupe, trois filiales : Property Services, Global Trade et Procurement & Sourcing.',
    aboutGroup: 'Le groupe',
    aboutLinks: ['Nos filiales', 'Comment elles travaillent ensemble', 'Sociétés enregistrées'],
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
    aboutIntro: 'Un grupo con tres filiales: Property Services, Global Trade y Procurement & Sourcing.',
    aboutGroup: 'El grupo',
    aboutLinks: ['Nuestras filiales', 'Cómo trabajan juntas', 'Empresas registradas'],
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
    { label: 'The group', eyebrow: 'TransWorld SG Consulting Group', title: 'Connecting Africa to global markets. Building better communities.', text: 'One group, three subsidiaries: Property Services, Global Trade, and Procurement & Sourcing.', primary: 'About the group', secondary: 'Contact us' },
    { label: 'Property Services', eyebrow: 'Property Services', title: 'Clean, safe, ready-to-use commercial spaces.', text: 'Cleaning, construction support and moving help for commercial properties.', primary: 'See the services', secondary: 'Get a quote' },
    { label: 'Global Trade', eyebrow: 'Global Trade', title: 'African products for international markets.', text: 'Importation, distribution and market development for natural agricultural products.', primary: 'Explore Global Trade', secondary: 'See the products' },
    { label: 'Procurement & Sourcing', eyebrow: 'Procurement & Sourcing', title: 'The right suppliers, checked at the source.', text: 'Supplier search, purchasing, quality control and export preparation for buyers who need products sourced at origin.', primary: 'Explore sourcing', secondary: 'Contact us' },
  ],
  fr: [
    { label: 'Le groupe', eyebrow: 'TransWorld SG Consulting Group', title: 'Relier l’Afrique aux marchés mondiaux. Bâtir de meilleures communautés.', text: 'Un groupe, trois filiales : Property Services, Global Trade et Procurement & Sourcing.', primary: 'À propos du groupe', secondary: 'Nous contacter' },
    { label: 'Property Services', eyebrow: 'Property Services', title: 'Des espaces commerciaux propres, sûrs et prêts à l’emploi.', text: 'Nettoyage, soutien à la construction et aide au déménagement pour les immeubles commerciaux.', primary: 'Voir les services', secondary: 'Obtenir un devis' },
    { label: 'Global Trade', eyebrow: 'Global Trade', title: 'Des produits africains pour les marchés internationaux.', text: 'Importation, distribution et développement de marchés pour des produits agricoles naturels.', primary: 'Découvrir Global Trade', secondary: 'Voir les produits' },
    { label: 'Procurement & Sourcing', eyebrow: 'Procurement & Sourcing', title: 'Les bons fournisseurs, vérifiés à la source.', text: 'Recherche de fournisseurs, achats, contrôle de la qualité et préparation à l’exportation pour les acheteurs qui veulent des produits approvisionnés à l’origine.', primary: 'Découvrir le sourcing', secondary: 'Nous contacter' },
  ],
  es: [
    { label: 'El grupo', eyebrow: 'TransWorld SG Consulting Group', title: 'Conectamos África con los mercados globales. Construimos mejores comunidades.', text: 'Un grupo, tres filiales: Property Services, Global Trade y Procurement & Sourcing.', primary: 'Acerca del grupo', secondary: 'Contáctenos' },
    { label: 'Property Services', eyebrow: 'Property Services', title: 'Espacios comerciales limpios, seguros y listos para usar.', text: 'Limpieza, apoyo a la construcción y ayuda en mudanzas para inmuebles comerciales.', primary: 'Ver los servicios', secondary: 'Pedir un presupuesto' },
    { label: 'Global Trade', eyebrow: 'Global Trade', title: 'Productos africanos para los mercados internacionales.', text: 'Importación, distribución y desarrollo de mercados para productos agrícolas naturales.', primary: 'Explorar Global Trade', secondary: 'Ver los productos' },
    { label: 'Procurement & Sourcing', eyebrow: 'Procurement & Sourcing', title: 'Los proveedores adecuados, comprobados en origen.', text: 'Búsqueda de proveedores, compras, control de calidad y preparación para la exportación para compradores que necesitan productos abastecidos en origen.', primary: 'Explorar el sourcing', secondary: 'Contáctenos' },
  ],
};
