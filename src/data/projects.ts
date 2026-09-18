import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'modular-vit',
    title: { es: 'Modular-ViT', en: 'Modular-ViT' },
    year: 2026,
    images: ['/images/modular-vit.webp', '/images/modular-vit-2.webp'],
    technologies: ['Python', 'PyTorch', 'Vision Transformers', 'NumPy', 'Pandas', 'TKinter'],
    whatItIs: {
      es: 'Framework modular para construir y experimentar con Vision Transformers, que permite intercambiar componentes de las diferentes fases de la tokenización para comparar rendimiento.',
      en: 'Modular framework for building and experimenting with Vision Transformers, allowing components from different tokenization stages to be swapped to compare performance.',
    },
    challenges: [
      { es: 'Creación de interfaces comunes a cada fase de la tokenización para la creación de la arquitectura modular.', en: 'Designing common interfaces for each tokenization stage to support the modular architecture.' },
      { es: 'Sistema de ficheros y visualización de métricas con experimentos reproducibles.', en: 'Building a file system and metrics visualization setup for reproducible experiments.' },
    ],
    metrics: [
      { es: 'Mejora de aproximadamente 10 puntos porcentuales respecto al modelo base evaluado.', en: 'Roughly a 10 percentage-point improvement over the evaluated baseline model.' },
      { es: 'Explorar un nuevo mecanismo conlleva la creación de una clase y un fichero de configuración nuevos.', en: 'Exploring a new mechanism only requires creating a new class and a new configuration file.' },
    ],
    repo: 'https://github.com/JuaanGB/Modular-ViT',
    featured: false,
  },
  {
    id: 'ia-para-videjuegos',
    title: { es: 'Videojuego de Guerra con Bandos', en: 'Faction War Game' },
    year: 2026,
    images: ['/images/iadj-1.webp', '/images/iadj-2.webp'],
    technologies: ['Unity', 'C#', 'Modelado 3D', 'Steerings', 'Árboles de comportamiento', 'Trabajo en equipo'],
    whatItIs: {
      es: 'Videojuego de estrategia en el que dos bandos, controlados íntegramente por IA, se enfrentan por la conquista de la base enemiga.',
      en: 'Strategy game where two factions, entirely controlled by AI, fight for control of the enemy base.',
    },
    challenges: [
      { es: 'Diseño del sistema de steering behaviors (movimiento del personaje).', en: 'Designing the steering behaviors system (character movement).' },
      { es: 'Organización de módulos responsables del comportamiento de las unidades.', en: 'Organizing the modules responsible for unit behavior.' },
    ],
    metrics: [
      { es: 'Más de 10 NPCs ejecutando simultáneamente el algoritmo A* sobre un grafo de 3000 nodos.', en: 'More than 10 NPCs running the A* algorithm simultaneously over a 3,000-node graph.' },
      { es: 'Matrícula de Honor en la asignatura de IA para el Desarrollo de Videojuegos.', en: 'Highest honors (Matrícula de Honor) in the AI for Game Development course.' },
    ],
  },
  {
    id: 'vision-artificial',
    title: { es: 'Visión Artificial', en: 'Computer Vision' },
    year: 2026,
    images: ['/images/vision-artificial-1.webp', '/images/vision-artificial-2.webp', '/images/vision-artificial-3.webp'],
    technologies: ['Python', 'Scikit-learn', 'CNN', 'YOLO', 'Telegram Bot', 'Filtros morfológicos', 'MediaPipe'],
    whatItIs: {
      es: 'Conjunto de prácticas de visión artificial que incluyen detección de actividad, anonimización de personas y reconocimiento de patrones.',
      en: 'Collection of computer vision exercises covering activity detection, person anonymization and pattern recognition.',
    },
    challenges: [
      { es: 'Evitar que la actualización de las estadísticas de tráfico bloqueara la aplicación principal, resuelto mediante un hilo dedicado a la actualización de la gráfica.', en: "Preventing traffic statistics updates from blocking the main application, solved with a dedicated thread for updating the chart." },
      { es: 'Conseguir una anonimización robusta de personas incluso cuando el rostro no se presenta de forma frontal.', en: "Achieving robust person anonymization even when the face isn't shown frontally." },
    ],
    metrics: [
      { es: 'Correcto funcionamiento y reconocimiento de los programas realizados.', en: 'Correct operation and recognition across all the programs built.' },
    ],
  },
  {
    id: 'aprendizaje-computacional',
    title: { es: 'Predicción de Aprobación de Crédito', en: 'Credit Approval Prediction' },
    year: 2025,
    images: ['/images/aprendizaje-computacional.webp'],
    technologies: ['RStudio', 'Análisis multivariable', 'Machine Learning', 'Random Forest', 'Gradient Boosting', 'Redes Neuronales'],
    whatItIs: {
      es: 'Análisis de datos y modelado predictivo en R aplicado a la aprobación de créditos, con comparación y optimización de varios modelos de clasificación.',
      en: 'Data analysis and predictive modeling in R applied to credit approval, comparing and optimizing several classification models.',
    },
    challenges: [
      { es: 'Comprender la semántica de las variables al trabajar sobre un dataset anonimizado.', en: 'Understanding the meaning of the variables while working with an anonymized dataset.' },
    ],
    metrics: [
      { es: 'Modelo final con una tasa de acierto del 90.38% empleando Random Forest.', en: 'Final model achieving a 90.38% accuracy rate using Random Forest.' },
    ],
  },
  {
    id: 'futbolistos',
    title: { es: 'Futbolistos', en: 'Futbolistos' },
    year: 2025,
    images: ['/images/futbolistos.webp'],
    technologies: ['Java', 'Swing', 'Hibernate', 'Maven', 'Eclipse IDE'],
    repo: 'https://github.com/JuaanGB/Futbolistos',
    whatItIs: {
      es: 'Aplicación de aprendizaje sobre fútbol que permite compartir cursos mediante ficheros serializables.',
      en: 'Football learning app that lets users share courses through serializable files.',
    },
    challenges: [
      { es: 'Diseño de una arquitectura modular que permitiera incorporar nuevos tipos de preguntas, formatos de serialización y estrategias de aprendizaje.', en: 'Designing a modular architecture that could accommodate new question types, serialization formats and learning strategies.' },
      { es: 'Actualización innecesaria de las imágenes en la base de datos. Solucionado con la creación de un wrapper.', en: 'Unnecessary re-updating of images in the database, solved by building a wrapper.' },
    ],
    metrics: [
      { es: 'Matrícula de Honor en la asignatura Proyectos de Desarrollo de Software.', en: 'Highest honors (Matrícula de Honor) in the Software Development Projects course.' },
    ],
  },
  {
    id: 'appchat',
    title: { es: 'AppChat', en: 'AppChat' },
    year: 2024,
    images: ['/images/appchat.webp'],
    technologies: ['Java', 'Swing', 'Base de Datos h2', 'Window Builder', 'Eclipse IDE', 'Patrones de diseño', 'Trabajo en equipo'],
    whatItIs: {
      es: 'Clon de WhatsApp desarrollado con Java Swing.',
      en: 'WhatsApp clone built with Java Swing.',
    },
    challenges: [
      { es: 'Aplicación correcta de múltiples patrones de diseño.', en: 'Correctly applying multiple design patterns.' },
    ],
    metrics: [
      { es: 'Matrícula de Honor en la asignatura Tecnologías de Desarrollo de Software.', en: 'Highest honors (Matrícula de Honor) in the Software Development Technologies course.' },
    ],
  },
  {
    id: 'smartway',
    title: { es: 'SmartWay Proyectos', en: 'SmartWay Projects' },
    year: 2025,
    images: ['/images/smartway-1.webp'],
    technologies: ['Vue.js', 'HTML', 'CSS', 'JavaScript', 'Pinia', 'Docker', 'Tailwind CSS', 'ASP.NET', 'Entity Framework', 'JWT Auth'],
    repo: 'https://github.com/JuaanGB/SmartWay-Final',
    whatItIs: {
      es: 'Conjunto de proyectos de dificultad progresiva desarrollados durante mis prácticas curriculares en SmartWay Studio, partiendo de HTML, CSS y JavaScript básicos hasta la adopción de un framework moderno como Vue.',
      en: 'Set of progressively harder projects built during my internship at SmartWay Studio, starting from basic HTML, CSS and JavaScript up to adopting a modern framework like Vue.',
    },
    challenges: [
      { es: 'Sin incidencias reseñables.', en: 'No notable issues.' },
    ],
    metrics: [
      { es: 'Adopción efectiva del stack tecnológico, incluyendo la dockerización del entorno y la implementación de autenticación mediante JWT como prácticas adicionales.', en: 'Successful adoption of the tech stack, including dockerizing the environment and implementing JWT authentication as additional practice.' },
    ],
  },
  {
    id: 'horarigo',
    title: { es: 'HorariGo', en: 'HorariGo' },
    year: 2025,
    images: ['/images/horarigo.webp'],
    technologies: ['Vue.js', 'HTML', 'CSS', 'JavaScript', 'Pinia', 'Tailwind CSS'],
    repo: 'https://github.com/JuaanGB/HorariGo',
    whatItIs: {
      es: 'Aplicación exclusivamente frontend para facilitar la elección de subgrupos durante el último curso del Grado en Ingeniería Informática.',
      en: 'Frontend-only app to make it easier to choose subgroups during the final year of the Computer Engineering degree.',
    },
    challenges: [
      { es: 'Sin incidencias reseñables.', en: 'No notable issues.' },
    ],
    metrics: [
      { es: 'Empleada para la planificación de mi último curso de carrera, cursado con 72 créditos, y acabando la carrera en 4 años.', en: 'Used to plan my final year of the degree, in which I took 72 credits and finished the degree in 4 years.' },
    ],
  },
  {
    id: 'ecopath',
    title: { es: 'EcoPath', en: 'EcoPath' },
    year: 2026,
    images: ['/images/ecopath-1.webp', '/images/ecopath-2.webp', '/images/ecopath-3.webp', '/images/ecopath-4.webp', '/images/ecopath-5.webp'],
    technologies: ['Figma', 'Trabajo en equipo', 'Normativa medioambiental', 'SaaS', 'Investigación de mercado'],
    repo: 'https://www.figma.com/make/qoJabd0eNgSUdHOI3gXQKi/Carbon-Footprint-Reduction-Website?p=f&t=839sgQsk1gD1iXgu-0&preview-route=%2Finformes',
    whatItIs: {
      es: 'Prototipo front-end de una aplicación SaaS de reducción de la huella de carbono empresarial, tutorizado por Capgemini.',
      en: 'Front-end prototype of a SaaS application for reducing corporate carbon footprint, mentored by Capgemini.',
    },
    challenges: [
      { es: 'Investigación de las mediciones medioambientales para crear los formularios y cálculos de la huella de carbono.', en: "Researching environmental measurement standards to design the forms and carbon footprint calculations." },
      { es: 'Toma de decisión de diferentes aspectos de la arquitectura de la aplicación.', en: "Making decisions on various aspects of the application's architecture." },
    ],
    metrics: [
      { es: 'Proyecto correcto según los mentores de Capgemini.', en: 'Project validated as correct by the Capgemini mentors.' },
    ],
  },
]