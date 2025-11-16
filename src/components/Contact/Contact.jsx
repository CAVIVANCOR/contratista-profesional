import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { Button } from 'primereact/button'
import { Toast } from 'primereact/toast'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

// Esquema de validación con Zod
const contactSchema = z.object({
  name: z.string().min(3, 'El nombre debe tener al menos 3 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(9, 'Teléfono inválido'),
  company: z.string().optional(),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
})

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useRef(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    
    try {
      // Configuración de EmailJS
      const serviceId = 'service_1kxu4nq'
      const templateId = 'template_7qs6dfi'
      const publicKey = 'tPkwxs8CKucM_2-ap'
      
      // Preparar los parámetros del template
      const templateParams = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company || 'No especificada',
        message: data.message,
      }
      
      // Enviar email usando EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )
      
      toast.current.show({
        severity: 'success',
        summary: '¡Mensaje Enviado!',
        detail: 'Nos pondremos en contacto contigo pronto.',
        life: 5000,
      })
      
      reset()
    } catch (error) {
      console.error('Error al enviar email:', error)
      toast.current.show({
        severity: 'error',
        summary: 'Error',
        detail: 'Hubo un problema al enviar el mensaje. Intenta nuevamente.',
        life: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: 'pi pi-phone',
      title: 'Teléfonos',
      content: '947 175 210 / 931 033 043',
      link: 'tel:+51947175210',
    },
    {
      icon: 'pi pi-envelope',
      title: 'Email',
      content: 'carpinteria_jalvarez@hotmail.com',
      link: 'mailto:carpinteria_jalvarez@hotmail.com',
    },
    {
      icon: 'pi pi-map-marker',
      title: 'Ubicación',
      content: 'Av. Sep Ind Mz L1 Lt 6 Parque Industrial de V.ES',
      link: null,
    },
  ]

  return (
    <section id="contact" className="contact section">
      <Toast ref={toast} />
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="contact-header"
        >
          <h2>Contáctanos</h2>
          <p>Solicita tu cotización sin compromiso</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Información de Contacto</h3>
            <p className="contact-description">
              Estamos listos para atender tus proyectos de construcción, carpintería y acabados.
            </p>
            
            <div className="contact-info-items">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className={item.icon}></i>
                  </div>
                  <div className="contact-info-text">
                    <h4>{item.title}</h4>
                    {item.link ? (
                      <a href={item.link}>{item.content}</a>
                    ) : (
                      <p>{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-person">
              <h4>José Ángel Álvarez Zasiga</h4>
              <p>Contratista General</p>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="form-group">
              <label htmlFor="name">Nombre Completo *</label>
              <InputText
                id="name"
                {...register('name')}
                className={errors.name ? 'p-invalid' : ''}
                placeholder="Tu nombre completo"
              />
              {errors.name && (
                <small className="p-error">{errors.name.message}</small>
              )}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <InputText
                  id="email"
                  type="email"
                  {...register('email')}
                  className={errors.email ? 'p-invalid' : ''}
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <small className="p-error">{errors.email.message}</small>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Teléfono *</label>
                <InputText
                  id="phone"
                  {...register('phone')}
                  className={errors.phone ? 'p-invalid' : ''}
                  placeholder="999 999 999"
                />
                {errors.phone && (
                  <small className="p-error">{errors.phone.message}</small>
                )}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="company">Empresa (Opcional)</label>
              <InputText
                id="company"
                {...register('company')}
                placeholder="Nombre de tu empresa"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje *</label>
              <InputTextarea
                id="message"
                {...register('message')}
                className={errors.message ? 'p-invalid' : ''}
                rows={5}
                placeholder="Cuéntanos sobre tu proyecto..."
              />
              {errors.message && (
                <small className="p-error">{errors.message.message}</small>
              )}
            </div>

            <Button
              type="submit"
              label={isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              icon="pi pi-send"
              loading={isSubmitting}
              className="submit-button"
            />
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact