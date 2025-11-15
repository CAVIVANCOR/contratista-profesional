import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'
import './Clients.css'

const Clients = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Clientes principales de J-Alvarez
  const clients = [
    { name: 'FG Edificaciones', logo: 'pi pi-building' },
    { name: 'Renzo Costa', logo: 'pi pi-shopping-bag' },
    { name: 'Mall del Sur', logo: 'pi pi-shopping-cart' },
    { name: 'Cosapi Inmobiliaria', logo: 'pi pi-briefcase' },
    { name: 'Inmobiliaria Montegrande', logo: 'pi pi-home' },
    { name: 'Chocolates Helena', logo: 'pi pi-star' },
    { name: 'Sinohydro Corporation', logo: 'pi pi-globe' },
    { name: 'China Power Investment', logo: 'pi pi-bolt' },
    { name: 'Colegios Emblemáticos', logo: 'pi pi-book' },
    { name: 'Tambo+', logo: 'pi pi-shopping-cart' },
    { name: 'Aruma', logo: 'pi pi-heart' },
    { name: 'Retail Cosapi', logo: 'pi pi-shop' },
    { name: 'Rochem Biocare', logo: 'pi pi-shield' },
    { name: 'Mobiliarq SAC', logo: 'pi pi-box' },
    { name: 'Fundación Peruano Japonés', logo: 'pi pi-flag' },
    { name: 'Inmobiliarias Barqueros', logo: 'pi pi-building' },
    { name: 'Consorcio Lima', logo: 'pi pi-sitemap' },
    { name: 'GFC Proyectos Lima', logo: 'pi pi-chart-line' },
    { name: 'Architech Constructores', logo: 'pi pi-pencil' },
    { name: 'Novellas SAC', logo: 'pi pi-star-fill' },
    { name: 'Strata Perú', logo: 'pi pi-th-large' },
    { name: 'Orion Gerencia', logo: 'pi pi-compass' },
    { name: 'Burger Bar & Grill', logo: 'pi pi-prime' },
    { name: 'Gandul SAC', logo: 'pi pi-circle' },
  ]

  return (
    <section id="clients" className="clients section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="clients-header"
        >
          <h2>Confían en Nosotros</h2>
          <p>Trabajamos con las empresas más importantes del sector</p>
        </motion.div>

        <div className="clients-grid">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="client-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <i className={client.logo} style={{ fontSize: '3rem' }}></i>
              <p>{client.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients