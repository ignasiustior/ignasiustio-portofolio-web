export type Project = {
  slug: string
  title: string
  category: string
  year: string
  description: string
  role: string
  stack: string[]
  overview: string
  visual: 'autoglaze' | 'loookers' | 'acne-detection'
  highlights: string[]
}

export const projects: Project[] = [
  {
    slug: 'autoglaze-pos',
    title: 'AutoGlaze POS',
    category: 'Mobile Engineering',
    year: '2026',
    description:
      'A point-of-sale mobile experience built around connected services, practical user workflows, and reliable data handling.',
    role: 'Android development',
    stack: [
      'Kotlin',
      'Kotlin Multiplatform',
      'REST API',
      'MVVM',
      'Clean Architecture',
    ],
    visual: 'autoglaze',
    overview:
      'An ongoing professional mobile development experience involving a customer-facing point-of-sale application. The work spans UI implementation, API integration, local data handling, and application flow implementation.',
    highlights: [
      'Mobile UI implementation based on product designs',
      'REST API integration for application data and services',
      'Local and offline data management',
      'Application logic and user-flow implementation',
    ],
  },
  {
    slug: 'loookers',
    title: 'Loookers',
    category: 'Fullstack & AI',
    year: '2026',
    description:
      'A recruitment platform concept connecting job seekers and HR teams through structured application workflows and AI-assisted candidate evaluation.',
    role: 'Fullstack development & AI research',
    stack: [
      'Kotlin',
      'Laravel 13',
      'MySQL',
      'Python',
      'FastAPI',
      'IndoBERT',
      'GitHub API',
    ],
    visual: 'loookers',
    overview:
      'A multiplatform recruitment project developed around candidate applications, HR workflows, semantic CV analysis, and GitHub portfolio evaluation. Its hybrid-filtering research combines CV relevance with evidence from a candidate’s software portfolio.',
    highlights: [
      'Candidate and HR workflows across Android and web',
      'Semantic CV matching research using IndoBERT and cosine similarity',
      'GitHub portfolio evaluation as an additional source of candidate evidence',
      'Hybrid candidate scoring intended to support HR review',
    ],
  },
  {
    slug: 'ai-acne-detection',
    title: 'AI Acne Detection',
    category: 'AI & Mobile',
    year: '2024',
    description:
      'An AI-oriented mobile capstone project exploring acne image analysis through a mobile user experience.',
    role: 'Mobile development',
    stack: ['Android', 'Kotlin', 'AI'],
    visual: 'acne-detection',
    overview:
      'A mobile capstone project focused on an acne-detection use case. The case study highlights the mobile application perspective while leaving model details and technical claims to be documented from the verified project implementation.',
    highlights: [
      'Mobile application development for an AI-oriented use case',
      'User flow design around acne image analysis',
      'Capstone project completed through Bangkit Academy 2024',
    ],
  },
]
