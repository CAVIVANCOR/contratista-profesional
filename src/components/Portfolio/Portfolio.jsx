import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { X, ZoomIn, MapPin, Calendar, Building2 } from 'lucide-react'
import './Portfolio.css'

const Portfolio = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedImage, setSelectedImage] = useState(null)
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Colegio Santiago Antúnez de Mayolo',
      category: 'educacion',
      location: 'Independencia, Lima',
      client: 'Consorcio EB - Sinohydro Corporation Limited',
      year: '2023',
      description: 'Construcción integral de infraestructura educativa moderna con acabados de primera calidad.',
      images: [
        '/images/projects/ColegiosEmblematicos/1.jpg',
        '/images/projects/ColegiosEmblematicos/2.jpg',
        '/images/projects/ColegiosEmblematicos/3.jpg',
        '/images/projects/ColegiosEmblematicos/4.jpg',
      ],
    },
    {
      id: 2,
      title: 'Colegio Virgen del Carmen',
      category: 'educacion',
      location: 'Comas, Lima',
      client: 'China Power Investment Corporation',
      year: '2023',
      description: 'Proyecto de colegios emblemáticos con carpintería especializada y sistemas de drywall.',
      images: [
        '/images/projects/ColegiosEmblematicos/5.jpg',
        '/images/projects/ColegiosEmblematicos/6.jpg',
        '/images/projects/ColegiosEmblematicos/7.jpg',
        '/images/projects/ColegiosEmblematicos/8.jpg',
      ],
    },
  ]

  const categories = [
    { id: 'all', label: 'Todos los Proyectos' },
    { id: 'educacion', label: 'Educación' },
    { id: 'comercial', label: 'Comercial' },
    { id: 'residencial', label: 'Residencial' },
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container">
        {/* Header con animación */}
        <motion.div
          className="portfolio-header"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
        >
          <motion.div
            className="section-badge"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Building2 size={24} />
            <span>Nuestros Proyectos</span>
          </motion.div>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Portfolio de <span className="gradient-text">Excelencia</span>
          </motion.h2>
          <motion.p
            className="section-description"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Proyectos que transforman espacios y superan expectativas. Cada obra refleja nuestro compromiso con la calidad y la innovación.
          </motion.p>
        </motion.div>

        {/* Filtros animados */}
        <motion.div
          className="portfolio-filters"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {categories.map((cat, index) => (
            <motion.button
              key={cat.id}
              className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid de proyectos */}
        <motion.div
          className="portfolio-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <div className="project-images">
                  {project.images.map((img, idx) => (
                    <motion.div
                      key={idx}
                      className="project-image-wrapper"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      whileHover={{ scale: 1.05, zIndex: 10 }}
                      onClick={() => setSelectedImage({ project, img, idx })}
                    >
                      <img src={img} alt={`${project.title} ${idx + 1}`} />
                      <motion.div
                        className="image-overlay"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <ZoomIn size={32} />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="project-info"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <motion.h3
                    whileHover={{ x: 5, color: '#B8E6C9' }}
                    transition={{ duration: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-details">
                    <motion.div 
                      className="detail"
                      whileHover={{ x: 3 }}
                    >
                      <MapPin size={16} />
                      <span>{project.location}</span>
                    </motion.div>
                    <motion.div 
                      className="detail"
                      whileHover={{ x: 3 }}
                    >
                      <Calendar size={16} />
                      <span>{project.year}</span>
                    </motion.div>
                    <motion.div 
                      className="detail client"
                      whileHover={{ x: 3 }}
                    >
                      <Building2 size={16} />
                      <span>{project.client}</span>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal de imagen ampliada */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="image-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.5, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.5, rotate: 10 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                className="modal-close"
                onClick={() => setSelectedImage(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>
              <motion.img
                src={selectedImage.img}
                alt={selectedImage.project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                className="modal-info"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3>{selectedImage.project.title}</h3>
                <p>{selectedImage.project.location}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Portfolio