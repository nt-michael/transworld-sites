/**
 * Site content. Anything marked TODO is waiting on the client and renders as
 * "To be confirmed" so it is never mistaken for a real figure.
 */

export const TBC = 'To be confirmed';

/** Free Unsplash photos, used until the client supplies their own. */
const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  hero: unsplash('photo-1500382017468-9049fed747ef', 2000),
  trade: unsplash('photo-1507576164121-220762647800'),
  logistics: unsplash('photo-1678182451047-196f22a4143e'),
  cocoa: unsplash('photo-1543840312-56c8bf2c350d', 1200),
  city: unsplash('photo-1585886309215-03a15afc624a', 2000),
  mop: unsplash('photo-1669101602108-fa5ba89507ee', 2000),
  cleanDesk: unsplash('photo-1627905646269-7f034dcc5738'),
  ladder: unsplash('photo-1482731215275-a1f151646268'),
  warehouse: unsplash('photo-1772298783095-be38fa901232', 2000),
  coffee: unsplash('photo-1743356629215-abb470447e71', 1200),
  cocoaButter: unsplash('photo-1638194645412-1d0b4c53ffed', 1200),
  shea: unsplash('photo-1573812461383-e5f8b759d12e', 1200),
  pepper: unsplash('photo-1649952052743-5e8f37c348c5', 1200),
  djansang: unsplash('photo-1508748169069-82590c9f26e6', 1200),
};

export const company = {
  inc: 'TransWorld SG Consulting Group Inc.',
  sarl: 'TransWorld SG Consulting SARL',
  sarlShort: 'TRANSCO SG GROUP SARL',
  registration: '7FBFNK84',
  address: '1198 Bethamy Lane, Gloucester, Ontario K1J 8P3',
  phoneDisplay: '+1 (437) 332-6929',
  phoneHref: 'tel:+14373326929',
  email: 'contact@transworldsg.com',
};

export type Product = {
  slug: string;
  name: string;
  blurb: string;
  buyers?: string;
  image?: string;
};

export const products: Product[] = [
  {
    slug: 'cocoa-beans',
    name: 'Cocoa beans',
    blurb: 'Cocoa beans selected from African producers for their aroma and natural richness.',
    buyers: 'Chocolatiers, food processors, distributors and companies making cocoa-based products.',
    image: images.cocoa,
  },
  {
    slug: 'coffee',
    name: 'Coffee',
    blurb: 'Selected for its rich taste, balanced aroma and consistent quality.',
    image: images.coffee,
  },
  {
    slug: 'cocoa-butter',
    name: 'Cocoa butter',
    blurb: 'Natural cocoa butter for the food, cosmetic and pharmaceutical industries.',
    image: images.cocoaButter,
  },
  {
    slug: 'shea-butter',
    name: 'Shea butter',
    blurb: 'Pure, unrefined shea butter, known for its nourishing and protective properties.',
    image: images.shea,
  },
  {
    slug: 'penja-pepper',
    name: 'Penja pepper',
    blurb: 'A spice from Cameroon with a powerful fragrance and woody, spicy notes.',
    image: images.pepper,
  },
  {
    slug: 'djansang',
    name: 'Djansang',
    blurb: 'Traditional African seeds used to give dishes a distinctive flavour.',
    image: images.djansang,
  },
];

/** TODO(client): real values for every product. */
export const specRows = ['Grade', 'Packaging', 'Minimum order', 'Availability', 'Shipping terms'];

export type Service = {
  slug: string;
  name: string;
  blurb: string;
  image?: string;
  /** Opening paragraph on the service page. */
  overview: string;
  includes: string[];
  suitedFor: string[];
  /** Honest limits, shown as a note on the page. */
  note?: string;
};

