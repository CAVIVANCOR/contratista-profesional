// ============================================
// EQUIPO DE J-ALVAREZ CONTRATISTAS
// Profesionales especializados
// ============================================

export const team = [
  {
    id: 1,
    name: 'José Álvarez',
    role: 'Director General',
    specialty: 'Carpintería y Construcción',
    experience: '15+ años',
    description: 'Maestro carpintero con amplia experiencia en proyectos de gran envergadura. Especialista en acabados de alta calidad.',
    skills: ['Carpintería fina', 'Gestión de proyectos', 'Diseño personalizado'],
    image: '/images/team/jose-alvarez.jpg',
    email: 'carpinteria_jalvarez@hotmail.com',
    phone: '+51 947 175 210',
    certifications: ['Maestro Carpintero Certificado', 'Gerente de Proyectos'],
  },
  {
    id: 2,
    name: 'Equipo de Carpintería',
    role: 'Maestros Carpinteros',
    specialty: 'Fabricación e Instalación',
    experience: '10+ años promedio',
    description: 'Equipo altamente calificado en fabricación e instalación de estructuras de madera y acabados especializados.',
    skills: ['Carpintería estructural', 'Acabados finos', 'Instalación precisa'],
    image: '/images/team/equipo-carpinteria.jpg',
    members: 8,
    projectsCompleted: '50+',
  },
  {
    id: 3,
    name: 'Equipo de Drywall',
    role: 'Especialistas en Drywall',
    specialty: 'Sistemas de Drywall',
    experience: '8+ años promedio',
    description: 'Expertos en instalación de sistemas de drywall para proyectos comerciales, educativos y residenciales.',
    skills: ['Instalación de drywall', 'Acabados lisos', 'Sistemas acústicos'],
    image: '/images/team/equipo-drywall.jpg',
    members: 6,
    projectsCompleted: '40+',
  },
  {
    id: 4,
    name: 'Equipo de Pintura',
    role: 'Pintores Profesionales',
    specialty: 'Acabados de Pintura',
    experience: '7+ años promedio',
    description: 'Profesionales en aplicación de pintura con técnicas modernas y acabados impecables.',
    skills: ['Pintura decorativa', 'Acabados texturizados', 'Pintura industrial'],
    image: '/images/team/equipo-pintura.jpg',
    members: 5,
    projectsCompleted: '60+',
  },
  {
    id: 5,
    name: 'Equipo de Instalaciones',
    role: 'Técnicos Instaladores',
    specialty: 'Instalaciones Eléctricas y Sanitarias',
    experience: '9+ años promedio',
    description: 'Técnicos especializados en instalaciones eléctricas y sanitarias para proyectos integrales.',
    skills: ['Instalaciones eléctricas', 'Instalaciones sanitarias', 'Mantenimiento'],
    image: '/images/team/equipo-instalaciones.jpg',
    members: 6,
    projectsCompleted: '45+',
  },
]

// Estadísticas del equipo
export const teamStats = {
  totalMembers: team.reduce((sum, t) => sum + (t.members || 1), 0),
  averageExperience: '10+ años',
  specializations: 5,
  projectsCompleted: '100+',
}

// Líder del equipo
export const teamLeader = team.find(t => t.id === 1)

export default team