import { services } from '../content';
import type { Locale } from '../i18n';

export type ServiceText = {
  name: string;
  blurb: string;
  overview: string;
  includes: string[];
  suitedFor: string[];
  note?: string;
};

const fr: ServiceText[] = [
  {
    name: 'Nettoyage commercial',
    blurb: 'Bureaux, commerces et espaces communs.',
    overview:
      'Un lieu de travail propre influence l’image d’une entreprise et le bien-être de ceux qui y travaillent. Nous nettoyons les bureaux, les locaux commerciaux et les espaces communs selon l’horaire qui vous convient : tous les jours, toutes les semaines ou une seule fois.',
    includes: [
      'Bureaux, postes de travail et salles de réunion',
      'Toilettes et coins-cuisine',
      'Planchers : aspirateur, nettoyage humide et traitement des taches',
      'Entrées, halls et vitres',
      'Enlèvement des déchets et du recyclage',
      'Réapprovisionnement des fournitures sur demande',
    ],
    suitedFor: ['Bureaux', 'Locaux commerciaux et salles d’exposition', 'Espaces communs et partagés', 'Cabinets professionnels'],
  },
  {
    name: 'Nettoyage après construction',
    blurb: 'Poussière, débris et nettoyage final avant la remise des clés.',
    overview:
      'Quand les corps de métier sont partis, il reste à préparer les lieux. Nous enlevons la poussière et les débris, puis nous terminons par un nettoyage détaillé, pour que le chantier soit remis ou ouvert à temps.',
    includes: [
      'Enlèvement des débris de construction et des emballages',
      'Dépoussiérage des surfaces, des bouches d’aération, des rebords et des accessoires',
      'Récurage des planchers durs et aspiration en profondeur des tapis',
      'Nettoyage des fenêtres et des vitres, y compris les autocollants et les résidus',
      'Nettoyage détaillé des toilettes, des cuisines et des accessoires',
      'Visite finale avec vous ou votre gestionnaire de chantier',
    ],
    suitedFor: [
      'Entrepreneurs généraux qui terminent un projet',
      'Gestionnaires immobiliers qui préparent une unité pour un locataire',
      'Propriétaires qui ouvrent un espace neuf ou rénové',
    ],
  },
  {
    name: 'Démolition',
    blurb: 'Démontage et enlèvement intérieurs.',
    overview:
      'Nous dégageons les intérieurs pour que les corps de métier suivants puissent commencer : cloisons, plafonds, planchers et accessoires retirés proprement, débris triés et évacués.',
    includes: [
      'Retrait des cloisons non porteuses',
      'Plafonds, revêtements de sol et finis muraux',
      'Armoires, comptoirs et accessoires',
      'Tri et évacuation des débris',
      'Protection des zones qui restent',
      'Chantier balayé pour le corps de métier suivant',
    ],
    suitedFor: ['Aménagements et rénovations pour locataires', 'Remise à neuf d’unités commerciales', 'Entrepreneurs qui ont besoin d’un chantier dégagé'],
    note: 'Les travaux structuraux et les matières dangereuses exigent l’évaluation d’un spécialiste. Nous vous dirons quand c’est le cas.',
  },
  {
    name: 'Cloisons sèches',
    blurb: 'Pose, jointoiement et finition.',
    overview:
      'Des nouvelles cloisons aux réparations après un dommage, nous posons, jointoyons et finissons les cloisons sèches pour obtenir une surface lisse, prête à peindre.',
    includes: [
      'Pose des panneaux sur les murs et les plafonds',
      'Jointoiement, enduit et ponçage',
      'Rapiéçage et réparation des zones endommagées',
      'Cornières et moulures',
      'Préparation des surfaces avant la peinture',
    ],
    suitedFor: ['Aménagements pour locataires', 'Rénovations après démolition', 'Réparations après une fuite ou un dommage'],
  },
  {
    name: 'Travaux de béton',
    blurb: 'À confirmer',
    overview:
      'Nous précisons l’étendue exacte des travaux de béton que nous acceptons. Parlez-nous du projet et nous vous dirons franchement si nous pouvons le réaliser.',
    includes: ['Étendue des travaux de béton : à confirmer'],
    suitedFor: ['À confirmer'],
    note: 'Envoyez-nous le lieu, l’ampleur du projet et votre échéancier, et nous vous répondrons par écrit.',
  },
  {
    name: 'Aide au déménagement',
    blurb: 'Main-d’œuvre pour les déménagements de bureaux et de commerces.',
    overview:
      'Des bras de plus le jour du déménagement. Notre équipe emballe, transporte et installe, pour que votre équipe retourne au travail plus vite.',
    includes: [
      'Aide à l’emballage des bureaux et des réserves',
      'Chargement et déchargement',
      'Déplacement de meubles et d’équipement entre des pièces ou des immeubles',
      'Démontage et remontage du mobilier de bureau',
      'Enlèvement des matériaux d’emballage par la suite',
    ],
    suitedFor: ['Bureaux qui déménagent', 'Détaillants qui réaménagent un magasin', 'Gestionnaires immobiliers qui libèrent ou relouent des unités'],
  },
];

