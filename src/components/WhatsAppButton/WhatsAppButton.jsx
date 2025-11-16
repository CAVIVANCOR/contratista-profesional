import { useState } from 'react'
import './WhatsAppButton.css'

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false)
  
  const phoneNumber = '51947175210' // Sin el +
  const message = encodeURIComponent('¡Hola! Me gustaría obtener más información sobre sus servicios.')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  const handleClick = () => {
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div 
      className="whatsapp-float-button"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title="Chatea con nosotros por WhatsApp"
    >
      <svg 
        viewBox="0 0 32 32" 
        className="whatsapp-icon"
        fill="currentColor"
      >
        <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-4.713 1.262 1.262-4.669-0.292-0.508c-1.207-2.100-1.847-4.507-1.847-6.924 0-7.435 6.050-13.485 13.485-13.485s13.485 6.050 13.485 13.485c0 7.435-6.050 13.485-13.485 13.485zM21.960 18.735c-0.353-0.177-2.085-1.030-2.408-1.147-0.323-0.118-0.558-0.177-0.793 0.177s-0.912 1.147-1.117 1.383c-0.205 0.235-0.41 0.265-0.763 0.088s-1.487-0.548-2.833-1.748c-1.048-0.935-1.755-2.090-1.96-2.443s-0.022-0.543 0.155-0.718c0.159-0.159 0.353-0.41 0.53-0.617s0.235-0.353 0.353-0.587c0.118-0.235 0.059-0.44-0.029-0.617s-0.793-1.913-1.088-2.618c-0.287-0.687-0.578-0.593-0.793-0.605-0.205-0.010-0.44-0.012-0.675-0.012s-0.617 0.088-0.94 0.44c-0.323 0.353-1.235 1.207-1.235 2.943s1.265 3.413 1.44 3.648c0.177 0.235 2.465 3.825 6.015 5.305 0.84 0.353 1.495 0.563 2.007 0.72 0.847 0.267 1.618 0.229 2.227 0.139 0.679-0.102 2.085-0.852 2.38-1.675s0.295-1.528 0.207-1.675c-0.088-0.147-0.323-0.235-0.675-0.412z"></path>
      </svg>
      {isHovered && (
        <span className="whatsapp-tooltip">
          Chatea con nosotros
        </span>
      )}
    </div>
  )
}

export default WhatsAppButton