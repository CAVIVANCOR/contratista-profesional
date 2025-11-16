import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { X, ZoomIn, MapPin, Calendar, Building2, ChevronLeft, ChevronRight } from 'lucide-react'
import { projects, projectCategories } from '../../data/projects'
import { content } from '../../data/content'
import './Portfolio.css'

const Portfolio = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedImage, setSelectedImage] = useState(null)
  const [filter, setFilter] = useState('all')
  const [carouselIndexes, setCarouselIndexes] = useState({})
  const [pausedCarousels, setPausedCarousels] = useState({})

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  useEffect(() => {
    const intervals = {}
    filteredProjects.forEach((project) => {
      if (!pausedCarousels[project.id]) {
        intervals[project.id] = setInterval(() => {
          setCarouselIndexes((prev) => ({
            ...prev,
            [project.id]: ((prev[project.id] || 0) + 1) % project.images.length,
          }))
        }, 4000) // Cambia cada 4 segundos
      }
    })

    return () => {
      Object.values(intervals).forEach(clearInterval)
    }
  }, [filteredProjects, pausedCarousels])

  const nextImage = (projectId, imagesLength) => {
    setCarouselIndexes((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % imagesLength,
    }))
  }

  const prevImage = (projectId, imagesLength) => {
    setCarouselIndexes((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + imagesLength) % imagesLength,
    }))
  }

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
            <span>{content.portfolio.subtitle}</span>
          </motion.div>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {content.portfolio.title.split(' ').slice(0, 2).join(' ')} <span className="gradient-text">{content.portfolio.title.split(' ').slice(2).join(' ')}</span>
          </motion.h2>
          <motion.p
            className="section-description"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {content.portfolio.description}
          </motion.p>
        </motion.div>

        {/* Filtros animados */}
        <motion.div
          className="portfolio-filters"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {projectCategories.map((cat, index) => (
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
                {/* Carousel de imágenes */}
                <div 
                  className="project-carousel"
                  onMouseEnter={() => setPausedCarousels(prev => ({ ...prev, [project.id]: true }))}
                  onMouseLeave={() => setPausedCarousels(prev => ({ ...prev, [project.id]: false }))}
                >
                  <AnimatePresence mode="wait" custom={carouselIndexes[project.id] || 0}>
                    <motion.div
                      key={carouselIndexes[project.id] || 0}
                      className="carousel-image-wrapper"
                      custom={carouselIndexes[project.id] || 0}
                      initial={{ 
                        opacity: 0, 
                        x: 100,
                        scale: 0.8,
                        rotateY: 45
                      }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        scale: 1,
                        rotateY: 0
                      }}
                      exit={{ 
                        opacity: 0, 
                        x: -100,
                        scale: 0.8,
                        rotateY: -45
                      }}
                      transition={{
                        duration: 0.8,
                        ease: [0.43, 0.13, 0.23, 0.96]
                      }}
                      onClick={() => setSelectedImage({ 
                        project, 
                        img: project.images[carouselIndexes[project.id] || 0], 
                        idx: carouselIndexes[project.id] || 0 
                      })}
                    >
                      <motion.img
                        src={project.images[carouselIndexes[project.id] || 0]}
                        alt={`${project.title} ${(carouselIndexes[project.id] || 0) + 1}`}
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8 }}
                      />
                      <motion.div
                        className="carousel-overlay"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          transition={{ delay: 0.1, type: 'spring', stiffness: 300 }}
                        >
                          <ZoomIn size={48} />
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Controles del carousel */}
                  <motion.button
                    className="carousel-btn carousel-btn-prev"
                    onClick={(e) => {
                      e.stopPropagation()
                      prevImage(project.id, project.images.length)
                    }}
                    whileHover={{ scale: 1.1, x: -5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <ChevronLeft size={24} />
                  </motion.button>
                  <motion.button
                    className="carousel-btn carousel-btn-next"
                    onClick={(e) => {
                      e.stopPropagation()
                      nextImage(project.id, project.images.length)
                    }}
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <ChevronRight size={24} />
                  </motion.button>

                  {/* Indicadores */}
                  <div className="carousel-indicators">
                    {project.images.map((_, idx) => (
                      <motion.button
                        key={idx}
                        className={`carousel-indicator ${(carouselIndexes[project.id] || 0) === idx ? 'active' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation()
                          setCarouselIndexes((prev) => ({
                            ...prev,
                            [project.id]: idx,
                          }))
                        }}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + idx * 0.1 }}
                      />
                    ))}
                  </div>
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