import type { Project } from '../types'

// Sustituye estos datos por tus proyectos reales.
// Las imágenes pueden ser rutas locales en /src/assets o URLs externas.
export const projects: Project[] = [
  {
    id: 'modular-vit',
    title: 'Modular-ViT',
    year: 2026,
    images: [
      '/images/modular-vit.webp',
      '/images/modular-vit-2.webp',
    ],
    technologies: ['Python', 'PyTorch', 'Vision Transformers', 'NumPy', 'Pandas', 'TKinter'],
    whatItIs:
      'Framework modular para construir y experimentar con Vision Transformers, que permite intercambiar componentes de las diferentes fases de la tokenización para comparar rendimiento.',
    challenges: [
      'Creación de interfaces comunes a cada fase de la tokenización para la creación de la arquitectura modular.',
      'Sistema de ficheros y visualización de métricas con experimentos reproducibles.',
    ],
      metrics: [
      'Mejora de aproximadamente 10 puntos porcentuales respecto al modelo base evaluado.',
      'Explorar un nuevo mecanismo conlleva la creación de una clase y un fichero de configuración nuevos.'
    ],
    repo: 'https://github.com/JuaanGB/Modular-ViT',
    featured: false,
  },
  {
    id: 'ia-para-videjuegos',
    title: 'Videojuego de Guerra con Bandos',
    year: 2026,
    images: [
      '/images/iadj-1.webp',
      '/images/iadj-2.webp',
    ],
    technologies: ['Unity', 'C#', 'Modelado 3D', 'Steerings', 'Árboles de comportamiento', 'Trabajo en equipo'],
    whatItIs:
      'Videojuego de estrategia en el que dos bandos, controlados íntegramente por IA, se enfrentan por la conquista de la base enemiga.',
    challenges: [
      'Diseño del sistema de steering behaviors (movimiento del personaje).',
      'Organización de módulos responsables del comportamiento de las unidades.'
    ],
    metrics: [
      'Más de 10 NPCs ejecutando simultáneamente el algoritmo A* sobre un grafo de 3000 nodos.',
      'Matrícula de Honor en la asignatura de IA para el Desarrollo de Videojuegos.',
    ],
  },
  {
    id: 'vision-artificial',
    title: 'Visión Artificial',
    year: 2026,
    images: [
      '/images/vision-artificial-1.webp',
      '/images/vision-artificial-2.webp',
      '/images/vision-artificial-3.webp',
    ],
    technologies: ['Python', 'Scikit-learn', 'CNN', 'YOLO', 'Telegram Bot', 'Filtros morfológicos', 'MediaPipe'],
    whatItIs:
      'Conjunto de prácticas de visión artificial que incluyen detección de actividad, anonimización de personas y reconocimiento de patrones.',
    challenges: [
      'Evitar que la actualización de las estadísticas de tráfico bloqueara la aplicación principal, resuelto mediante un hilo dedicado a la actualización de la gráfica.',
      'Conseguir una anonimización robusta de personas incluso cuando el rostro no se presenta de forma frontal.',
    ],
    metrics: [
      'Correcto funcionamiento y reconocimiento de los programas realizados.',
    ],
  },
  {
    id: 'aprendizaje-computacional',
    title: 'Predicción de Aprobación de Crédito',
    year: 2025,
    images: ['/images/aprendizaje-computacional.webp'],
    technologies: ['RStudio', 'Análisis multivariable', 'Machine Learning', 'Random Forest', 'Gradient Boosting', 'Redes Neuronales'],
    whatItIs:
      'Análisis de datos y modelado predictivo en R aplicado a la aprobación de créditos, con comparación y optimización de varios modelos de clasificación.',
    challenges: [
      'Comprender la semántica de las variables al trabajar sobre un dataset anonimizado.',
    ],
    metrics: [
      'Modelo final con una tasa de acierto del 90.38% empleando Random Forest.',
    ],
  },
  {
    id: 'futbolistos',
    title: 'Futbolistos',
    year: 2025,
    images: ['/images/futbolistos.webp'],
    technologies: ['Java', 'Swing', 'Hibernate', 'Maven', 'Eclipse IDE'],
    repo: 'https://github.com/JuaanGB/Futbolistos',
    whatItIs:
      'Aplicación de aprendizaje sobre fútbol que permite compartir cursos mediante ficheros serializables.',
    challenges: [
      'Diseño de una arquitectura modular que permitiera incorporar nuevos tipos de preguntas, formatos de serialización y estrategias de aprendizaje.',
      'Actualización innecesaria de las imágenes en la base de datos. Solucionado con la creación de un wrapper.'
    ],
    metrics: [
      'Matrícula de Honor en la asignatura Proyectos de Desarrollo de Software.',
    ],
  },
  {
    id: 'appchat',
    title: 'AppChat',
    year: 2024,
    images: ['/images/appchat.webp'],
    technologies: ['Java', 'Swing', 'Base de Datos h2', 'Window Builder', 'Eclipse IDE', 'Patrones de diseño', 'Trabajo en equipo'],
    whatItIs:
      'Clon de WhatsApp desarrollado con Java Swing.',
    challenges: [
      'Aplicación correcta de múltiples patrones de diseño.',
    ],
    metrics: [
      'Matrícula de Honor en la asignatura Tecnologías de Desarrollo de Software.',
    ],
  },
  {
    id: 'smartway',
    title: 'SmartWay Proyectos',
    year: 2025,
    images: ['/images/smartway-1.webp'],
    technologies: ['Vue.js', 'HTML', 'CSS', 'JavaScript', 'Pinia', 'Docker', 'Tailwind CSS', 'ASP.NET', 'Entity Framework', 'JWT Auth'],
    repo: 'https://github.com/JuaanGB/SmartWay-Final',
    whatItIs:
      'Conjunto de proyectos de dificultad progresiva desarrollados durante mis prácticas curriculares en SmartWay Studio, partiendo de HTML, CSS y JavaScript básicos hasta la adopción de un framework moderno como Vue.',
    challenges: [
      'Sin incidencias reseñables.',
    ],
    metrics: [
      'Adopción efectiva del stack tecnológico, incluyendo la dockerización del entorno y la implementación de autenticación mediante JWT como prácticas adicionales.',
    ],
  },
  {
    id: 'horarigo',
    title: 'HorariGo',
    year: 2025,
    images: ['/images/horarigo.webp'],
    technologies: ['Vue.js', 'HTML', 'CSS', 'JavaScript', 'Pinia', 'Tailwind CSS'],
    repo: 'https://github.com/JuaanGB/HorariGo',
    whatItIs:
      'Aplicación exclusivamente frontend para facilitar la elección de subgrupos durante el último curso del Grado en Ingeniería Informática.',
    challenges: [
      'Sin incidencias reseñables.',
    ],
    metrics: [
      'Empleada para la planificación de mi último curso de carrera, cursado con 72 créditos, y acabando la carrera en 4 años.',
    ],
  },
  {
    id: 'ecopath',
    title: 'EcoPath',
    year: 2026,
    images: [
      '/images/ecopath-1.webp',
      '/images/ecopath-2.webp',
      '/images/ecopath-3.webp',
      '/images/ecopath-4.webp',
      '/images/ecopath-5.webp',
    ],
    technologies: ['Figma', 'Trabajo en equipo', 'Normativa medioambiental', 'SaaS', 'Investigación de mercado'],
    repo: 'https://www.figma.com/make/qoJabd0eNgSUdHOI3gXQKi/Carbon-Footprint-Reduction-Website?p=f&t=839sgQsk1gD1iXgu-0&preview-route=%2Finformes',
    whatItIs:
      'Prototipo front-end de una aplicación SaaS de reducción de la huella de carbono empresarial, tutorizado por Capgemini.',
    challenges: [
      'Investigación de las mediciones medioambientales para crear los formularios y cálculos de la huella de carbono.',
      'Toma de decisión de diferentes aspectos de la arquitectura de la aplicación.'
    ],
    metrics: [
      'Proyecto correcto según los mentores de Capgemini.',
    ],
  },
]