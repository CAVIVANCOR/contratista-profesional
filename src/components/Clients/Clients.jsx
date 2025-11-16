import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Building2, MapPin, Award, TrendingUp } from 'lucide-react'
import { clientes, clientCategories, clientStats } from '../../data/clientes'
import './Clients.css'

const Clients = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [hoveredClient, setHoveredClient] = useState(null)

  const filteredClients = selectedCategory === 'all'
    ? clientes
    : clientes.filter(client => client.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3,
      },
    },
  }

  const getCategoryIcon = (categoryId) => {
    const icons = {
      construccion: 'pi-building',
      inmobiliaria: 'pi-home',
      comercial: 'pi-shopping-cart',
      institucional: 'pi-users',
      gastronomia: 'pi-shopping-bag',
      mobiliario: 'pi-box',
      salud: 'pi-heart',
    }
    return icons[categoryId] || 'pi-building'
  }

  return (
    <section id="clients" className="clients section">
      <div className="container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="clients-header"
        >
          <motion.div
            className="section-badge"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Award size={24} />
            <span>Nuestros Clientes</span>
          </motion.div>
          <h2>Confían en Nosotros</h2>
          <p>Más de {clientStats.total} empresas líderes nos eligen para sus proyectos</p>
        </motion.div>

        {/* Estadísticas */}
        <motion.div
          className="clients-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="stat-card">
            <Building2 size={32} />
            <h3>{clientStats.total}</h3>
            <p>Clientes Activos</p>
          </div>
          <div className="stat-card">
            <TrendingUp size={32} />
            <h3>{clientStats.construccion}</h3>
            <p>Proyectos de Construcción</p>
          </div>
          <div className="stat-card">
            <Award size={32} />
            <h3>{clientStats.satisfaccion}</h3>
            <p>Satisfacción</p>
          </div>
        </motion.div>

        {/* Filtros de Categoría */}
        <motion.div
          className="clients-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {clientCategories.map((category) => (
            <motion.button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className={`pi ${category.icon}`}></i>
              <span>{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Grid de Clientes */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="clients-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredClients.map((client, index) => (
              <motion.div
                key={client.id}
                className="client-card"
                variants={itemVariants}
                onHoverStart={() => setHoveredClient(client.id)}
                onHoverEnd={() => setHoveredClient(null)}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="client-card-inner">
                  <div className="client-logo">
                    <img 
                      src={client.logo} 
                      alt={`Logo ${client.name}`}
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextElementSibling.style.display = 'flex'
                      }}
                    />
                    <div className="client-logo-fallback" style={{ display: 'none' }}>
                      <i className={`pi ${client.icon}`}></i>
                    </div>
                  </div>
                  <div className="client-info">
                    <h3>{client.name}</h3>
                    <p className="client-category">{client.description}</p>
                    <div className="client-location">
                      <MapPin size={14} />
                      <span>{client.distrito}, {client.departamento}</span>
                    </div>
                    {client.ruc && (
                      <p className="client-ruc">RUC: {client.ruc}</p>
                    )}
                  </div>
                  
                  {/* Hover Overlay */}
                  <AnimatePresence>
                    {hoveredClient === client.id && (
                      <motion.div
                        className="client-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <p className="client-description">{client.projectDescription}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Contador de resultados */}
        <motion.div
          className="clients-count"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p>Mostrando <strong>{filteredClients.length}</strong> de <strong>{clientStats.total}</strong> clientes</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Clients