const es: ServiceText[] = [
  {
    name: 'Limpieza comercial',
    blurb: 'Oficinas, comercios y espacios compartidos.',
    overview:
      'Un lugar de trabajo limpio influye en la imagen de una empresa y en cómo se sienten quienes trabajan en él. Limpiamos oficinas, locales comerciales y espacios compartidos con el horario que le convenga: a diario, cada semana o una sola vez.',
    includes: [
      'Escritorios, puestos de trabajo y salas de reuniones',
      'Baños y cocinas pequeñas',
      'Suelos: aspirado, fregado y tratamiento de manchas',
      'Entradas, vestíbulos y cristales',
      'Retirada de residuos y reciclaje',
      'Reposición de suministros bajo petición',
    ],
    suitedFor: ['Oficinas', 'Locales comerciales y salas de exposición', 'Zonas comunes y compartidas', 'Despachos profesionales'],
  },
  {
    name: 'Limpieza posterior a la obra',
    blurb: 'Polvo, escombros y una limpieza final antes de la entrega.',
    overview:
      'Cuando los oficios se han ido, el espacio aún debe quedar listo. Retiramos el polvo y los escombros y terminamos con una limpieza detallada, para que la obra se entregue o se abra a tiempo.',
    includes: [
      'Retirada de escombros de obra y embalajes',
      'Eliminación del polvo en superficies, rejillas, alféizares y accesorios',
      'Fregado de suelos duros y aspirado a fondo de alfombras',
      'Limpieza de ventanas y cristales, incluidas etiquetas y residuos',
      'Limpieza detallada de baños, cocinas y accesorios',
      'Recorrido final con usted o con su jefe de obra',
    ],
    suitedFor: [
      'Contratistas generales que terminan un proyecto',
      'Administradores de inmuebles que preparan una unidad para un inquilino',
      'Propietarios que abren un espacio nuevo o reformado',
    ],
  },
  {
    name: 'Demolición',
    blurb: 'Desmontaje y retirada de interiores.',
    overview:
      'Despejamos los interiores para que puedan empezar los siguientes oficios: tabiques, techos, suelos y accesorios retirados con limpieza, y los escombros clasificados y evacuados.',
    includes: [
      'Retirada de tabiques no estructurales',
      'Techos, suelos y acabados de pared',
      'Armarios, encimeras y accesorios',
      'Clasificación y retirada de escombros',
      'Protección de las zonas que se conservan',
      'Obra barrida para el siguiente oficio',
    ],
    suitedFor: ['Adecuaciones y reformas para inquilinos', 'Entregas de locales comerciales', 'Contratistas que necesitan una obra despejada'],
    note: 'Los trabajos estructurales y los materiales peligrosos requieren la evaluación de un especialista. Le avisaremos cuando un trabajo la necesite.',
  },
  {
    name: 'Paneles de yeso',
    blurb: 'Colocación, juntas y acabado.',
    overview:
      'Desde tabiques nuevos hasta reparaciones tras un daño, colocamos, tratamos las juntas y acabamos los paneles de yeso hasta lograr una superficie lisa, lista para pintar.',
    includes: [
      'Colocación de placas en paredes y techos',
      'Cinta, masilla y lijado',
      'Parcheo y reparación de zonas dañadas',
      'Esquineros y molduras',
      'Preparación de la superficie para pintar',
    ],
    suitedFor: ['Adecuaciones para inquilinos', 'Reformas tras una demolición', 'Reparaciones tras fugas o daños'],
  },
  {
    name: 'Trabajos de hormigón',
    blurb: 'Por confirmar',
    overview:
      'Estamos definiendo el alcance exacto de los trabajos de hormigón que aceptamos. Cuéntenos el trabajo y le diremos con claridad si podemos hacerlo.',
    includes: ['Alcance de los trabajos de hormigón: por confirmar'],
    suitedFor: ['Por confirmar'],
    note: 'Envíenos la ubicación, el tamaño del trabajo y su calendario, y le responderemos por escrito.',
  },
  {
    name: 'Apoyo en mudanzas',
    blurb: 'Mano de obra para mudanzas de oficinas y comercios.',
    overview:
      'Manos extra el día de la mudanza. Nuestro equipo embala, transporta e instala, para que su equipo vuelva al trabajo cuanto antes.',
    includes: [
      'Apoyo en el embalaje de oficinas y almacenes',
      'Carga y descarga',
      'Traslado de muebles y equipos entre salas o edificios',
      'Desmontaje y montaje de mobiliario de oficina',
      'Retirada posterior de los materiales de embalaje',
    ],
    suitedFor: ['Oficinas que se trasladan', 'Minoristas que reorganizan una tienda', 'Administradores que desocupan o vuelven a alquilar unidades'],
  },
];

export const getServices = (locale: Locale): ServiceText[] => {
  if (locale === 'fr') return fr;
  if (locale === 'es') return es;
  return services.map(({ name, blurb, overview, includes, suitedFor, note }) => ({ name, blurb, overview, includes, suitedFor, note }));
};
