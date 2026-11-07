import type { Locale } from './i18n';

export type LegalSection = { id: string; title: string; paras?: string[]; list?: string[]; after?: string[] };
export type LegalDoc = { eyebrow: string; title: string; lead: string; sections: LegalSection[] };
export type LegalKind = 'privacy' | 'terms' | 'accessibility';

const EMAIL = 'contact@transworldsg.com';

export const legal: Record<Locale, Record<LegalKind, LegalDoc>> = {
  /* ============================ ENGLISH ============================ */
  en: {
    privacy: {
      eyebrow: 'Legal',
      title: 'Privacy',
      lead: 'What we collect through this website, why, and the choices you have.',
      sections: [
        {
          id: 'who',
          title: 'Who we are',
          paras: [
            'TransWorld SG Consulting Group Inc. (Reg. No. 7FBFNK84), Canada, is responsible for the personal information collected through this website. Our Cameroon company, TransWorld SG Consulting SARL, may receive requests that concern its own activities.',
          ],
        },
        {
          id: 'collect',
          title: 'What we collect',
          paras: ['We collect only what you give us, and a small amount of technical data.'],
          list: [
            'Quote and contact forms: your name, email, company, phone number, address or area, and the details of your request.',
            'Email and phone: what you tell us when you write or call.',
            'Technical data: the IP address, browser type and pages requested, recorded in the server logs of our hosting provider.',
          ],
        },
        {
          id: 'why',
          title: 'Why we use it',
          list: [
            'To reply to you and to prepare quotes.',
            'To carry out the services you ask for.',
            'To keep the website secure and working.',
            'To meet our legal and accounting obligations.',
          ],
          after: ['We do not sell personal information. We do not send marketing email unless you ask us to.'],
        },
        {
          id: 'cookies',
          title: 'Cookies and analytics',
          paras: [
            'This website does not set advertising or tracking cookies, and does not use analytics at this time. If that changes, we will update this page first.',
          ],
        },
        {
          id: 'providers',
          title: 'Service providers',
          paras: [
            'We use service providers to run the website. Our host, Vercel Inc., serves the pages. Our form provider, Formspree, receives what you type into a form and passes it to us by email. These providers may process information outside Canada, including in the United States.',
          ],
        },
        {
          id: 'keep',
          title: 'How long we keep it',
          paras: ['We keep personal information for as long as we need it to answer you, provide the service and meet our legal and accounting duties. Then we delete it or make it anonymous.'],
        },
        {
          id: 'rights',
          title: 'Your rights',
          paras: [
            `You can ask to see the personal information we hold about you, ask us to correct it, or withdraw your consent to its use. Write to ${EMAIL}. If you are not satisfied with our answer, you may contact the Office of the Privacy Commissioner of Canada.`,
          ],
        },
        {
          id: 'changes',
          title: 'Changes to this page',
          paras: ['We will update this page when our practices change. The date at the top shows the latest update.'],
        },
      ],
    },
    terms: {
      eyebrow: 'Legal',
      title: 'Terms of use',
      lead: 'The ground rules for using this website.',
      sections: [
        {
          id: 'use',
          title: 'Using this website',
          paras: ['By using this website you agree to these terms. If you do not agree, please do not use it. You may use the site for lawful purposes only.'],
        },
        {
          id: 'information',
          title: 'Information on this website',
          paras: [
            'We describe our services and products in good faith. Descriptions are for information. Specifications, availability, prices and delivery terms are confirmed in writing before any sale or service.',
          ],
        },
        {
          id: 'quotes',
          title: 'Quotes and orders',
          paras: [
            'Sending a form or an email is a request, not an order. An agreement exists only when both parties have accepted a written quote or contract.',
          ],
        },
        {
          id: 'content',
          title: 'Our content',
          paras: [
            'The text, design and logo on this website belong to TransWorld SG Consulting Group Inc. or are used with permission. Some photographs come from third parties and are used under their licences. Please do not copy or reuse our content without written permission.',
          ],
        },
        {
          id: 'links',
          title: 'Links to other sites',
          paras: ['This website may link to other sites. We do not control them and are not responsible for their content.'],
        },
        {
          id: 'liability',
          title: 'Limits of liability',
          paras: [
            'The website is provided as is. To the extent the law allows, we are not liable for loss that comes from using it or from being unable to use it. Nothing in these terms limits any right you have that cannot be limited by law.',
          ],
        },
        {
          id: 'law',
          title: 'Governing law',
          paras: ['These terms are governed by the laws of the Province of Ontario and the federal laws of Canada that apply there.'],
        },
        {
          id: 'changes',
          title: 'Changes',
          paras: [`We may change these terms. The date at the top shows the latest update. Questions: ${EMAIL}.`],
        },
      ],
    },
    accessibility: {
      eyebrow: 'Accessibility',
      title: 'Accessibility statement',
      lead: 'We want everyone to be able to use this website, with a keyboard, a screen reader, a phone or a mouse.',
      sections: [
        {
          id: 'commitment',
          title: 'Our aim',
          paras: ['We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.2, level AA. We have not yet had an independent audit, so we do not claim full conformance.'],
        },
        {
          id: 'done',
          title: 'What we have done',
          list: [
            'Every page can be used with a keyboard, and the focus is always visible.',
            'A “Skip to main content” link is the first thing on every page.',
            'Menus and the slideshow can be paused, and they work with a screen reader.',
            'Text and buttons have strong colour contrast, and touch targets are large.',
            'Animations are reduced or removed if your device asks for less motion.',
            'Forms have visible labels, and error and success messages are announced.',
            'Pages are marked with their language.',
          ],
        },
        {
          id: 'limits',
          title: 'Known limits',
          list: [
            'Some pages are still in English only. They are marked as such.',
            'Some photographs are decorative stock images and carry no description.',
          ],
        },
        {
          id: 'feedback',
          title: 'Tell us about a problem',
          paras: [
            `If something is hard to use, or you need information in another format, write to ${EMAIL} or call +1 (437) 332-6929. Tell us the page and what went wrong. We aim to reply within five business days.`,
          ],
        },
      ],
    },
  },

  /* ============================ FRANÇAIS ============================ */
  fr: {
    privacy: {
      eyebrow: 'Juridique',
      title: 'Confidentialité',
      lead: 'Ce que nous recueillons par ce site, pourquoi, et les choix dont vous disposez.',
      sections: [
        {
          id: 'who',
          title: 'Qui nous sommes',
          paras: [
            'TransWorld SG Consulting Group Inc. (n° d’enregistrement 7FBFNK84), Canada, est responsable des renseignements personnels recueillis par ce site. Notre société au Cameroun, TransWorld SG Consulting SARL, peut recevoir des demandes qui concernent ses propres activités.',
          ],
        },
        {
          id: 'collect',
          title: 'Ce que nous recueillons',
          paras: ['Nous recueillons uniquement ce que vous nous donnez, ainsi qu’un peu de données techniques.'],
          list: [
            'Formulaires de devis et de contact : votre nom, votre courriel, votre entreprise, votre numéro de téléphone, votre adresse ou votre région, et le détail de votre demande.',
            'Courriel et téléphone : ce que vous nous dites lorsque vous nous écrivez ou nous appelez.',
            'Données techniques : l’adresse IP, le type de navigateur et les pages demandées, consignés dans les journaux du serveur de notre hébergeur.',
          ],
        },
        {
          id: 'why',
          title: 'Pourquoi nous les utilisons',
          list: [
            'Pour vous répondre et préparer des devis.',
            'Pour réaliser les services que vous demandez.',
            'Pour assurer la sécurité et le bon fonctionnement du site.',
            'Pour respecter nos obligations légales et comptables.',
          ],
          after: ['Nous ne vendons pas de renseignements personnels. Nous n’envoyons pas de courriels promotionnels, sauf si vous nous le demandez.'],
        },
        {
          id: 'cookies',
          title: 'Témoins (cookies) et statistiques',
          paras: [
            'Ce site ne dépose pas de témoins publicitaires ni de témoins de suivi, et n’utilise pas d’outil de statistiques pour le moment. Si cela change, nous mettrons d’abord cette page à jour.',
          ],
        },
        {
          id: 'providers',
          title: 'Fournisseurs de services',
          paras: [
            'Nous faisons appel à des fournisseurs pour faire fonctionner le site. Notre hébergeur, Vercel Inc., diffuse les pages. Notre fournisseur de formulaires, Formspree, reçoit ce que vous saisissez dans un formulaire et nous le transmet par courriel. Ces fournisseurs peuvent traiter des renseignements à l’extérieur du Canada, notamment aux États-Unis.',
          ],
        },
        {
          id: 'keep',
          title: 'Combien de temps nous les conservons',
          paras: ['Nous conservons les renseignements personnels aussi longtemps que nécessaire pour vous répondre, fournir le service et respecter nos obligations légales et comptables. Ensuite, nous les supprimons ou les rendons anonymes.'],
        },
        {
          id: 'rights',
          title: 'Vos droits',
          paras: [
            `Vous pouvez demander à consulter les renseignements personnels que nous détenons à votre sujet, demander de les corriger ou retirer votre consentement à leur utilisation. Écrivez à ${EMAIL}. Si notre réponse ne vous satisfait pas, vous pouvez communiquer avec le Commissariat à la protection de la vie privée du Canada.`,
          ],
        },
        {
          id: 'changes',
          title: 'Modifications de cette page',
          paras: ['Nous mettrons cette page à jour lorsque nos pratiques changeront. La date en haut de la page indique la dernière mise à jour.'],
        },
      ],
    },
    terms: {
      eyebrow: 'Juridique',
      title: 'Conditions d’utilisation',
      lead: 'Les règles de base pour utiliser ce site.',
      sections: [
        {
          id: 'use',
          title: 'Utilisation du site',
          paras: ['En utilisant ce site, vous acceptez les présentes conditions. Si vous ne les acceptez pas, veuillez ne pas l’utiliser. Vous ne pouvez l’utiliser qu’à des fins légales.'],
        },
        {
          id: 'information',
          title: 'Information présentée sur le site',
          paras: [
            'Nous décrivons nos services et nos produits de bonne foi. Les descriptions sont données à titre informatif. Les spécifications, la disponibilité, les prix et les conditions de livraison sont confirmés par écrit avant toute vente ou tout service.',
          ],
        },
        {
          id: 'quotes',
          title: 'Devis et commandes',
          paras: [
            'L’envoi d’un formulaire ou d’un courriel est une demande, et non une commande. Une entente n’existe que lorsque les deux parties ont accepté un devis ou un contrat écrit.',
          ],
        },
        {
          id: 'content',
          title: 'Notre contenu',
          paras: [
            'Les textes, la conception et le logo de ce site appartiennent à TransWorld SG Consulting Group Inc. ou sont utilisés avec autorisation. Certaines photographies proviennent de tiers et sont utilisées selon leurs licences. Veuillez ne pas copier ni réutiliser notre contenu sans autorisation écrite.',
          ],
        },
        {
          id: 'links',
          title: 'Liens vers d’autres sites',
          paras: ['Ce site peut contenir des liens vers d’autres sites. Nous ne les contrôlons pas et ne sommes pas responsables de leur contenu.'],
        },
        {
          id: 'liability',
          title: 'Limites de responsabilité',
          paras: [
            'Le site est fourni tel quel. Dans la mesure permise par la loi, nous ne sommes pas responsables des pertes découlant de son utilisation ou de l’impossibilité de l’utiliser. Rien dans ces conditions ne limite un droit que la loi ne permet pas de limiter.',
          ],
        },
        {
          id: 'law',
          title: 'Droit applicable',
          paras: ['Les présentes conditions sont régies par les lois de la province de l’Ontario et par les lois fédérales du Canada qui s’y appliquent.'],
        },
        {
          id: 'changes',
          title: 'Modifications',
          paras: [`Nous pouvons modifier ces conditions. La date en haut de la page indique la dernière mise à jour. Questions : ${EMAIL}.`],
        },
      ],
    },
    accessibility: {
      eyebrow: 'Accessibilité',
      title: 'Déclaration d’accessibilité',
      lead: 'Nous voulons que tout le monde puisse utiliser ce site, au clavier, avec un lecteur d’écran, sur un téléphone ou à la souris.',
      sections: [
        {
          id: 'commitment',
          title: 'Notre objectif',
          paras: ['Nous visons la conformité aux Règles pour l’accessibilité des contenus Web (WCAG) 2.2, niveau AA. Le site n’a pas encore fait l’objet d’un audit indépendant ; nous ne prétendons donc pas à une conformité complète.'],
        },
        {
          id: 'done',
          title: 'Ce que nous avons fait',
          list: [
            'Chaque page s’utilise au clavier, et le focus est toujours visible.',
            'Un lien « Aller au contenu principal » est le premier élément de chaque page.',
            'Les menus et le diaporama peuvent être mis en pause et fonctionnent avec un lecteur d’écran.',
            'Les textes et les boutons ont un fort contraste, et les zones tactiles sont grandes.',
            'Les animations sont réduites ou supprimées si votre appareil demande moins de mouvement.',
            'Les formulaires ont des étiquettes visibles, et les messages d’erreur et de confirmation sont annoncés.',
            'La langue de chaque page est indiquée.',
          ],
        },
        {
          id: 'limits',
          title: 'Limites connues',
          list: [
            'Certaines pages ne sont encore disponibles qu’en anglais. Elles sont signalées comme telles.',
            'Certaines photographies sont des images d’illustration décoratives, sans description.',
          ],
        },
        {
          id: 'feedback',
          title: 'Signalez-nous un problème',
          paras: [
            `Si quelque chose est difficile à utiliser, ou si vous avez besoin d’une information dans un autre format, écrivez à ${EMAIL} ou appelez le +1 (437) 332-6929. Indiquez la page et ce qui n’a pas fonctionné. Nous visons à répondre dans un délai de cinq jours ouvrables.`,
          ],
        },
      ],
    },
  },

  /* ============================ ESPAÑOL ============================ */
  es: {
    privacy: {
      eyebrow: 'Legal',
      title: 'Privacidad',
      lead: 'Qué recopilamos a través de este sitio, para qué y qué opciones tiene usted.',
      sections: [
        {
          id: 'who',
          title: 'Quiénes somos',
          paras: [
            'TransWorld SG Consulting Group Inc. (n.º de registro 7FBFNK84), Canadá, es responsable de la información personal recopilada a través de este sitio. Nuestra empresa en Camerún, TransWorld SG Consulting SARL, puede recibir solicitudes relacionadas con sus propias actividades.',
          ],
        },
        {
          id: 'collect',
          title: 'Qué recopilamos',
          paras: ['Recopilamos solo lo que usted nos da y una pequeña cantidad de datos técnicos.'],
          list: [
            'Formularios de presupuesto y de contacto: su nombre, correo electrónico, empresa, número de teléfono, dirección o zona, y los detalles de su solicitud.',
            'Correo y teléfono: lo que nos cuenta cuando nos escribe o nos llama.',
            'Datos técnicos: la dirección IP, el tipo de navegador y las páginas solicitadas, registrados en los archivos del servidor de nuestro proveedor de alojamiento.',
          ],
        },
        {
          id: 'why',
          title: 'Para qué los usamos',
          list: [
            'Para responderle y preparar presupuestos.',
            'Para prestar los servicios que usted solicita.',
            'Para mantener el sitio seguro y en funcionamiento.',
            'Para cumplir nuestras obligaciones legales y contables.',
          ],
          after: ['No vendemos información personal. No enviamos correos de marketing a menos que usted lo pida.'],
        },
        {
          id: 'cookies',
          title: 'Cookies y analítica',
          paras: [
            'Este sitio no instala cookies publicitarias ni de seguimiento, y por ahora no utiliza herramientas de analítica. Si eso cambia, actualizaremos primero esta página.',
          ],
        },
        {
          id: 'providers',
          title: 'Proveedores de servicios',
          paras: [
            'Utilizamos proveedores para que el sitio funcione. Nuestro proveedor de alojamiento, Vercel Inc., sirve las páginas. Nuestro proveedor de formularios, Formspree, recibe lo que usted escribe en un formulario y nos lo envía por correo. Estos proveedores pueden tratar información fuera de Canadá, incluso en Estados Unidos.',
          ],
        },
        {
          id: 'keep',
          title: 'Cuánto tiempo la conservamos',
          paras: ['Conservamos la información personal el tiempo necesario para responderle, prestar el servicio y cumplir nuestras obligaciones legales y contables. Después la eliminamos o la hacemos anónima.'],
        },
        {
          id: 'rights',
          title: 'Sus derechos',
          paras: [
            `Usted puede pedir ver la información personal que tenemos sobre usted, pedir que la corrijamos o retirar su consentimiento para su uso. Escriba a ${EMAIL}. Si no queda satisfecho con nuestra respuesta, puede dirigirse a la Oficina del Comisionado de Privacidad de Canadá.`,
          ],
        },
        {
          id: 'changes',
          title: 'Cambios en esta página',
          paras: ['Actualizaremos esta página cuando cambien nuestras prácticas. La fecha de la parte superior indica la última actualización.'],
        },
      ],
    },
    terms: {
      eyebrow: 'Legal',
      title: 'Términos de uso',
      lead: 'Las reglas básicas para usar este sitio.',
      sections: [
        {
          id: 'use',
          title: 'Uso del sitio',
          paras: ['Al usar este sitio usted acepta estos términos. Si no está de acuerdo, le pedimos que no lo utilice. Solo puede usarlo con fines lícitos.'],
        },
        {
          id: 'information',
          title: 'Información del sitio',
          paras: [
            'Describimos nuestros servicios y productos de buena fe. Las descripciones son informativas. Las especificaciones, la disponibilidad, los precios y las condiciones de entrega se confirman por escrito antes de cualquier venta o servicio.',
          ],
        },
        {
          id: 'quotes',
          title: 'Presupuestos y pedidos',
          paras: [
            'Enviar un formulario o un correo es una solicitud, no un pedido. Solo existe un acuerdo cuando ambas partes han aceptado un presupuesto o un contrato por escrito.',
          ],
        },
        {
          id: 'content',
          title: 'Nuestro contenido',
          paras: [
            'Los textos, el diseño y el logotipo de este sitio pertenecen a TransWorld SG Consulting Group Inc. o se utilizan con permiso. Algunas fotografías proceden de terceros y se usan conforme a sus licencias. Le pedimos que no copie ni reutilice nuestro contenido sin autorización por escrito.',
          ],
        },
        {
          id: 'links',
          title: 'Enlaces a otros sitios',
          paras: ['Este sitio puede enlazar con otros sitios. No los controlamos y no somos responsables de su contenido.'],
        },
        {
          id: 'liability',
          title: 'Límites de responsabilidad',
          paras: [
            'El sitio se ofrece tal cual. En la medida en que la ley lo permita, no somos responsables de las pérdidas derivadas de su uso o de la imposibilidad de usarlo. Nada en estos términos limita un derecho que la ley no permita limitar.',
          ],
        },
        {
          id: 'law',
          title: 'Ley aplicable',
          paras: ['Estos términos se rigen por las leyes de la provincia de Ontario y por las leyes federales de Canadá que se aplican en ella.'],
        },
        {
          id: 'changes',
          title: 'Cambios',
          paras: [`Podemos modificar estos términos. La fecha de la parte superior indica la última actualización. Preguntas: ${EMAIL}.`],
        },
      ],
    },
    accessibility: {
      eyebrow: 'Accesibilidad',
      title: 'Declaración de accesibilidad',
      lead: 'Queremos que todas las personas puedan usar este sitio, con teclado, con lector de pantalla, con un teléfono o con un ratón.',
      sections: [
        {
          id: 'commitment',
          title: 'Nuestro objetivo',
          paras: ['Nuestro objetivo es cumplir las Pautas de Accesibilidad para el Contenido Web (WCAG) 2.2, nivel AA. Todavía no hemos pasado una auditoría independiente, así que no afirmamos una conformidad total.'],
        },
        {
          id: 'done',
          title: 'Lo que hemos hecho',
          list: [
            'Todas las páginas se pueden usar con el teclado y el foco siempre es visible.',
            'Un enlace «Saltar al contenido principal» es lo primero de cada página.',
            'Los menús y la presentación de diapositivas se pueden pausar y funcionan con lector de pantalla.',
            'Los textos y los botones tienen un fuerte contraste y las zonas táctiles son grandes.',
            'Las animaciones se reducen o se eliminan si su dispositivo pide menos movimiento.',
            'Los formularios tienen etiquetas visibles y se anuncian los mensajes de error y de confirmación.',
            'Cada página indica su idioma.',
          ],
        },
        {
          id: 'limits',
          title: 'Limitaciones conocidas',
          list: [
            'Algunas páginas siguen estando solo en inglés. Se indica así.',
            'Algunas fotografías son imágenes decorativas de archivo y no llevan descripción.',
          ],
        },
        {
          id: 'feedback',
          title: 'Cuéntenos si encuentra un problema',
          paras: [
            `Si algo le resulta difícil de usar, o necesita la información en otro formato, escriba a ${EMAIL} o llame al +1 (437) 332-6929. Indíquenos la página y qué falló. Procuramos responder en un plazo de cinco días hábiles.`,
          ],
        },
      ],
    },
  },
};