export const services: Service[] = [
  {
    slug: 'commercial-cleaning',
    name: 'Commercial cleaning',
    blurb: 'Offices, retail and shared spaces.',
    image: images.cleanDesk,
    overview:
      'A clean workplace shapes how a business looks and how people feel in it. We clean offices, retail units and shared spaces on a schedule that suits you: daily, weekly, or as a one-off.',
    includes: [
      'Desks, workstations and meeting rooms',
      'Washrooms and kitchenettes',
      'Floors: vacuuming, mopping and spot treatment',
      'Entrances, lobbies and glass',
      'Waste and recycling removal',
      'Restocking of supplies on request',
    ],
    suitedFor: ['Offices', 'Retail units and showrooms', 'Shared and common areas', 'Professional practices'],
  },
  {
    slug: 'post-construction-cleaning',
    name: 'Post-construction cleaning',
    blurb: 'Dust, debris and a final clean before handover.',
    image: images.mop,
    overview:
      'When the trades have left, the space still has to be made ready. We remove dust and debris and finish with a detailed clean, so the site can be handed over or opened on time.',
    includes: [
      'Removal of construction debris and packaging',
      'Dust removal from surfaces, vents, sills and fixtures',
      'Scrubbing of hard floors and deep vacuuming of carpets',
      'Window and glass cleaning, including stickers and residue',
      'Detailed clean of washrooms, kitchens and fixtures',
      'Final walkthrough with you or your site manager',
    ],
    suitedFor: [
      'General contractors finishing a project',
      'Property managers preparing a unit for a tenant',
      'Owners opening a new or renovated space',
    ],
  },
  {
    slug: 'demolition',
    name: 'Demolition',
    blurb: 'Interior tear-out and removal.',
    image: images.warehouse,
    overview:
      'We clear interiors so the next trades can start: partitions, ceilings, floors and fixtures taken out cleanly, with the debris sorted and removed.',
    includes: [
      'Removal of non-structural partition walls',
      'Ceilings, flooring and wall finishes',
      'Cabinetry, counters and fixtures',
      'Sorting and removal of debris',
      'Protection of the areas that stay',
      'Site left broom-clean for the next trade',
    ],
    suitedFor: ['Tenant fit-outs and renovations', 'Commercial unit turnovers', 'Contractors who need a clear site'],
    note: 'Structural work and hazardous materials need a specialist assessment. We will tell you when a job needs one.',
  },
  {
    slug: 'drywall',
    name: 'Drywall',
    blurb: 'Hanging, taping and finishing.',
    image: images.ladder,
    overview:
      'From new partitions to repairs after damage, we hang, tape and finish drywall to a smooth surface that is ready for paint.',
    includes: [
      'Hanging of boards on walls and ceilings',
      'Taping, mudding and sanding',
      'Patching and repair of damaged areas',
      'Corner beads and trims',
      'Surface preparation for paint',
    ],
    suitedFor: ['Tenant fit-outs', 'Renovations after demolition', 'Repairs after leaks or damage'],
  },
  {
    slug: 'concrete-work',
    name: 'Concrete work',
    blurb: TBC,
    image: images.warehouse,
    overview:
      'We are confirming the exact scope of concrete work we take on. Tell us about the job and we will say plainly whether we can do it.',
    includes: [`Scope of concrete work: ${TBC}`],
    suitedFor: [TBC],
    note: 'Send us the location, the size of the job and your timeline, and we will reply with a written answer.',
  },
  {
    slug: 'moving-support',
    name: 'Moving support',
    blurb: 'Labour for office and commercial moves.',
    overview:
      'Extra hands for the day of the move. Our crew packs, carries and sets up, so your team can get back to work sooner.',
    includes: [
      'Packing support for offices and stock rooms',
      'Loading and unloading',
      'Moving furniture and equipment between rooms or buildings',
      'Taking apart and rebuilding of office furniture',
      'Removal of packing materials afterwards',
    ],
    suitedFor: ['Offices relocating', 'Retailers re-arranging a store', 'Property managers clearing or re-letting units'],
  },
];

export const groupFlow = [
  { title: 'Producers and suppliers', text: 'Farmers, cooperatives and processors.' },
  { title: 'Procurement & Sourcing', text: 'Finds suppliers, checks quality and prepares each order.' },
  { title: 'Global Trade', text: 'Imports, finds markets and manages distribution.' },
  { title: 'Buyers', text: 'Processors, distributors and retailers.' },
];

/** Which subsidiary handles a step. */
export type Place = 'sourcing' | 'both' | 'trade';

