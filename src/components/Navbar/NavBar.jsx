import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { Menubar } from 'primereact/menubar'
import { Button } from 'primereact/button'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const menuItems = [
    { label: 'Inicio', command: () => scrollToSection('hero') },
    { label: 'Servicios', command: () => scrollToSection('services') },
    { label: 'Clientes', command: () => scrollToSection('clients') },
    { label: 'Proyectos', command: () => scrollToSection('portfolio') },
    { label: 'Contacto', command: () => scrollToSection('contact') },
  ]

  const start = (
    <motion.div 
      className="navbar-logo" 
      onClick={() => scrollToSection('hero')}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.img 
        src="/images/logos/LogoJAlvarezOK.png" 
        alt="J-Alvarez Logo" 
        className="logo-image"
        animate={{
          filter: [
            'drop-shadow(0 0 8px rgba(90, 175, 235, 0.3))',
            'drop-shadow(0 0 12px rgba(90, 175, 235, 0.5))',
            'drop-shadow(0 0 8px rgba(90, 175, 235, 0.3))',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  )

  const end = (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button 
        label="Cotizar Ahora" 
        icon="pi pi-send"
        className="navbar-cta"
        onClick={() => scrollToSection('contact')}
      />
    </motion.div>
  )

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar-container">
        <Menubar 
          model={menuItems} 
          start={start} 
          end={end}
          className="navbar-menu"
        />
      </div>
    </motion.nav>
  )
}

export default Navbar