import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Services.css';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      id: 1,
      title: 'Carpintería de Madera',
      icon: 'pi pi-box',
      features: [
        'Fabricación de puertas interiores y exteriores',
        'Techos de madera sol y sombra, pérgolas',
        'Plataformas y escaleras de madera',
        'Escritorios, archivadores y closets en melanina',
        'Cocinas de melanina',
        'Deck para piscinas',
        'Pisos estructurados y laminados',
        'Zócalos de madera',
      ],
    },
    {
      id: 2,
      title: 'Drywall y Construcción',
      icon: 'pi pi-th-large',
      features: [
        'Trabajos en drywall',
        'Cielos rasos',
        'Muros y dinteles',
        'Baldosas',
        'Tabiquería',
        'Construcción modular',
      ],
    },
    {
      id: 3,
      title: 'Pintura y Acabados',
      icon: 'pi pi-palette',
      features: [
        'Laqueados y barnizados',
        'Poliuretano y acrílicos',
        'Gloss DD',
        'Pintura Látex',
        'Pintura interiores y exteriores',
        'Acabados decorativos',
      ],
    },
    {
      id: 4,
      title: 'Gerencia de Proyectos',
      icon: 'pi pi-chart-line',
      features: [
        'Ingeniería y construcción',
        'Supervisión de obra',
        'Gerencia de proyectos',
        'Control de calidad',
        'Gestión de presupuestos',
        'Coordinación multidisciplinaria',
      ],
    },
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="services-header"
        >
          <h2>Nuestros Servicios</h2>
          <p>Soluciones integrales en construcción, carpintería y acabados</p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <i className="pi pi-check-circle"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;