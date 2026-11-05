import type { Locale } from '../i18n';

export type FormKind = 'property' | 'trade' | 'contact' | 'careers';

export type FormText = {
  sending: string;
  sent: string;
  error: (email: string) => string;
  unconfigured: (phone: string, email: string) => string;
  hp: string;
  fullName: string;
  email: string;
  company: string;
  phoneOpt: string;
  message: string;
  messageOpt: string;
  send: string;
  sendMessage: string;
  tradeNote: (product: string) => string;
  service: string;
  dateOpt: string;
  address: string;
  describe: string;
  quantity: string;
  topic: string;
  topics: [string, string, string, string];
  companyOpt: string;
  area: string;
  areas: [string, string, string, string];
  language: string;
  languages: [string, string, string];
  linkOpt: string;
  subjects: { property: string; trade: (p: string) => string; contact: string; careers: string };
};

/** Option values sent to Formspree stay in English so the team reads one language. */
export const topicValues = ['Sourcing request', 'Supplier introduction', 'Partnership', 'Other question'];
export const areaValues = ['Global Trade', 'Quality and partners', 'Company support', 'Not sure yet'];
export const languageValues = ['English', 'French', 'No preference'];

export const formText: Record<Locale, FormText> = {
  en: {
    sending: 'Sending your request…',
    sent: 'Thank you. We received your message and will reply by email.',
    error: (email) => `Something went wrong and your message was not sent. Please try again, or email ${email}.`,
    unconfigured: (phone, email) => `This form is not connected yet, so nothing was sent. Please call ${phone} or email ${email}.`,
    hp: 'Leave this empty',
    fullName: 'Full name',
    email: 'Email',
    company: 'Company',
    phoneOpt: 'Phone (optional)',
    message: 'Message',
    messageOpt: 'Message (optional)',
    send: 'Send request',
    sendMessage: 'Send message',
    tradeNote: (product) => `Product: ${product}. All fields are required unless marked optional.`,
    service: 'Service',
    dateOpt: 'Preferred date (optional)',
    address: 'Property address or area',
    describe: 'Describe the job',
    quantity: 'Quantity needed',
    topic: 'What is this about?',
    topics: ['Sourcing request', 'Supplier introduction', 'Partnership', 'Other question'],
    companyOpt: 'Company (optional)',
    area: 'Area of interest',
    areas: ['Global Trade', 'Quality and partners', 'Company support', 'Not sure yet'],
    language: 'Preferred language',
    languages: ['English', 'French', 'No preference'],
    linkOpt: 'Link to your CV or profile (optional)',
    subjects: {
      property: 'Property quote request',
      trade: (p) => `Trade quote request: ${p}`,
      contact: 'Website message',
      careers: 'Career interest',
    },
  },
  fr: {
    sending: 'Envoi de votre demande…',
    sent: 'Merci. Nous avons bien reçu votre message et nous vous répondrons par courriel.',
    error: (email) => `Une erreur s’est produite et votre message n’a pas été envoyé. Veuillez réessayer ou écrire à ${email}.`,
    unconfigured: (phone, email) => `Ce formulaire n’est pas encore relié : rien n’a été envoyé. Veuillez appeler le ${phone} ou écrire à ${email}.`,
    hp: 'Laissez ce champ vide',
    fullName: 'Nom complet',
    email: 'Courriel',
    company: 'Entreprise',
    phoneOpt: 'Téléphone (facultatif)',
    message: 'Message',
    messageOpt: 'Message (facultatif)',
    send: 'Envoyer la demande',
    sendMessage: 'Envoyer le message',
    tradeNote: (product) => `Produit : ${product}. Tous les champs sont obligatoires, sauf ceux marqués facultatifs.`,
    service: 'Service',
    dateOpt: 'Date souhaitée (facultatif)',
    address: 'Adresse ou secteur de l’immeuble',
    describe: 'Décrivez le travail',
    quantity: 'Quantité souhaitée',
    topic: 'De quoi s’agit-il ?',
    topics: ['Demande d’approvisionnement', 'Présentation d’un fournisseur', 'Partenariat', 'Autre question'],
    companyOpt: 'Entreprise (facultatif)',
    area: 'Domaine d’intérêt',
    areas: ['Global Trade', 'Qualité et partenaires', 'Soutien à l’entreprise', 'Je ne sais pas encore'],
    language: 'Langue préférée',
    languages: ['Anglais', 'Français', 'Sans préférence'],
    linkOpt: 'Lien vers votre CV ou votre profil (facultatif)',
    subjects: {
      property: 'Demande de devis – services immobiliers',
      trade: (p) => `Demande de devis commercial : ${p}`,
      contact: 'Message du site',
      careers: 'Intérêt pour un poste',
    },
  },
  es: {
    sending: 'Enviando su solicitud…',
    sent: 'Gracias. Hemos recibido su mensaje y le responderemos por correo electrónico.',
    error: (email) => `Algo salió mal y su mensaje no se envió. Inténtelo de nuevo o escriba a ${email}.`,
    unconfigured: (phone, email) => `Este formulario aún no está conectado, así que no se envió nada. Llame al ${phone} o escriba a ${email}.`,
    hp: 'Deje este campo vacío',
    fullName: 'Nombre completo',
    email: 'Correo electrónico',
    company: 'Empresa',
    phoneOpt: 'Teléfono (opcional)',
    message: 'Mensaje',
    messageOpt: 'Mensaje (opcional)',
    send: 'Enviar solicitud',
    sendMessage: 'Enviar mensaje',
    tradeNote: (product) => `Producto: ${product}. Todos los campos son obligatorios, salvo los marcados como opcionales.`,
    service: 'Servicio',
    dateOpt: 'Fecha preferida (opcional)',
    address: 'Dirección o zona del inmueble',
    describe: 'Describa el trabajo',
    quantity: 'Cantidad necesaria',
    topic: '¿De qué se trata?',
    topics: ['Solicitud de abastecimiento', 'Presentación de un proveedor', 'Colaboración', 'Otra consulta'],
    companyOpt: 'Empresa (opcional)',
    area: 'Área de interés',
    areas: ['Global Trade', 'Calidad y socios', 'Apoyo a la empresa', 'Aún no lo sé'],
    language: 'Idioma preferido',
    languages: ['Inglés', 'Francés', 'Sin preferencia'],
    linkOpt: 'Enlace a su CV o perfil (opcional)',
    subjects: {
      property: 'Solicitud de presupuesto – servicios inmobiliarios',
      trade: (p) => `Solicitud de presupuesto comercial: ${p}`,
      contact: 'Mensaje del sitio web',
      careers: 'Interés en un puesto',
    },
  },
};
