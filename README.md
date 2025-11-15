# J-Alvarez Contratistas Generales SAC

> Sitio web corporativo profesional para empresa contratista

## 🛠️ Stack Tecnológico

- **Framework:** React 19 + Vite 6
- **UI Library:** PrimeReact 10
- **Animaciones:** Motion (Framer Motion)
- **Smooth Scroll:** Lenis
- **Formularios:** React Hook Form + Zod
- **Email:** EmailJS
- **State Management:** Zustand
- **Iconos:** Lucide React + PrimeIcons
- **WhatsApp:** react-floating-whatsapp
- **Tipografía:** Montserrat + Open Sans

## 🚀 Inicio Rápido

### 1. Instalar Dependencias

```bash
npm install
```

### 2. Configurar Variables de Entorno

Copia `.env.example` a `.env` y configura tus credenciales:

```bash
cp .env.example .env
```

**Configurar EmailJS:**
1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Crea un servicio de email
3. Crea una plantilla de email
4. Copia tus credenciales al archivo `.env`

### 3. Ejecutar en Desarrollo

```bash
npm run dev
```

### 4. Build para Producción

```bash
npm run build
```

### 5. Preview de Producción

```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
contratista-profesional/
├── public/
│   ├── images/
│   │   ├── logos/          # Logo de la empresa
│   │   ├── projects/       # Imágenes de proyectos
│   │   ├── team/           # Fotos del equipo
│   │   └── testimonials/   # Fotos de clientes
├── src/
│   ├── components/      # Componentes React
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── Clients/
│   │   ├── Services/
│   │   ├── Portfolio/
│   │   ├── Team/
│   │   ├── Testimonials/
│   │   ├── Contact/
│   │   ├── Footer/
│   │   └── WhatsAppButton/
│   ├── data/            # Datos estáticos (JSON)
│   ├── services/        # Servicios (EmailJS, etc.)
│   ├── store/           # Zustand store
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.example
├── .gitignore
├── package.json
└── vite.config.js
```

## 🎨 Paleta de Colores

Basada en el logo de J-Alvarez:

- **Primario:** `#5AAFEB` (Azul celeste)
- **Secundario:** `#7CAF88` (Verde medio)
- **Acento:** `#B8E6C9` (Verde claro/menta)
- **Fondo Principal:** `#0F1F3A` (Azul muy oscuro)
- **Fondo Secundario:** `#1A2B47` (Azul marino)
- **Cards:** `#243A5E` (Azul medio)

## 📝 Editar Contenido

Todo el contenido está centralizado en `src/data/data.js`:

- Información de la empresa
- Servicios
- Proyectos
- Equipo
- Testimonios
- Clientes

## 📧 Configuración de EmailJS

**Plantilla de Email recomendada:**

```
Asunto: Nuevo mensaje de {{from_name}}

Nombre: {{from_name}}
Email: {{from_email}}
Teléfono: {{phone}}
Empresa: {{company}}

Mensaje:
{{message}}
```

## 🚀 Deploy en Render.com

### Opción 1: Deploy Manual

1. Build del proyecto:
   ```bash
   npm run build
   ```

2. Sube la carpeta `dist/` a Render

### Opción 2: Deploy Automático (Git)

1. Conecta tu repositorio de GitHub
2. Configuración:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
3. Agrega las variables de entorno en Render

## 📊 Performance

- ✅ Responsive 100%
- ✅ Lazy loading de imágenes
- ✅ Code splitting
- ✅ Smooth scrolling
- ✅ Animaciones optimizadas
- ✅ Tipografía fluida

## 🔒 Seguridad

- ✅ Variables de entorno protegidas
- ✅ `.env` en `.gitignore`
- ✅ Validación de formularios con Zod
- ✅ Sanitización de inputs

## 📞 Soporte

Para soporte o consultas:
- Email: contacto@j-alvarez.com
- Teléfono: +51 999 999 999

---

**Desarrollado con ❤️ usando tecnologías modernas y mejores prácticas**