export const farmToMarket: { title: string; text: string; place: Place }[] = [
  { title: 'Producers', text: 'Farmers and cooperatives grow and harvest the crop.', place: 'sourcing' },
  { title: 'Procurement', text: 'Our sourcing team selects suppliers and buys the product.', place: 'sourcing' },
  { title: 'Quality control', text: 'Each lot is sampled and checked before it is accepted.', place: 'sourcing' },
  { title: 'Processing and preparation', text: 'Lots are sorted, packed and made ready to ship.', place: 'sourcing' },
  { title: 'Export documentation', text: 'Commercial documents are prepared with freight forwarders.', place: 'sourcing' },
  { title: 'International logistics', text: 'Both subsidiaries coordinate the shipment to its destination.', place: 'both' },
  { title: 'Arrival at destination', text: 'Global Trade receives the goods and handles import steps.', place: 'trade' },
  { title: 'Distribution', text: 'Products are delivered to buyers in the agreed quantities.', place: 'trade' },
  { title: 'Customers and partners', text: 'Chocolatiers, processors, distributors and retailers.', place: 'trade' },
];

export const placeLabel: Record<Place, string> = {
  sourcing: 'Procurement & Sourcing',
  both: 'Both subsidiaries',
  trade: 'Global Trade',
};

export const howItWorks = [
  { title: 'Request', text: 'Tell us the job and the place.' },
  { title: 'Site visit and estimate', text: 'We look at the site and send a written price.' },
  { title: 'Scheduled work', text: 'The crew arrives on the agreed date.' },
  { title: 'Final walkthrough', text: 'We check the result with you.' },
];

/** Pages in the sitemap that are not built yet. They render a holding page. */
export const plannedPages: Record<string, string> = {};

export const tradeServices = [
  {
    title: 'Importation',
    text: 'We import selected agricultural products from African producers, with supply that can be traced to its origin.',
  },
  {
    title: 'Distribution',
    text: 'We supply processors, chocolatiers, distributors, retailers, restaurants and specialty grocers.',
  },
  {
    title: 'B2B supply',
    text: 'Volume supply shaped to your quantity, quality, packaging, origin and delivery needs.',
  },
  {
    title: 'Logistics and export coordination',
    text: 'Product preparation, packaging, commercial documents, quality inspections and transport partners.',
  },
];

export const sourcingWork = [
  { title: 'Supplier search', text: 'We identify producers, cooperatives, processors and local companies.' },
  { title: 'Procurement', text: 'We buy cocoa, shea butter and other agricultural products at origin.' },
  { title: 'Quality control', text: 'We select products, take samples and check each lot.' },
  { title: 'Export preparation', text: 'We prepare documents and goods, and coordinate with freight forwarders.' },
  { title: 'Supplier development', text: 'We look for new products and suppliers for international buyers.' },
];

export const emails = [
  { label: 'General', address: 'contact@transworldsg.com' },
  { label: 'Sales', address: 'sale@transworldsg.com' },
  { label: 'Information', address: 'info@transworldsg.com' },
];

export type Profile = { unit: string; role: string; name: string; text: string; photo?: string };

/** TODO(client): real names, photos and short bios. Until then each card says so. */
export const team: Profile[] = [
  {
    unit: 'TransWorld SG Consulting Group',
    role: 'Group leadership',
    name: TBC,
    text: 'Sets the direction for the group and its three subsidiaries.',
  },
  {
    unit: 'Property Services',
    role: 'Head of Property Services',
    name: TBC,
    text: 'Leads the crews, schedules and quality checks for commercial properties.',
  },
  {
    unit: 'Global Trade',
    role: 'Head of Global Trade',
    name: TBC,
    text: 'Leads importation, distribution and relations with buyers.',
  },
  {
    unit: 'Procurement & Sourcing',
    role: 'Head of Procurement & Sourcing',
    name: TBC,
    text: 'Leads supplier search, purchasing, quality control and export preparation.',
  },
];

export const careerAreas = [
  {
    title: 'Property Services',
    text: 'Cleaning, drywall, demolition and moving crews, and the supervisors who run them.',
  },
  {
    title: 'Global Trade',
    text: 'Sales, importation, distribution and logistics coordination.',
  },
  {
    title: 'Procurement & Sourcing',
    text: 'Supplier search, purchasing, quality control and export documents.',
  },
  {
    title: 'Group support',
    text: 'Administration, accounting, customer service and communications.',
  },
];
