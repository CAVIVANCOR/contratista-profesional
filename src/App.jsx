import { useEffect } from 'react'
import Lenis from 'lenis'
import './App.css'

// Components (crearemos estos después)
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Clients from './components/Clients/Clients'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Team from './components/Team/Team'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'

function App() {
  // Inicializar Lenis para smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Clients />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
