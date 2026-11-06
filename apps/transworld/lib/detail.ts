import type { Locale } from './i18n';

export type Detail = {
  slug: string;
  name: string;
  blurb: string;
  overview: string;
  includes: string[];
  suitedFor: string[];
  note?: string;
};

type ByLocale<T> = Record<Locale, T>;

/** Labels shared by the detail pages, the partners page and the legal pages. */
export const pageText: ByLocale<{
  home: string;
  globalTrade: string;
  sourcing: string;
  included: string;
  goodFor: string;
  other: string;
  allTradeServices: string;
  tradeIntroEyebrow: string;
  tradeTitle: string;
  tradeLead: string;
  tradeIntro: string;
  learnMore: string;
  ctaTradeTitle: string;
  ctaTrade: string;
  ctaSourcingTitle: string;
  ctaSourcing: string;
  askQuote: string;
  lastUpdated: string;
  updated: string;
  contactUs: string;
  questions: string;
}> = {
  en: {
    home: 'Home',
    globalTrade: 'Global Trade',
    sourcing: 'Procurement & Sourcing',
    included: 'What is included',
    goodFor: 'Good for',
    other: 'Other services',
    allTradeServices: 'All trade services',
    tradeIntroEyebrow: 'Global Trade',
    tradeTitle: 'Trade services',
    tradeLead: 'Four services that take a product from its producer to your shelf or factory.',
    tradeIntro: 'Choose a service to see what it covers and who it is for.',
    learnMore: 'Learn more',
    ctaTradeTitle: 'Need a reliable supply of African products?',
    ctaTrade: 'Request a trade quote',
    ctaSourcingTitle: 'Tell us what you need sourced.',
    ctaSourcing: 'Contact us',
    askQuote: 'Request a trade quote',
    lastUpdated: 'Last updated',
    updated: 'October 2026',
    contactUs: 'Contact us',
    questions: 'Questions?',
  },
  fr: {
    home: 'Accueil',
    globalTrade: 'Global Trade',
    sourcing: 'Procurement & Sourcing',
    included: 'Ce qui est inclus',
    goodFor: 'Convient à',
    other: 'Autres services',
    allTradeServices: 'Tous les services commerciaux',
    tradeIntroEyebrow: 'Global Trade',
    tradeTitle: 'Services commerciaux',
    tradeLead: 'Quatre services qui mènent un produit de son producteur jusqu’à votre rayon ou votre usine.',
    tradeIntro: 'Choisissez un service pour voir ce qu’il couvre et à qui il s’adresse.',
    learnMore: 'En savoir plus',
    ctaTradeTitle: 'Besoin d’un approvisionnement fiable en produits africains ?',
    ctaTrade: 'Demander un devis commercial',
    ctaSourcingTitle: 'Dites-nous ce que vous voulez faire approvisionner.',
    ctaSourcing: 'Nous contacter',
    askQuote: 'Demander un devis commercial',
    lastUpdated: 'Dernière mise à jour',
    updated: 'octobre 2026',
    contactUs: 'Nous contacter',
    questions: 'Des questions ?',
  },
  es: {
    home: 'Inicio',
    globalTrade: 'Global Trade',
    sourcing: 'Procurement & Sourcing',
    included: 'Qué incluye',
    goodFor: 'Ideal para',
    other: 'Otros servicios',
    allTradeServices: 'Todos los servicios comerciales',
    tradeIntroEyebrow: 'Global Trade',
    tradeTitle: 'Servicios comerciales',
    tradeLead: 'Cuatro servicios que llevan un producto desde su productor hasta su estante o su fábrica.',
    tradeIntro: 'Elija un servicio para ver qué cubre y a quién va dirigido.',
    learnMore: 'Más información',
    ctaTradeTitle: '¿Necesita un suministro fiable de productos africanos?',
    ctaTrade: 'Solicitar un presupuesto comercial',
    ctaSourcingTitle: 'Díganos qué necesita que abastezcamos.',
    ctaSourcing: 'Contáctenos',
    askQuote: 'Solicitar un presupuesto comercial',
    lastUpdated: 'Última actualización',
    updated: 'octubre de 2026',
    contactUs: 'Contáctenos',
    questions: '¿Preguntas?',
  },
};

/* ------------------------------------------------------------------ */
/* Global Trade services                                               */
/* ------------------------------------------------------------------ */

export const tradeSlugs = ['importation', 'distribution', 'b2b-supply', 'logistics-export'] as const;

