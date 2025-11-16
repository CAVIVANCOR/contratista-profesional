// Contenido general de la página web
export const content = {
  // Información de la empresa
  company: {
    name: 'J-ALVAREZ CONTRATISTAS GENERALES S.A.C.',
    shortName: 'J-Álvarez',
    slogan: 'Construyendo Calidad, Creando Confianza',
    description: 'Organización especializada en Ingeniería, Construcción, Supervisión y Gerencia de Proyectos. Expertos en carpintería de madera, drywall, muebles y acabados de pintura.',
    mission: 'Somos una ORGANIZACIÓN especializada en Ingeniería, Construcción y Gerencia de Proyectos que equilibra las demandas concurrentes de calidad, alcance, tiempo y costes; adaptando las especificaciones, los planes y el enfoque a las diversas inquietudes y expectativas de nuestros clientes. Trabajando en un entorno que motiva y desarrolla a nuestro personal y respetando el medio ambiente en que nos desarrollamos, generamos utilidades para mantener la solidez financiera e impulsar el crecimiento y retribuir adecuadamente a nuestros accionistas.',
    vision: 'Ser reconocidos como la mejor Empresa de Ingeniería, Construcción y Gerencia de Proyectos en los mercados y proyectos donde participemos, en base a nuestro factor humano, políticas de calidad, seguridad y medio ambiente, cumpliendo a cabalidad y puntualidad todos nuestros compromisos en el área de Construcción en Muros de Drywall, Madera, Muebles, Pintura en Gloss DD, Poliuretano y Pintura en acabado en interiores y exteriores.',
    specialties: [
      'Carpintería de Madera',
      'Sistemas de Drywall',
      'Muebles en Melanina',
      'Acabados de Pintura',
      'Gerencia de Proyectos',
      'Supervisión de Obras',
    ],
    values: [
      'Calidad en cada proyecto',
      'Compromiso con el cliente',
      'Puntualidad y responsabilidad',
      'Respeto al medio ambiente',
      'Desarrollo del personal',
      'Solidez financiera',
    ],
  },

  // Sección Hero
  hero: {
    title: 'Ingeniería, Construcción y Gerencia de Proyectos',
    subtitle: 'Especialistas en Carpintería, Drywall y Acabados',
    description: 'Somos una ORGANIZACIÓN especializada en Ingeniería, Construcción y Gerencia de Proyectos que equilibra las demandas concurrentes de calidad, alcance, tiempo y costos; adaptando las especificaciones, los planes y el enfoque a las diversas inquietudes y expectativas de nuestros clientes.',
    descriptionExtended: 'Con un equipo multidisciplinario de profesionales expertos en carpintería, drywall, acabados y construcción, hemos trabajado con más de 50 empresas líderes como Sinohydro Corporation Limited, China Power Investment Corporation (Colegios Emblemáticos), Inmobiliaria Montegrande, Tambo+, Aruma, Tiendas por Retail Cosapi, Renzo Costa, Mall del Sur y FG Edificaciones.',
    cta: {
      primary: 'Cotizar Proyecto',
      secondary: 'Ver Proyectos',
    },
    stats: [
      { value: '100+', label: 'Proyectos Completados' },
      { value: '15+', label: 'Años de Experiencia' },
      { value: '50+', label: 'Clientes Satisfechos' },
      { value: '98%', label: 'Satisfacción del Cliente' },
    ],
  },

  // Sección Servicios
  services: {
    title: 'Nuestros Servicios',
    subtitle: 'Soluciones Integrales',
    description: 'Ofrecemos una amplia gama de servicios especializados para proyectos comerciales, educativos y residenciales. Cada servicio es ejecutado con los más altos estándares de calidad.',
    cta: 'Solicitar Cotización',
  },

  // Sección Clientes
  clients: {
    title: 'Nuestros Clientes',
    subtitle: 'Confían en Nosotros',
    description: 'Hemos trabajado con empresas líderes y entidades gubernamentales en proyectos de gran envergadura, siempre cumpliendo con los más altos estándares de calidad.',
  },

  // Sección Portfolio
  portfolio: {
    title: 'Portfolio de Excelencia',
    subtitle: 'Nuestros Proyectos',
    description: 'Proyectos que transforman espacios y superan expectativas. Cada obra refleja nuestro compromiso con la calidad y la innovación.',
    filters: {
      all: 'Todos los Proyectos',
      education: 'Educación',
      commercial: 'Comercial',
      residential: 'Residencial',
      industrial: 'Industrial',
    },
  },

  // Sección Equipo
  team: {
    title: 'Nuestro Equipo',
    subtitle: 'Profesionales Expertos',
    description: 'Contamos con un equipo altamente calificado de maestros carpinteros, instaladores y técnicos especializados, todos comprometidos con la excelencia en cada proyecto.',
  },

  // Sección Testimonios
  testimonials: {
    title: 'Lo Que Dicen Nuestros Clientes',
    subtitle: 'Testimonios',
    description: 'La satisfacción de nuestros clientes es nuestra mejor carta de presentación. Conoce sus experiencias trabajando con nosotros.',
    items: [
      {
        id: 1,
        name: 'Ing. Carlos Mendoza',
        role: 'Gerente de Proyecto - Consorcio EB',
        text: 'Excelente trabajo en el proyecto de Colegios Emblemáticos. La calidad de los acabados y el cumplimiento de plazos superaron nuestras expectativas. Altamente recomendados.',
        rating: 5,
        project: 'Colegio Santiago Antúnez de Mayolo',
      },
      {
        id: 2,
        name: 'Arq. María Fernández',
        role: 'Directora de Obra - China Power Investment',
        text: 'Profesionalismo y dedicación en cada detalle. El equipo de J-Álvarez demostró gran experiencia y compromiso con la calidad. Definitivamente trabajaremos con ellos nuevamente.',
        rating: 5,
        project: 'Colegio Virgen del Carmen',
      },
      {
        id: 3,
        name: 'Sr. Roberto García',
        role: 'Propietario',
        text: 'Contraté sus servicios para la remodelación de mi oficina. El resultado fue espectacular. Trabajo limpio, rápido y de excelente calidad. Los recomiendo ampliamente.',
        rating: 5,
        project: 'Remodelación de Oficinas',
      },
    ],
  },

  // Sección Contacto
  contact: {
    title: 'Contáctanos',
    subtitle: 'Estamos Aquí para Ayudarte',
    description: 'Comunícate con nosotros para solicitar una cotización o resolver cualquier consulta. Nuestro equipo está listo para atenderte.',
    info: {
      title: '¿Listo para tu Proyecto?',
      description: 'Contáctanos hoy mismo y recibe una cotización personalizada sin compromiso. Estamos listos para hacer realidad tu proyecto.',
      phone: {
        label: 'Teléfono Principal',
        value: '947 175 210',
      },
      phoneAlt: {
        label: 'Teléfono Alternativo',
        value: '931 033 043',
      },
      email: {
        label: 'Correo Electrónico',
        value: 'carpinteria_jalvarez@hotmail.com',
      },
      whatsapp: {
        label: 'WhatsApp',
        value: '+51 947 175 210',
      },
      address: {
        label: 'Ubicación',
        value: 'Lima, Perú',
      },
      hours: {
        label: 'Horario de Atención',
        value: 'Lunes a Sábado: 8:00 AM - 6:00 PM',
      },
    },
    form: {
      title: 'Solicita tu Cotización',
      fields: {
        name: { label: 'Nombre Completo', placeholder: 'Tu nombre' },
        email: { label: 'Correo Electrónico', placeholder: 'tu@email.com' },
        phone: { label: 'Teléfono', placeholder: '+51 999 999 999' },
        service: { label: 'Servicio de Interés', placeholder: 'Selecciona un servicio' },
        message: { label: 'Mensaje', placeholder: 'Cuéntanos sobre tu proyecto...' },
      },
      button: 'Enviar Mensaje',
      success: '¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.',
      error: 'Hubo un error al enviar el mensaje. Por favor, inténtalo nuevamente.',
    },
  },

  // Footer
  footer: {
    description: 'J-ALVAREZ CONTRATISTAS GENERALES S.A.C. - Organización especializada en Ingeniería, Construcción, Supervisión y Gerencia de Proyectos. Expertos en carpintería, drywall y acabados.',
    sections: {
      services: {
        title: 'Servicios',
        links: [
          'Carpintería',
          'Drywall',
          'Instalaciones Eléctricas',
          'Instalaciones Sanitarias',
          'Pintura',
          'Pisos',
        ],
      },
      company: {
        title: 'Empresa',
        links: [
          'Nosotros',
          'Proyectos',
          'Equipo',
          'Testimonios',
          'Contacto',
        ],
      },
      legal: {
        title: 'Legal',
        links: [
          'Política de Privacidad',
          'Términos y Condiciones',
          'Política de Cookies',
        ],
      },
    },
    social: {
      facebook: '#',
      instagram: '#',
      linkedin: '#',
      youtube: '#',
    },
    copyright: ' 2024 J-ALVAREZ CONTRATISTAS GENERALES S.A.C. Todos los derechos reservados.',
  },

  // WhatsApp Button
  whatsapp: {
    message: '¡Hola! Estoy interesado en sus servicios de carpintería, drywall y construcción. ¿Podrían brindarme más información?',
    accountName: 'J-ALVAREZ Contratistas',
    statusMessage: 'Responde en minutos',
    chatMessage: '¡Hola! ¿En qué podemos ayudarte hoy?',
    placeholder: 'Escribe tu mensaje...',
  },
}

export default content