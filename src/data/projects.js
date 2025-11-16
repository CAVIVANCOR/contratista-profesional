// ============================================
// PROYECTOS DE J-ALVAREZ CONTRATISTAS
// Portfolio de proyectos completados
// ============================================

export const projects = [
  {
    id: 1,
    title: 'Colegio Santiago Antúnez de Mayolo',
    category: 'educacion',
    location: 'Independencia, Lima, Perú',
    client: 'Consorcio EB - Sinohydro Corporation Limited',
    year: '2023',
    duration: '8 meses',
    area: '5,000 m²',
    status: 'Completado',
    description: 'Construcción integral de infraestructura educativa moderna con acabados de primera calidad. Proyecto emblemático que incluye carpintería especializada, sistemas de drywall, instalaciones eléctricas y sanitarias, y acabados de pintura.',
    services: [
      'Carpintería estructural y decorativa',
      'Instalación de sistemas de drywall',
      'Instalaciones eléctricas completas',
      'Instalaciones sanitarias',
      'Acabados de pintura profesional',
      'Pisos y revestimientos',
    ],
    features: [
      'Aulas modernas con acabados de alta calidad',
      'Laboratorios equipados',
      'Biblioteca con mobiliario personalizado',
      'Auditorios con acústica optimizada',
      'Espacios administrativos',
      'Zonas recreativas',
    ],
    images: [
      '/images/projects/ColegiosEmblematicos/1.jpg',
      '/images/projects/ColegiosEmblematicos/2.jpg',
      '/images/projects/ColegiosEmblematicos/3.jpg',
      '/images/projects/ColegiosEmblematicos/4.jpg',
    ],
    featured: true,
    budget: 'S/. 500,000+',
    team: 25,
    completion: '100%',
  },
  {
    id: 2,
    title: 'Colegio Virgen del Carmen',
    category: 'educacion',
    location: 'Comas, Lima, Perú',
    client: 'China Power Investment Corporation',
    year: '2023',
    duration: '7 meses',
    area: '4,500 m²',
    status: 'Completado',
    description: 'Proyecto de colegios emblemáticos con carpintería especializada y sistemas de drywall. Infraestructura educativa de última generación con espacios funcionales y modernos.',
    services: [
      'Carpintería fina para mobiliario educativo',
      'Sistemas de drywall con aislamiento acústico',
      'Instalaciones eléctricas de bajo consumo',
      'Instalaciones sanitarias eficientes',
      'Pintura con acabados especiales',
      'Cielos rasos decorativos',
    ],
    features: [
      'Aulas inteligentes',
      'Laboratorios de ciencias',
      'Sala de cómputo',
      'Cafetería moderna',
      'Oficinas administrativas',
      'Áreas verdes integradas',
    ],
    images: [
      '/images/projects/ColegiosEmblematicos/5.jpg',
      '/images/projects/ColegiosEmblematicos/6.jpg',
      '/images/projects/ColegiosEmblematicos/7.jpg',
      '/images/projects/ColegiosEmblematicos/8.jpg',
    ],
    featured: true,
    budget: 'S/. 500,000+',
    team: 25,
    completion: '100%',
  },
  // Plantilla para futuros proyectos
  // {
  //   id: 3,
  //   title: 'Nombre del Proyecto',
  //   category: 'comercial' | 'residencial' | 'educacion' | 'industrial',
  //   location: 'Ubicación',
  //   client: 'Nombre del Cliente',
  //   year: '2024',
  //   duration: 'X meses',
  //   area: 'X m²',
  //   status: 'Completado' | 'En Progreso' | 'Planificado',
  //   description: 'Descripción del proyecto',
  //   services: [],
  //   features: [],
  //   images: [],
  //   featured: false,
  // },
]

export const projectCategories = [
  { id: 'all', label: 'Todos los Proyectos', count: projects.length },
  { id: 'educacion', label: 'Educación', count: projects.filter(p => p.category === 'educacion').length },
  { id: 'comercial', label: 'Comercial', count: projects.filter(p => p.category === 'comercial').length },
  { id: 'residencial', label: 'Residencial', count: projects.filter(p => p.category === 'residencial').length },
  { id: 'industrial', label: 'Industrial', count: projects.filter(p => p.category === 'industrial').length },
]

// Proyectos destacados
export const featuredProjects = projects.filter(p => p.featured)

// Proyectos por categoría
export const getProjectsByCategory = (category) => {
  if (category === 'all') return projects
  return projects.filter(p => p.category === category)
}

// Estadísticas de proyectos
export const projectStats = {
  totalProjects: projects.length,
  completedProjects: projects.filter(p => p.status === 'Completado').length,
  totalArea: '9,500 m²',
  averageDuration: '7.5 meses',
  clientSatisfaction: '100%',
}

export default projects