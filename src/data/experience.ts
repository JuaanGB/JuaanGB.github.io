import type { ExperienceEntry } from '../types'

export const experience: ExperienceEntry[] = [
  {
    id: 'futuro',
    company: {
      es: '¿Y si tu empresa es mi próxima experiencia laboral?',
      en: 'What if your company is my next job experience?',
    },
    role: { es: 'Contacta conmigo.', en: 'Get in touch.' },
    startDate: { es: '¿?', en: '?' },
    endDate: { es: '¿?', en: '?' },
    description: [],
  },
  {
    id: 'Capgemini-DPII',
    company: { es: 'Capgemini', en: 'Capgemini' },
    role: {
      es: 'Líder de Proyecto Software Simulado a través de Universidad de Murcia',
      en: 'Simulated Software Project Lead, through the University of Murcia',
    },
    startDate: { es: 'Feb 2026', en: 'Feb 2026' },
    endDate: { es: 'Jun 2026', en: 'Jun 2026' },
    description: [
      {
        es: 'Simulación de un proyecto profesional para el diseño de EcoPath, una plataforma SaaS para la medición y reducción de la huella de carbono empresarial, siguiendo las directrices de Capgemini como cliente y orientador.',
        en: 'Simulation of a professional project to design EcoPath, a SaaS platform for measuring and reducing corporate carbon footprint, following Capgemini\'s guidelines as client and mentor.',
      },
      {
        es: 'Realización de análisis de mercado, stakeholders, competencia, modelo de negocio y viabilidad económica.',
        en: 'Carried out market analysis, stakeholder mapping, competitor analysis, business model design and economic feasibility assessment.',
      },
      {
        es: 'Definición de requisitos, historias de usuario, Product Backlog y arquitectura software, empleando metodología Scrum y matrices de decisión para la selección tecnológica.',
        en: 'Defined requirements, user stories, Product Backlog and software architecture, using the Scrum methodology and decision matrices for technology selection.',
      },
      {
        es: 'Diseño de prototipos interactivos web y móvil mediante Figma, junto con la definición de la estrategia de CI/CD y despliegue Cloud, estándares de calidad, gestión de riesgos, SLAs y plan de mantenimiento.',
        en: 'Designed interactive web and mobile prototypes in Figma, alongside defining the CI/CD and Cloud deployment strategy, quality standards, risk management, SLAs and maintenance plan.',
      },
    ],
  },
  {
    id: 'SmartWay Studio',
    company: { es: 'SmartWay Studio', en: 'SmartWay Studio' },
    role: {
      es: 'Prácticas curriculares - Desarrollo Full Stack',
      en: 'Curricular Internship - Full Stack Development',
    },
    startDate: { es: 'Jun 2025', en: 'Jun 2025' },
    endDate: { es: 'Jul 2025', en: 'Jul 2025' },
    description: [
      {
        es: 'Desarrollo de aplicaciones web full-stack utilizando Vue.js, JavaScript, Tailwind CSS, DaisyUI, ASP.NET y Entity Framework.',
        en: 'Developed full-stack web applications using Vue.js, JavaScript, Tailwind CSS, DaisyUI, ASP.NET and Entity Framework.',
      },
      {
        es: 'Diseño de interfaces responsive, componentes reutilizables y sistemas de temas claros y oscuros.',
        en: 'Designed responsive interfaces, reusable components and light/dark theme systems.',
      },
      {
        es: 'Implementación de APIs REST, operaciones CRUD, autenticación mediante JWT y control de acceso basado en roles (USER/ADMIN).',
        en: 'Implemented REST APIs, CRUD operations, JWT-based authentication and role-based access control (USER/ADMIN).',
      },
      {
        es: 'Pruebas de APIs mediante Postman y dockerización de frontend y backend para mejorar la portabilidad y el aislamiento de la aplicación.',
        en: 'Tested APIs with Postman and dockerized both frontend and backend to improve the application\'s portability and isolation.',
      },
    ],
  },
]