export const tradeDetails: ByLocale<Detail[]> = {
  en: [
    {
      slug: 'importation',
      name: 'Importation',
      blurb: 'Selected agricultural products from African producers, with supply that can be traced to its origin.',
      overview:
        'We import selected agricultural products from African producers into international markets. Each lot comes with documents and an origin record, so you know where it came from.',
      includes: [
        'Selection of products and lots at origin, with our sourcing team',
        'Import documents and customs coordination with licensed brokers',
        'Freight booking with forwarders and carriers',
        'Receiving and inspection on arrival',
        'Lot and origin records kept for traceability',
      ],
      suitedFor: ['Chocolatiers and food processors', 'Distributors and wholesalers', 'Cosmetic and pharmaceutical manufacturers'],
      note: 'Import rules depend on the product and the destination country. We confirm what applies before we quote.',
    },
    {
      slug: 'distribution',
      name: 'Distribution',
      blurb: 'Supply for processors, chocolatiers, distributors, retailers, restaurants and specialty grocers.',
      overview:
        'We supply processors, chocolatiers, distributors, retailers, restaurants and specialty grocers, in the quantities and on the schedule we agree together.',
      includes: [
        'Delivery of the agreed quantities to the agreed address',
        'One-off or recurring supply plans',
        'Packaging suited to the buyer',
        'Order updates from dispatch to delivery',
        'A contact for follow-up after delivery',
      ],
      suitedFor: ['Processors and chocolatiers', 'Retailers and specialty grocers', 'Restaurants and food service'],
    },
    {
      slug: 'b2b-supply',
      name: 'B2B supply',
      blurb: 'Volume supply shaped to your quantity, quality, packaging, origin and delivery needs.',
      overview:
        'Volume supply shaped to your quantity, quality, packaging, origin and delivery needs. You give us the specification, and we tell you plainly what we can supply.',
      includes: [
        'A written specification for each product',
        'Sample requests reviewed case by case',
        'A quote with quantity, packaging and shipping terms',
        'Repeat orders at agreed intervals',
        'One contact for the whole order',
      ],
      suitedFor: [
        'Manufacturers that need steady volume',
        'Buyers adding or replacing a supplier',
        'Companies launching a new product line',
      ],
    },
    {
      slug: 'logistics-export',
      name: 'Logistics and export coordination',
      blurb: 'Preparation, packaging, documents, quality inspections and transport partners.',
      overview:
        'Product preparation, packaging, commercial documents, quality inspections and transport partners, coordinated so a shipment leaves the origin complete.',
      includes: [
        'Sorting, packing and labelling of each lot',
        'Commercial documents prepared with freight forwarders',
        'Pre-shipment quality inspection',
        'Choice of transport partners and routes',
        'Shipment follow-up until arrival',
      ],
      suitedFor: ['Buyers who want one coordinator from origin to destination', 'Suppliers preparing their first export shipment'],
    },
  ],
  fr: [
    {
      slug: 'importation',
      name: 'Importation',
      blurb: 'Des produits agricoles sélectionnés auprès de producteurs africains, avec un approvisionnement traçable jusqu’à son origine.',
      overview:
        'Nous importons des produits agricoles sélectionnés auprès de producteurs africains vers les marchés internationaux. Chaque lot est accompagné de documents et d’un dossier d’origine : vous savez d’où il vient.',
      includes: [
        'Sélection des produits et des lots à l’origine, avec notre équipe d’approvisionnement',
        'Documents d’importation et coordination douanière avec des courtiers agréés',
        'Réservation du fret auprès de transitaires et de transporteurs',
        'Réception et inspection à l’arrivée',
        'Dossiers de lot et d’origine conservés pour la traçabilité',
      ],
      suitedFor: ['Chocolatiers et transformateurs alimentaires', 'Distributeurs et grossistes', 'Fabricants de cosmétiques et de produits pharmaceutiques'],
      note: 'Les règles d’importation dépendent du produit et du pays de destination. Nous confirmons ce qui s’applique avant de vous remettre un devis.',
    },
    {
      slug: 'distribution',
      name: 'Distribution',
      blurb: 'Approvisionnement des transformateurs, chocolatiers, distributeurs, détaillants, restaurants et épiceries fines.',
      overview:
        'Nous approvisionnons les transformateurs, chocolatiers, distributeurs, détaillants, restaurants et épiceries fines, dans les quantités et selon le calendrier convenus ensemble.',
      includes: [
        'Livraison des quantités convenues à l’adresse convenue',
        'Plans d’approvisionnement ponctuels ou récurrents',
        'Emballage adapté à l’acheteur',
        'Suivi de la commande, de l’expédition à la livraison',
        'Un interlocuteur pour le suivi après la livraison',
      ],
      suitedFor: ['Transformateurs et chocolatiers', 'Détaillants et épiceries fines', 'Restaurants et services alimentaires'],
    },
    {
      slug: 'b2b-supply',
      name: 'Approvisionnement B2B',
      blurb: 'Approvisionnement en volume adapté à vos besoins de quantité, de qualité, d’emballage, d’origine et de livraison.',
      overview:
        'Un approvisionnement en volume adapté à vos besoins de quantité, de qualité, d’emballage, d’origine et de livraison. Vous nous donnez la spécification ; nous vous disons franchement ce que nous pouvons fournir.',
      includes: [
        'Une spécification écrite pour chaque produit',
        'Demandes d’échantillons examinées au cas par cas',
        'Un devis précisant quantité, emballage et conditions d’expédition',
        'Commandes récurrentes à intervalles convenus',
        'Un seul interlocuteur pour toute la commande',
      ],
      suitedFor: [
        'Fabricants qui ont besoin d’un volume régulier',
        'Acheteurs qui ajoutent ou remplacent un fournisseur',
        'Entreprises qui lancent une nouvelle gamme de produits',
      ],
    },
    {
      slug: 'logistics-export',
      name: 'Logistique et coordination des exportations',
      blurb: 'Préparation, emballage, documents, inspections de qualité et partenaires de transport.',
      overview:
        'Préparation des produits, emballage, documents commerciaux, inspections de qualité et partenaires de transport, coordonnés pour qu’une expédition quitte l’origine complète.',
      includes: [
        'Tri, emballage et étiquetage de chaque lot',
        'Documents commerciaux préparés avec les transitaires',
        'Inspection de qualité avant l’expédition',
        'Choix des partenaires de transport et des itinéraires',
        'Suivi de l’expédition jusqu’à l’arrivée',
      ],
      suitedFor: ['Acheteurs qui veulent un seul coordonnateur de l’origine à la destination', 'Fournisseurs qui préparent leur première expédition à l’export'],
    },
  ],
  es: [
    {
      slug: 'importation',
      name: 'Importación',
      blurb: 'Productos agrícolas seleccionados de productores africanos, con un suministro trazable hasta su origen.',
      overview:
        'Importamos productos agrícolas seleccionados de productores africanos hacia los mercados internacionales. Cada lote viene con documentos y un registro de origen, para que sepa de dónde procede.',
      includes: [
        'Selección de productos y lotes en origen, con nuestro equipo de abastecimiento',
        'Documentos de importación y coordinación aduanera con agentes autorizados',
        'Reserva de flete con transitarios y transportistas',
        'Recepción e inspección a la llegada',
        'Registros de lote y de origen conservados para la trazabilidad',
      ],
      suitedFor: ['Chocolateros y procesadores de alimentos', 'Distribuidores y mayoristas', 'Fabricantes de cosméticos y de productos farmacéuticos'],
      note: 'Las normas de importación dependen del producto y del país de destino. Confirmamos lo que se aplica antes de enviarle un presupuesto.',
    },
    {
      slug: 'distribution',
      name: 'Distribución',
      blurb: 'Suministro para procesadores, chocolateros, distribuidores, minoristas, restaurantes y tiendas gourmet.',
      overview:
        'Abastecemos a procesadores, chocolateros, distribuidores, minoristas, restaurantes y tiendas gourmet, en las cantidades y según el calendario que acordemos juntos.',
      includes: [
        'Entrega de las cantidades acordadas en la dirección acordada',
        'Planes de suministro puntuales o recurrentes',
        'Embalaje adaptado al comprador',
        'Información del pedido desde el envío hasta la entrega',
        'Un contacto para el seguimiento posterior a la entrega',
      ],
      suitedFor: ['Procesadores y chocolateros', 'Minoristas y tiendas gourmet', 'Restaurantes y servicios de alimentación'],
    },
    {
      slug: 'b2b-supply',
      name: 'Suministro B2B',
      blurb: 'Suministro en volumen adaptado a sus necesidades de cantidad, calidad, embalaje, origen y entrega.',
      overview:
        'Suministro en volumen adaptado a sus necesidades de cantidad, calidad, embalaje, origen y entrega. Usted nos da la especificación y nosotros le decimos con claridad qué podemos suministrar.',
      includes: [
        'Una especificación escrita para cada producto',
        'Solicitudes de muestras revisadas caso por caso',
        'Un presupuesto con cantidad, embalaje y condiciones de envío',
        'Pedidos recurrentes a intervalos acordados',
        'Un único contacto para todo el pedido',
      ],
      suitedFor: [
        'Fabricantes que necesitan un volumen constante',
        'Compradores que añaden o sustituyen a un proveedor',
        'Empresas que lanzan una nueva línea de productos',
      ],
    },
    {
      slug: 'logistics-export',
      name: 'Logística y coordinación de exportaciones',
      blurb: 'Preparación, embalaje, documentos, inspecciones de calidad y socios de transporte.',
      overview:
        'Preparación de los productos, embalaje, documentos comerciales, inspecciones de calidad y socios de transporte, coordinados para que un envío salga completo del origen.',
      includes: [
        'Selección, embalaje y etiquetado de cada lote',
        'Documentos comerciales preparados con los transitarios',
        'Inspección de calidad antes del envío',
        'Elección de socios de transporte y de rutas',
        'Seguimiento del envío hasta su llegada',
      ],
      suitedFor: ['Compradores que quieren un solo coordinador del origen al destino', 'Proveedores que preparan su primer envío de exportación'],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Procurement & Sourcing pages                                        */
/* ------------------------------------------------------------------ */

export const sourcingSlugs = [
  'supplier-search',
  'procurement',
  'quality-control',
  'export-preparation',
  'supplier-development',
  'for-buyers',
  'for-suppliers',
] as const;

export const sourcingDetails: ByLocale<Detail[]> = {
  en: [
    {
      slug: 'supplier-search',
      name: 'Supplier search',
      blurb: 'We identify producers, cooperatives, processors and local companies.',
      overview:
        'We identify producers, cooperatives, processors and local companies that can supply what you need, then check that they can deliver it.',
      includes: [
        'Mapping of producers and cooperatives for your product',
        'Visits and conversations at origin',
        'Checks on capacity, track record and documents',
        'A shortlist with our own assessment',
        'Introductions and help with negotiation',
      ],
      suitedFor: ['Buyers entering a new origin', 'Companies replacing or adding a supplier', 'Importers who need someone on the ground'],
    },
    {
      slug: 'procurement',
      name: 'Procurement',
      blurb: 'We buy cocoa, shea butter and other agricultural products at origin.',
      overview:
        'We buy cocoa, shea butter and other agricultural products at origin, at the prices and quantities agreed with you.',
      includes: [
        'Negotiation of price and quantity',
        'Purchase agreements and payment terms',
        'Coordination with producers on harvest and collection timing',
        'Receiving and weighing of each delivery',
        'A record for every lot',
      ],
      suitedFor: ['Buyers who want a local purchasing team', 'Global Trade, for its own supply'],
    },
    {
      slug: 'quality-control',
      name: 'Quality control',
      blurb: 'We select products, take samples and check each lot.',
      overview: 'We select products, take samples and check each lot before it is accepted, so that what ships matches what was agreed.',
      includes: [
        'Sampling of every lot',
        'Visual and sensory checks',
        'Moisture and grade checks where they apply',
        'Rejection or re-sorting of lots that miss the specification',
        'A short quality report for each lot',
      ],
      suitedFor: ['Buyers with a written specification', 'Processors who need consistent input'],
      note: 'Laboratory testing can be arranged when a buyer requires it.',
    },
    {
      slug: 'export-preparation',
      name: 'Export preparation',
      blurb: 'We prepare documents and goods, and coordinate with freight forwarders.',
      overview: 'We prepare documents and goods for export, and coordinate with freight forwarders so that the shipment leaves on time and complete.',
      includes: [
        'Packing and labelling to the buyer’s requirements',
        'Export and commercial documents',
        'Coordination with freight forwarders and customs agents',
        'Supervision of loading',
        'Handover to Global Trade or directly to the buyer',
      ],
      suitedFor: ['Buyers shipping from West and Central Africa', 'Producers new to export'],
    },
    {
      slug: 'supplier-development',
      name: 'Supplier development',
      blurb: 'We look for new products and suppliers for international buyers.',
      overview: 'We look for new products and suppliers for international buyers, and we help good producers meet the buyers’ requirements.',
      includes: [
        'Scouting of new products and origins',
        'Advice to producers on specification and packaging',
        'Longer-term supply relationships',
        'Buyers’ feedback passed back to producers',
      ],
      suitedFor: ['Buyers looking for a new product', 'Producers and cooperatives that want to reach international markets'],
    },
    {
      slug: 'for-buyers',
      name: 'For buyers',
      blurb: 'Tell us the product, quantity and quality you need.',
      overview: 'Tell us the product, quantity and quality you need. We find the supplier, check the lot and prepare the order.',
      includes: [
        'A short written brief of your need',
        'A supplier shortlist',
        'Lot checks before the order is accepted',
        'An order prepared for export',
        'Handover to Global Trade for import and delivery, if you wish',
      ],
      suitedFor: ['Processors and chocolatiers', 'Distributors and wholesalers', 'Retailers and specialty grocers'],
    },
    {
      slug: 'for-suppliers',
      name: 'For suppliers',
      blurb: 'Producers, cooperatives and processors: we build long-term relationships.',
      overview: 'Producers, cooperatives and processors: we build long-term relationships with reliable suppliers.',
      includes: [
        'A clear specification and clear expectations',
        'Prices and terms agreed in writing',
        'Regular purchasing plans where demand allows',
        'Feedback on the quality of each lot',
        'A route to international buyers',
      ],
      suitedFor: ['Producers and cooperatives', 'Processors', 'Local trading companies'],
      note: 'To introduce your business, write to contact@transworldsg.com with your product, volumes and location.',
    },
  ],
  fr: [
    {
      slug: 'supplier-search',
      name: 'Recherche de fournisseurs',
      blurb: 'Nous repérons les producteurs, coopératives, transformateurs et entreprises locales.',
      overview:
        'Nous repérons les producteurs, coopératives, transformateurs et entreprises locales capables de fournir ce dont vous avez besoin, puis nous vérifions qu’ils peuvent le livrer.',
      includes: [
        'Cartographie des producteurs et des coopératives pour votre produit',
        'Visites et échanges sur place, à l’origine',
        'Vérification de la capacité, de l’historique et des documents',
        'Une liste restreinte accompagnée de notre propre évaluation',
        'Mises en relation et aide à la négociation',
      ],
      suitedFor: ['Acheteurs qui abordent une nouvelle origine', 'Entreprises qui remplacent ou ajoutent un fournisseur', 'Importateurs qui ont besoin de quelqu’un sur le terrain'],
    },
    {
      slug: 'procurement',
      name: 'Achats',
      blurb: 'Nous achetons du cacao, du beurre de karité et d’autres produits agricoles à l’origine.',
      overview:
        'Nous achetons du cacao, du beurre de karité et d’autres produits agricoles à l’origine, aux prix et dans les quantités convenus avec vous.',
      includes: [
        'Négociation du prix et de la quantité',
        'Contrats d’achat et conditions de paiement',
        'Coordination avec les producteurs sur le calendrier des récoltes et des collectes',
        'Réception et pesée de chaque livraison',
        'Un dossier pour chaque lot',
      ],
      suitedFor: ['Acheteurs qui veulent une équipe d’achat locale', 'Global Trade, pour son propre approvisionnement'],
    },
    {
      slug: 'quality-control',
      name: 'Contrôle de la qualité',
      blurb: 'Nous sélectionnons les produits, prélevons des échantillons et vérifions chaque lot.',
      overview:
        'Nous sélectionnons les produits, prélevons des échantillons et vérifions chaque lot avant de l’accepter, afin que ce qui est expédié corresponde à ce qui a été convenu.',
      includes: [
        'Échantillonnage de chaque lot',
        'Contrôles visuels et sensoriels',
        'Contrôles d’humidité et de calibre lorsqu’ils s’appliquent',
        'Refus ou nouveau tri des lots non conformes à la spécification',
        'Un court rapport de qualité pour chaque lot',
      ],
      suitedFor: ['Acheteurs qui disposent d’une spécification écrite', 'Transformateurs qui ont besoin d’une matière première constante'],
      note: 'Des analyses en laboratoire peuvent être organisées lorsque l’acheteur les exige.',
    },
    {
      slug: 'export-preparation',
      name: 'Préparation à l’exportation',
      blurb: 'Nous préparons les documents et les marchandises, et nous coordonnons avec les transitaires.',
      overview:
        'Nous préparons les documents et les marchandises pour l’exportation, et nous nous coordonnons avec les transitaires pour que l’expédition parte à temps et complète.',
      includes: [
        'Emballage et étiquetage selon les exigences de l’acheteur',
        'Documents d’exportation et documents commerciaux',
        'Coordination avec les transitaires et les agents en douane',
        'Supervision du chargement',
        'Remise à Global Trade ou directement à l’acheteur',
      ],
      suitedFor: ['Acheteurs qui expédient depuis l’Afrique de l’Ouest et l’Afrique centrale', 'Producteurs nouveaux à l’exportation'],
    },
    {
      slug: 'supplier-development',
      name: 'Développement de fournisseurs',
      blurb: 'Nous cherchons de nouveaux produits et de nouveaux fournisseurs pour les acheteurs internationaux.',
      overview:
        'Nous cherchons de nouveaux produits et de nouveaux fournisseurs pour les acheteurs internationaux, et nous aidons les bons producteurs à répondre aux exigences des acheteurs.',
      includes: [
        'Repérage de nouveaux produits et de nouvelles origines',
        'Conseils aux producteurs sur la spécification et l’emballage',
        'Relations d’approvisionnement à plus long terme',
        'Commentaires des acheteurs transmis aux producteurs',
      ],
      suitedFor: ['Acheteurs à la recherche d’un nouveau produit', 'Producteurs et coopératives qui veulent atteindre les marchés internationaux'],
    },
    {
      slug: 'for-buyers',
      name: 'Pour les acheteurs',
      blurb: 'Dites-nous le produit, la quantité et la qualité dont vous avez besoin.',
      overview:
        'Dites-nous le produit, la quantité et la qualité dont vous avez besoin. Nous trouvons le fournisseur, vérifions le lot et préparons la commande.',
      includes: [
        'Un bref cahier des charges écrit de votre besoin',
        'Une liste restreinte de fournisseurs',
        'Des contrôles de lot avant l’acceptation de la commande',
        'Une commande préparée pour l’exportation',
        'Si vous le souhaitez, remise à Global Trade pour l’importation et la livraison',
      ],
      suitedFor: ['Transformateurs et chocolatiers', 'Distributeurs et grossistes', 'Détaillants et épiceries fines'],
    },
    {
      slug: 'for-suppliers',
      name: 'Pour les fournisseurs',
      blurb: 'Producteurs, coopératives et transformateurs : nous bâtissons des relations à long terme.',
      overview:
        'Producteurs, coopératives et transformateurs : nous bâtissons des relations à long terme avec des fournisseurs fiables.',
      includes: [
        'Une spécification claire et des attentes claires',
        'Des prix et des conditions convenus par écrit',
        'Des plans d’achat réguliers lorsque la demande le permet',
        'Des commentaires sur la qualité de chaque lot',
        'Un accès aux acheteurs internationaux',
      ],
      suitedFor: ['Producteurs et coopératives', 'Transformateurs', 'Entreprises locales de négoce'],
      note: 'Pour présenter votre entreprise, écrivez à contact@transworldsg.com en indiquant votre produit, vos volumes et votre localisation.',
    },
  ],
  es: [
    {
      slug: 'supplier-search',
      name: 'Búsqueda de proveedores',
      blurb: 'Identificamos productores, cooperativas, procesadores y empresas locales.',
      overview:
        'Identificamos productores, cooperativas, procesadores y empresas locales que pueden suministrar lo que usted necesita, y comprobamos que puedan cumplir.',
      includes: [
        'Mapa de productores y cooperativas para su producto',
        'Visitas y conversaciones en origen',
        'Comprobación de capacidad, trayectoria y documentos',
        'Una lista corta con nuestra propia valoración',
        'Presentaciones y apoyo en la negociación',
      ],
      suitedFor: ['Compradores que abordan un nuevo origen', 'Empresas que sustituyen o añaden un proveedor', 'Importadores que necesitan a alguien sobre el terreno'],
    },
    {
      slug: 'procurement',
      name: 'Compras',
      blurb: 'Compramos cacao, manteca de karité y otros productos agrícolas en origen.',
      overview:
        'Compramos cacao, manteca de karité y otros productos agrícolas en origen, a los precios y en las cantidades acordados con usted.',
      includes: [
        'Negociación de precio y cantidad',
        'Acuerdos de compra y condiciones de pago',
        'Coordinación con los productores sobre el calendario de cosecha y recogida',
        'Recepción y pesaje de cada entrega',
        'Un registro para cada lote',
      ],
      suitedFor: ['Compradores que quieren un equipo de compras local', 'Global Trade, para su propio abastecimiento'],
    },
    {
      slug: 'quality-control',
      name: 'Control de calidad',
      blurb: 'Seleccionamos los productos, tomamos muestras y revisamos cada lote.',
      overview:
        'Seleccionamos los productos, tomamos muestras y revisamos cada lote antes de aceptarlo, para que lo que se envía coincida con lo acordado.',
      includes: [
        'Muestreo de cada lote',
        'Controles visuales y sensoriales',
        'Controles de humedad y de calibre cuando corresponden',
        'Rechazo o nueva selección de los lotes que no cumplen la especificación',
        'Un breve informe de calidad por lote',
      ],
      suitedFor: ['Compradores con una especificación escrita', 'Procesadores que necesitan una materia prima constante'],
      note: 'Pueden organizarse análisis de laboratorio cuando el comprador lo exija.',
    },
    {
      slug: 'export-preparation',
      name: 'Preparación para la exportación',
      blurb: 'Preparamos los documentos y la mercancía, y nos coordinamos con los transitarios.',
      overview:
        'Preparamos los documentos y la mercancía para la exportación, y nos coordinamos con los transitarios para que el envío salga a tiempo y completo.',
      includes: [
        'Embalaje y etiquetado según los requisitos del comprador',
        'Documentos de exportación y documentos comerciales',
        'Coordinación con transitarios y agentes de aduanas',
        'Supervisión de la carga',
        'Entrega a Global Trade o directamente al comprador',
      ],
      suitedFor: ['Compradores que envían desde África occidental y central', 'Productores que se inician en la exportación'],
    },
    {
      slug: 'supplier-development',
      name: 'Desarrollo de proveedores',
      blurb: 'Buscamos nuevos productos y proveedores para compradores internacionales.',
      overview:
        'Buscamos nuevos productos y proveedores para compradores internacionales, y ayudamos a los buenos productores a cumplir los requisitos de los compradores.',
      includes: [
        'Búsqueda de nuevos productos y orígenes',
        'Asesoramiento a los productores sobre especificación y embalaje',
        'Relaciones de suministro a más largo plazo',
        'Comentarios de los compradores trasladados a los productores',
      ],
      suitedFor: ['Compradores que buscan un producto nuevo', 'Productores y cooperativas que quieren llegar a los mercados internacionales'],
    },
    {
      slug: 'for-buyers',
      name: 'Para compradores',
      blurb: 'Díganos el producto, la cantidad y la calidad que necesita.',
      overview:
        'Díganos el producto, la cantidad y la calidad que necesita. Encontramos al proveedor, revisamos el lote y preparamos el pedido.',
      includes: [
        'Un breve documento escrito con su necesidad',
        'Una lista corta de proveedores',
        'Controles del lote antes de aceptar el pedido',
        'Un pedido preparado para la exportación',
        'Si lo desea, entrega a Global Trade para la importación y la entrega',
      ],
      suitedFor: ['Procesadores y chocolateros', 'Distribuidores y mayoristas', 'Minoristas y tiendas gourmet'],
    },
    {
      slug: 'for-suppliers',
      name: 'Para proveedores',
      blurb: 'Productores, cooperativas y procesadores: construimos relaciones a largo plazo.',
      overview:
        'Productores, cooperativas y procesadores: construimos relaciones a largo plazo con proveedores fiables.',
      includes: [
        'Una especificación clara y expectativas claras',
        'Precios y condiciones acordados por escrito',
        'Planes de compra regulares cuando la demanda lo permite',
        'Comentarios sobre la calidad de cada lote',
        'Un camino hacia los compradores internacionales',
      ],
      suitedFor: ['Productores y cooperativas', 'Procesadores', 'Empresas locales de comercio'],
      note: 'Para presentar su empresa, escriba a contact@transworldsg.com indicando su producto, sus volúmenes y su ubicación.',
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Partners page                                                       */
/* ------------------------------------------------------------------ */

export const partnersCopy: ByLocale<{
  title: string;
  lead: string;
  eyebrow: string;
  typesTitle: string;
  typesIntro: string;
  types: { title: string; text: string }[];
  ours: { title: string; intro: string; items: { name: string; role: string; text: string; href?: string; cta?: string }[] };
  lookTitle: string;
  lookIntro: string;
  look: string[];
  joinTitle: string;
  joinText: string;
  joinCta: string;
  subject: string;
}> = {
  en: {
    eyebrow: 'Partners',
    title: 'Work with us.',
    lead: 'Our three subsidiaries depend on people who deliver what they promise: producers, buyers, carriers and trades.',
    typesTitle: 'Who we work with',
    typesIntro: 'Four kinds of partner. Tell us which one you are.',
    types: [
      { title: 'Producers and cooperatives', text: 'Farmers, cooperatives and processors who supply cocoa, coffee, shea, spices and other natural products.' },
      { title: 'Buyers and distributors', text: 'Chocolatiers, food processors, distributors, retailers and specialty grocers who need a steady, checked supply.' },
      { title: 'Freight and logistics', text: 'Freight forwarders, customs brokers and carriers who move goods from origin to destination.' },
      { title: 'Trades and service contractors', text: 'Cleaning, demolition, drywall, concrete and moving crews who work with Property Services.' },
    ],
    ours: {
      title: 'Our partners',
      intro: 'The organizations we work with today.',
      items: [
        { name: 'Bureau Veritas', role: 'Independent inspection', text: 'Controls our produce, starting with cocoa: moisture, defects, cut test and grade, with a certificate for each lot.', href: '/quality-control', cta: 'See the analyses' },
        { name: 'Transco SG Group', role: 'Producer and exporter, Cameroon', text: 'Supplies raw produce from Cameroon, which we bring to Canadian businesses.' },
      ],
    },
    lookTitle: 'What we look for',
    lookIntro: 'We keep the list short, and we ask the same of ourselves.',
    look: ['Reliability: you do what you said, when you said it', 'Documents that are complete and accurate', 'Consistent quality, lot after lot', 'Clear, honest communication, including bad news'],
    joinTitle: 'Introduce your business',
    joinText: 'Send us a few lines about what you do, where you work and the volumes or capacity you have. We reply to every message.',
    joinCta: 'Email us',
    subject: 'Partnership: [your business]',
  },
  fr: {
    eyebrow: 'Partenaires',
    title: 'Travaillons ensemble.',
    lead: 'Nos trois filiales comptent sur des gens qui tiennent leurs promesses : producteurs, acheteurs, transporteurs et gens de métier.',
    typesTitle: 'Avec qui nous travaillons',
    typesIntro: 'Quatre types de partenaires. Dites-nous lequel vous êtes.',
    types: [
      { title: 'Producteurs et coopératives', text: 'Agriculteurs, coopératives et transformateurs qui fournissent du cacao, du café, du karité, des épices et d’autres produits naturels.' },
      { title: 'Acheteurs et distributeurs', text: 'Chocolatiers, transformateurs alimentaires, distributeurs, détaillants et épiceries fines qui ont besoin d’un approvisionnement régulier et contrôlé.' },
      { title: 'Fret et logistique', text: 'Transitaires, courtiers en douane et transporteurs qui acheminent les marchandises de l’origine à la destination.' },
      { title: 'Corps de métier et entrepreneurs de services', text: 'Équipes de nettoyage, de démolition, de cloisons sèches, de béton et de déménagement qui travaillent avec Property Services.' },
    ],
    ours: {
      title: 'Nos partenaires',
      intro: 'Les organisations avec lesquelles nous travaillons aujourd’hui.',
      items: [
        { name: 'Bureau Veritas', role: 'Inspection indépendante', text: 'Contrôle nos produits, à commencer par le cacao : humidité, défauts, test à la coupe et classement, avec un certificat pour chaque lot.', href: '/quality-control', cta: 'Voir les analyses' },
        { name: 'Transco SG Group', role: 'Producteur et exportateur, Cameroun', text: 'Fournit des produits bruts du Cameroun, que nous livrons aux entreprises canadiennes.' },
      ],
    },
    lookTitle: 'Ce que nous recherchons',
    lookIntro: 'Nous gardons la liste courte, et nous nous l’appliquons à nous-mêmes.',
    look: ['La fiabilité : vous faites ce que vous avez dit, quand vous l’avez dit', 'Des documents complets et exacts', 'Une qualité constante, lot après lot', 'Une communication claire et honnête, y compris quand la nouvelle est mauvaise'],
    joinTitle: 'Présentez votre entreprise',
    joinText: 'Écrivez-nous quelques lignes sur ce que vous faites, où vous travaillez et les volumes ou la capacité dont vous disposez. Nous répondons à chaque message.',
    joinCta: 'Écrivez-nous',
    subject: 'Partenariat : [votre entreprise]',
  },
  es: {
    eyebrow: 'Socios',
    title: 'Trabajemos juntos.',
    lead: 'Nuestras tres filiales dependen de personas que cumplen lo que prometen: productores, compradores, transportistas y oficios.',
    typesTitle: 'Con quién trabajamos',
    typesIntro: 'Cuatro tipos de socio. Díganos cuál es usted.',
    types: [
      { title: 'Productores y cooperativas', text: 'Agricultores, cooperativas y procesadores que suministran cacao, café, karité, especias y otros productos naturales.' },
      { title: 'Compradores y distribuidores', text: 'Chocolateros, procesadores de alimentos, distribuidores, minoristas y tiendas gourmet que necesitan un suministro constante y controlado.' },
      { title: 'Flete y logística', text: 'Transitarios, agentes de aduanas y transportistas que llevan la mercancía del origen al destino.' },
      { title: 'Oficios y contratistas de servicios', text: 'Equipos de limpieza, demolición, paneles de yeso, hormigón y mudanzas que trabajan con Property Services.' },
    ],
    ours: {
      title: 'Nuestros socios',
      intro: 'Las organizaciones con las que trabajamos hoy.',
      items: [
        { name: 'Bureau Veritas', role: 'Inspección independiente', text: 'Controla nuestros productos, empezando por el cacao: humedad, defectos, prueba de corte y clasificación, con un certificado por cada lote.', href: '/quality-control', cta: 'Ver los análisis' },
        { name: 'Transco SG Group', role: 'Productor y exportador, Camerún', text: 'Suministra productos en bruto de Camerún, que llevamos a empresas canadienses.' },
      ],
    },
    lookTitle: 'Qué buscamos',
    lookIntro: 'Mantenemos la lista corta y nos la aplicamos a nosotros mismos.',
    look: ['Fiabilidad: hace lo que dijo, cuando lo dijo', 'Documentos completos y exactos', 'Calidad constante, lote tras lote', 'Comunicación clara y honesta, también cuando la noticia es mala'],
    joinTitle: 'Presente su empresa',
    joinText: 'Escríbanos unas líneas sobre lo que hace, dónde trabaja y los volúmenes o la capacidad de que dispone. Respondemos a cada mensaje.',
    joinCta: 'Escríbanos',
    subject: 'Colaboración: [su empresa]',
  },
};
