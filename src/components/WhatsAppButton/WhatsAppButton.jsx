import { FloatingWhatsApp } from 'react-floating-whatsapp'
import './WhatsAppButton.css'

const WhatsAppButton = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="+51999999999"
      accountName="J-Alvarez Contratistas"
      statusMessage="En línea"
      chatMessage="¡Hola! Bienvenido a J-Alvarez Contratistas Generales. ¿En qué podemos ayudarte?"
      placeholder="Escribe tu mensaje..."
      allowClickAway
      notification
      notificationDelay={60000}
      avatar="/images/logos/LogoJAlvarezOK.png"
    />
  )
}

export default WhatsAppButton