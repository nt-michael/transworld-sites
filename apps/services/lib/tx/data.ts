import {
  careerAreas,
  farmToMarket,
  groupFlow,
  howItWorks,
  placeLabel,
  products,
  sourcingWork,
  specRows,
  team,
  tradeServices,
  type Place,
} from '../content';
import type { Locale } from '../i18n';

type Pair = { title: string; text: string };

export type Data = {
  groupFlow: Pair[];
  team: { role: string; text: string }[];
  careerAreas: Pair[];
  farm: Pair[];
  place: Record<Place, string>;
  how: Pair[];
  specRows: string[];
  origin: string;
  africa: string;
  products: { name: string; blurb: string; buyers?: string }[];
  tradeServices: Pair[];
  sourcingWork: Pair[];
};

const en: Data = {
  groupFlow,
  team: team.map(({ role, text }) => ({ role, text })),
  careerAreas,
  farm: farmToMarket.map(({ title, text }) => ({ title, text })),
  place: placeLabel,
  how: howItWorks,
  specRows,
  origin: 'Origin',
  africa: 'Africa',
  products: products.map(({ name, blurb, buyers }) => ({ name, blurb, buyers })),
  tradeServices,
  sourcingWork,
};

const fr: Data = {
  groupFlow: [
    { title: 'Producteurs et fournisseurs', text: 'Agriculteurs, coopératives et transformateurs.' },
    { title: 'Procurement & Sourcing', text: 'Trouve les fournisseurs, vérifie la qualité et prépare chaque commande.' },
    { title: 'Global Trade', text: 'Importe, trouve des marchés et gère la distribution.' },
    { title: 'Acheteurs', text: 'Transformateurs, distributeurs et détaillants.' },
  ],
  team: [
    { role: 'Direction du groupe', text: 'Donne l’orientation du groupe et de ses trois filiales.' },
    { role: 'Responsable de Property Services', text: 'Dirige les équipes, les horaires et les contrôles de qualité pour les immeubles commerciaux.' },
    { role: 'Responsable de Global Trade', text: 'Dirige l’importation, la distribution et les relations avec les acheteurs.' },
    { role: 'Responsable de Procurement & Sourcing', text: 'Dirige la recherche de fournisseurs, les achats, le contrôle de la qualité et la préparation à l’exportation.' },
  ],
  careerAreas: [
    { title: 'Property Services', text: 'Équipes de nettoyage, de cloisons sèches, de démolition et de déménagement, et les superviseurs qui les dirigent.' },
    { title: 'Global Trade', text: 'Ventes, importation, distribution et coordination logistique.' },
    { title: 'Procurement & Sourcing', text: 'Recherche de fournisseurs, achats, contrôle de la qualité et documents d’exportation.' },
    { title: 'Soutien au groupe', text: 'Administration, comptabilité, service à la clientèle et communications.' },
  ],
  farm: [
    { title: 'Producteurs', text: 'Les agriculteurs et les coopératives cultivent et récoltent.' },
    { title: 'Achats', text: 'Notre équipe d’approvisionnement choisit les fournisseurs et achète le produit.' },
    { title: 'Contrôle de la qualité', text: 'Chaque lot est échantillonné et vérifié avant d’être accepté.' },
    { title: 'Transformation et préparation', text: 'Les lots sont triés, emballés et préparés pour l’expédition.' },
    { title: 'Documents d’exportation', text: 'Les documents commerciaux sont préparés avec les transitaires.' },
    { title: 'Logistique internationale', text: 'Les deux filiales coordonnent l’expédition jusqu’à destination.' },
    { title: 'Arrivée à destination', text: 'Global Trade reçoit les marchandises et s’occupe des formalités d’importation.' },
    { title: 'Distribution', text: 'Les produits sont livrés aux acheteurs dans les quantités convenues.' },
    { title: 'Clients et partenaires', text: 'Chocolatiers, transformateurs, distributeurs et détaillants.' },
  ],
  place: { sourcing: 'Procurement & Sourcing', both: 'Les deux filiales', trade: 'Global Trade' },
  how: [
    { title: 'Demande', text: 'Dites-nous le travail et le lieu.' },
    { title: 'Visite et estimation', text: 'Nous visitons les lieux et envoyons un prix écrit.' },
    { title: 'Travaux planifiés', text: 'L’équipe arrive à la date convenue.' },
    { title: 'Visite finale', text: 'Nous vérifions le résultat avec vous.' },
  ],
  specRows: ['Qualité', 'Emballage', 'Commande minimale', 'Disponibilité', 'Conditions d’expédition'],
  origin: 'Origine',
  africa: 'Afrique',
  products: [
    { name: 'Fèves de cacao', blurb: 'Fèves de cacao choisies auprès de producteurs africains pour leur arôme et leur richesse naturelle.', buyers: 'Chocolatiers, transformateurs alimentaires, distributeurs et entreprises qui fabriquent des produits à base de cacao.' },
    { name: 'Café', blurb: 'Choisi pour son goût riche, son arôme équilibré et sa qualité constante.' },
    { name: 'Beurre de cacao', blurb: 'Beurre de cacao naturel pour les industries alimentaire, cosmétique et pharmaceutique.' },
    { name: 'Beurre de karité', blurb: 'Beurre de karité pur et non raffiné, reconnu pour ses propriétés nourrissantes et protectrices.' },
    { name: 'Poivre de Penja', blurb: 'Une épice du Cameroun au parfum puissant et aux notes boisées et épicées.' },
    { name: 'Djansang', blurb: 'Graines africaines traditionnelles qui donnent aux plats une saveur distinctive.' },
  ],
  tradeServices: [
    { title: 'Importation', text: 'Nous importons des produits agricoles sélectionnés auprès de producteurs africains, avec un approvisionnement traçable jusqu’à son origine.' },
    { title: 'Distribution', text: 'Nous approvisionnons les transformateurs, chocolatiers, distributeurs, détaillants, restaurants et épiceries fines.' },
    { title: 'Approvisionnement B2B', text: 'Un approvisionnement en volume adapté à vos besoins de quantité, de qualité, d’emballage, d’origine et de livraison.' },
    { title: 'Logistique et coordination des exportations', text: 'Préparation des produits, emballage, documents commerciaux, inspections de qualité et partenaires de transport.' },
  ],
  sourcingWork: [
    { title: 'Recherche de fournisseurs', text: 'Nous repérons les producteurs, coopératives, transformateurs et entreprises locales.' },
    { title: 'Achats', text: 'Nous achetons du cacao, du beurre de karité et d’autres produits agricoles à l’origine.' },
    { title: 'Contrôle de la qualité', text: 'Nous sélectionnons les produits, prélevons des échantillons et vérifions chaque lot.' },
    { title: 'Préparation à l’exportation', text: 'Nous préparons les documents et les marchandises, et nous coordonnons avec les transitaires.' },
    { title: 'Développement de fournisseurs', text: 'Nous cherchons de nouveaux produits et de nouveaux fournisseurs pour les acheteurs internationaux.' },
  ],
};

const es: Data = {
  groupFlow: [
    { title: 'Productores y proveedores', text: 'Agricultores, cooperativas y procesadores.' },
    { title: 'Procurement & Sourcing', text: 'Encuentra proveedores, comprueba la calidad y prepara cada pedido.' },
    { title: 'Global Trade', text: 'Importa, encuentra mercados y gestiona la distribución.' },
    { title: 'Compradores', text: 'Procesadores, distribuidores y minoristas.' },
  ],
  team: [
    { role: 'Dirección del grupo', text: 'Marca el rumbo del grupo y de sus tres filiales.' },
    { role: 'Responsable de Property Services', text: 'Dirige los equipos, los horarios y los controles de calidad de los inmuebles comerciales.' },
    { role: 'Responsable de Global Trade', text: 'Dirige la importación, la distribución y la relación con los compradores.' },
    { role: 'Responsable de Procurement & Sourcing', text: 'Dirige la búsqueda de proveedores, las compras, el control de calidad y la preparación para la exportación.' },
  ],
  careerAreas: [
    { title: 'Property Services', text: 'Equipos de limpieza, paneles de yeso, demolición y mudanzas, y los supervisores que los dirigen.' },
    { title: 'Global Trade', text: 'Ventas, importación, distribución y coordinación logística.' },
    { title: 'Procurement & Sourcing', text: 'Búsqueda de proveedores, compras, control de calidad y documentos de exportación.' },
    { title: 'Apoyo al grupo', text: 'Administración, contabilidad, atención al cliente y comunicaciones.' },
  ],
  farm: [
    { title: 'Productores', text: 'Agricultores y cooperativas cultivan y cosechan.' },
    { title: 'Compras', text: 'Nuestro equipo de abastecimiento elige a los proveedores y compra el producto.' },
    { title: 'Control de calidad', text: 'Cada lote se muestrea y se revisa antes de aceptarlo.' },
    { title: 'Procesamiento y preparación', text: 'Los lotes se seleccionan, se embalan y se preparan para el envío.' },
    { title: 'Documentos de exportación', text: 'Los documentos comerciales se preparan con los transitarios.' },
    { title: 'Logística internacional', text: 'Ambas filiales coordinan el envío hasta su destino.' },
    { title: 'Llegada a destino', text: 'Global Trade recibe la mercancía y se ocupa de los trámites de importación.' },
    { title: 'Distribución', text: 'Los productos se entregan a los compradores en las cantidades acordadas.' },
    { title: 'Clientes y socios', text: 'Chocolateros, procesadores, distribuidores y minoristas.' },
  ],
  place: { sourcing: 'Procurement & Sourcing', both: 'Ambas filiales', trade: 'Global Trade' },
  how: [
    { title: 'Solicitud', text: 'Cuéntenos el trabajo y el lugar.' },
    { title: 'Visita y presupuesto', text: 'Visitamos el sitio y enviamos un precio por escrito.' },
    { title: 'Trabajo programado', text: 'El equipo llega en la fecha acordada.' },
    { title: 'Revisión final', text: 'Comprobamos el resultado con usted.' },
  ],
  specRows: ['Calidad', 'Embalaje', 'Pedido mínimo', 'Disponibilidad', 'Condiciones de envío'],
  origin: 'Origen',
  africa: 'África',
  products: [
    { name: 'Granos de cacao', blurb: 'Granos de cacao seleccionados de productores africanos por su aroma y su riqueza natural.', buyers: 'Chocolateros, procesadores de alimentos, distribuidores y empresas que fabrican productos a base de cacao.' },
    { name: 'Café', blurb: 'Elegido por su sabor intenso, su aroma equilibrado y su calidad constante.' },
    { name: 'Manteca de cacao', blurb: 'Manteca de cacao natural para las industrias alimentaria, cosmética y farmacéutica.' },
    { name: 'Manteca de karité', blurb: 'Manteca de karité pura y sin refinar, conocida por sus propiedades nutritivas y protectoras.' },
    { name: 'Pimienta de Penja', blurb: 'Una especia de Camerún de fragancia potente y notas amaderadas y picantes.' },
    { name: 'Djansang', blurb: 'Semillas africanas tradicionales que dan a los platos un sabor distintivo.' },
  ],
  tradeServices: [
    { title: 'Importación', text: 'Importamos productos agrícolas seleccionados de productores africanos, con un suministro trazable hasta su origen.' },
    { title: 'Distribución', text: 'Abastecemos a procesadores, chocolateros, distribuidores, minoristas, restaurantes y tiendas gourmet.' },
    { title: 'Suministro B2B', text: 'Suministro en volumen adaptado a sus necesidades de cantidad, calidad, embalaje, origen y entrega.' },
    { title: 'Logística y coordinación de exportaciones', text: 'Preparación de los productos, embalaje, documentos comerciales, inspecciones de calidad y socios de transporte.' },
  ],
  sourcingWork: [
    { title: 'Búsqueda de proveedores', text: 'Identificamos productores, cooperativas, procesadores y empresas locales.' },
    { title: 'Compras', text: 'Compramos cacao, manteca de karité y otros productos agrícolas en origen.' },
    { title: 'Control de calidad', text: 'Seleccionamos los productos, tomamos muestras y revisamos cada lote.' },
    { title: 'Preparación para la exportación', text: 'Preparamos los documentos y la mercancía, y nos coordinamos con los transitarios.' },
    { title: 'Desarrollo de proveedores', text: 'Buscamos nuevos productos y proveedores para compradores internacionales.' },
  ],
};

export const getData = (locale: Locale): Data => (locale === 'fr' ? fr : locale === 'es' ? es : en);
