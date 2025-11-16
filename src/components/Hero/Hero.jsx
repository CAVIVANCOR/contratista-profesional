import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Button } from 'primereact/button'
import { ChevronDown } from 'lucide-react'
import { content } from '../../data/content'
import './Hero.css'

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Imágenes del proyecto de Colegios Emblemáticos
  const projectImages = [
    '/images/projects/ColegiosEmblematicos/1.jpg',
    '/images/projects/ColegiosEmblematicos/2.jpg',
    '/images/projects/ColegiosEmblematicos/3.jpg',
    '/images/projects/ColegiosEmblematicos/4.jpg',
    '/images/projects/ColegiosEmblematicos/5.jpg',
    '/images/projects/ColegiosEmblematicos/6.jpg',
    '/images/projects/ColegiosEmblematicos/7.jpg',
    '/images/projects/ColegiosEmblematicos/8.jpg',
  ]

  // Cambiar imagen cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % projectImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Seguir el mouse para efecto parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Partículas flotantes
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }))

  return (
    <section id="hero" className="hero">
      {/* Background con carousel de imágenes */}
      <div className="hero-background">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            className="hero-image-container"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.5 }}
            style={{
              backgroundImage: `url(${projectImages[currentImageIndex]})`,
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            }}
          />
        </AnimatePresence>
        
        {/* Overlay oscuro */}
        <div className="hero-overlay"></div>
        
        {/* Gradient animado */}
        <motion.div 
          className="hero-gradient"
          animate={{
            background: [
              'linear-gradient(135deg, rgba(90, 175, 235, 0.3) 0%, rgba(124, 175, 136, 0.3) 100%)',
              'linear-gradient(135deg, rgba(124, 175, 136, 0.3) 0%, rgba(184, 230, 201, 0.3) 100%)',
              'linear-gradient(135deg, rgba(90, 175, 235, 0.3) 0%, rgba(124, 175, 136, 0.3) 100%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        {/* Partículas flotantes */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
      
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Título con animación de letras */}
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {content.company.shortName}
            </motion.span>
            <motion.span 
              className="gradient-text"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {' '}{content.hero.title}
            </motion.span>
          </motion.h1>
          
          {/* Descripción con efecto de aparición */}
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            dangerouslySetInnerHTML={{ __html: content.hero.description.replace(/calidad, alcance, tiempo y costos/g, '<strong>calidad, alcance, tiempo y costos</strong>') }}
          />
          
          <motion.p 
            className="hero-description hero-clients"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {content.hero.descriptionExtended}
          </motion.p>
          
          {/* Botones con animación de escala */}
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                label={content.hero.cta.primary} 
                icon="pi pi-send"
                className="hero-cta-primary"
                onClick={() => scrollToSection('contact')}
                size="large"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                label={content.hero.cta.secondary} 
                icon="pi pi-images"
                className="hero-cta-secondary"
                onClick={() => scrollToSection('portfolio')}
                outlined
                size="large"
              />
            </motion.div>
          </motion.div>
          
          {/* Stats con animación de contador */}
          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {content.hero.stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="stat"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <motion.h3
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1, type: 'spring' }}
                >
                  {stat.value}
                </motion.h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Indicador de scroll animado */}
      <motion.div 
        className="hero-scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={() => scrollToSection('services')}
        whileHover={{ scale: 1.2 }}
      >
        <ChevronDown size={32} />
      </motion.div>
      
      {/* Indicadores de imagen */}
      <div className="hero-image-indicators">
        {projectImages.map((_, index) => (
          <motion.button
            key={index}
            className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => setCurrentImageIndex(index)}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero