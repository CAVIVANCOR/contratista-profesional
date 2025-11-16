// ============================================
// SERVICIOS DE J-ALVAREZ CONTRATISTAS
// Servicios especializados en construcción
// ============================================

export const services = [
  {
    id: 1,
    title: 'Carpintería de Madera',
    icon: 'pi-box',
    category: 'carpinteria',
    shortDescription: 'Fabricación e instalación de puertas, muebles y estructuras de madera',
    description: 'Servicio completo de carpintería profesional especializado en fabricación de puertas interiores y exteriores, mobiliario en melanina, estructuras de madera y acabados de alta calidad.',
    features: [
      'Puertas de madera interiores y exteriores',
      'Techos de madera sol y sombra, pérgolas',
      'Plataformas de madera',
      'Escaleras de madera',
      'Escritorios en melanina',
      'Archivadores de escritorio',
      'Closets de melanina',
      'Cocinas de melanina',
      'Deck para piscinas',
      'Pisos estructurados de madera',
      'Pisos laminados y zócalos',
    ],
    benefits: [
      'Materiales de primera calidad',
      'Diseños personalizados',
      'Acabados profesionales',
      'Garantía de calidad',
    ],
    image: '/images/services/carpinteria.jpg',
    priceRange: 'Desde S/. 80 por m²',
    duration: '2-4 semanas',
    warranty: '1 año',
  },
  {
    id: 2,
    title: 'Sistemas de Drywall',
    icon: 'pi-th-large',
    category: 'drywall',
    shortDescription: 'Muros, cielos rasos y estructuras en drywall',
    description: 'Especializados en instalación de sistemas de drywall con acabados lisos y profesionales. Trabajamos en muros, cielos rasos, dinteles y baldosas con los más altos estándares de calidad.',
    features: [
      'Muros de drywall',
      'Cielos rasos',
      'Dinteles',
      'Baldosas',
      'Tabiques divisorios',
      'Sistemas acústicos',
      'Estructuras metálicas',
      'Acabados especiales',
    ],
    benefits: [
      'Instalación rápida',
      'Acabados perfectos',
      'Aislamiento térmico y acústico',
      'Versatilidad de diseño',
    ],
    image: '/images/services/drywall.jpg',
    priceRange: 'Desde S/. 45 por m²',
    duration: '1-3 semanas',
    warranty: '6 meses',
  },
  {
    id: 3,
    title: 'Acabados de Pintura',
    icon: 'pi-palette',
    category: 'pintura',
    shortDescription: 'Pintura profesional con acabados especializados',
    description: 'Servicio profesional de pintura con técnicas especializadas y productos de alta calidad. Ofrecemos laqueados, barnizados, poliuretano, acrílicos, gloss y pintura látex para interiores y exteriores.',
    features: [
      'Laqueados profesionales',
      'Barnizados',
      'Poliuretano',
      'Acrílicos',
      'Pintura Gloss DD',
      'Pintura Látex',
      'Pintura interiores y exteriores',
      'Acabados en interiores y exteriores',
    ],
    benefits: [
      'Pinturas de primera calidad',
      'Acabados profesionales',
      'Durabilidad garantizada',
      'Asesoría de colores',
    ],
    image: '/images/services/pintura.jpg',
    priceRange: 'Desde S/. 25 por m²',
    duration: '1-2 semanas',
    warranty: '6 meses',
  },
]

export const serviceCategories = [
  { id: 'all', label: 'Todos los Servicios' },
  { id: 'carpinteria', label: 'Carpintería' },
  { id: 'drywall', label: 'Drywall' },
  { id: 'electricas', label: 'Instalaciones Eléctricas' },
  { id: 'sanitarias', label: 'Instalaciones Sanitarias' },
  { id: 'pintura', label: 'Pintura' },
  { id: 'pisos', label: 'Pisos y Revestimientos' },
]

// Servicios más solicitados
export const popularServices = services.slice(0, 3)

// Estadísticas de servicios
export const serviceStats = {
  totalServices: services.length,
  projectsCompleted: '100+',
  clientSatisfaction: '98%',
  yearsExperience: '15+',
}

export default services