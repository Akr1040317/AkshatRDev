export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  narrative: string;
  impact: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    id: 'honeywell',
    company: 'Honeywell Aerospace',
    role: 'Software Engineer I',
    period: 'Jun 2025 – Present',
    location: 'Phoenix, AZ',
    narrative:
      'Developing C software for Flight Management System in a safety-critical avionics environment, contributing to next-generation cockpits. Performing system, HLR, LLR, and SLR requirement updates and formalizations with full traceability aligned to DO-178C standards. Extended the Netrikann remote-testing tool by adding touch-interaction and event-simulation features, enabling remote hardware-bench validation for global teams and reducing manual integration test effort.',
    impact: [
      'Develop C software for Flight Management System in safety-critical avionics environment',
      'Perform requirement updates and formalizations with full traceability aligned to DO-178C standards',
      'Extended Netrikann remote-testing tool with touch-interaction and event-simulation features',
      'Enabled remote hardware-bench validation for global teams, reducing manual integration test effort',
    ],
    tech: ['C', 'DO-178C', 'Avionics', 'Safety-Critical Systems', 'Flight Management Systems'],
  },
  {
    id: 'hive',
    company: 'Hive - Spell Intelligently',
    role: 'Co-Founder, CEO, Technical Lead (iOS & Web)',
    period: 'Jun 2023 – Present',
    location: 'Lake Mary, FL → Remote',
    narrative:
      'Co-founded Hive to reshape spelling education through intelligent, pattern-based learning. Built Hive\'s iOS app and web platform used by 600+ students and piloted with multiple school districts, delivering 60+ pattern-based lessons and quizzes on roots, patterns, and language origins. Established partnership with Merriam-Webster, integrating API with GPT-4 for sentence generation, explanations, and feedback. Engineered PrepCenter™, the official studying platform for Spelling Bee Championship UAE. Developed Next.js/Tailwind educator dashboard with optimized backend and custom list-creation tools, prototyping an SLM-based tutor for adaptive coaching.',
    impact: [
      'Built iOS app and web platform used by 600+ students, piloted with multiple school districts',
      'Delivered 60+ pattern-based lessons and quizzes on roots, patterns, and language origins',
      'Established partnership with Merriam-Webster, integrating API with GPT-4',
      'Engineered PrepCenter™ as official platform for Spelling Bee Championship UAE',
      'Developed educator dashboard with optimized backend and custom list-creation tools',
    ],
    tech: [
      'Swift',
      'iOS',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Firebase',
      'Google Cloud Functions',
      'GPT-4 API',
      'Merriam-Webster API',
      'Product Strategy',
      'Team Leadership',
    ],
  },
  {
    id: 'siemens',
    company: 'Siemens Digital Industries Software',
    role: 'Intern → Part-time Software Engineer',
    period: 'May 2024 – Dec 2024',
    location: 'Milford, OH → Remote',
    narrative:
      'Developed a customer-facing feature in NX-CAD using C++ and HTML rendering to modernize the 2D Cross-Section View, enabling real-time cable layout visualization with color-coded data for industrial engineering projects. Led sprint planning & task prioritization in a scrum-based Agile environment, collaborating with international teams to develop & integrate real-time data retrieval using Object Manager & C++, improving data accuracy & cost efficiency. Addressed production bugs in NX Cable Router\'s label rendering system, introduced Multi-Tiered Labels feature, and implemented unit tests to ensure reliability.',
    impact: [
      'Developed customer-facing feature modernizing 2D Cross-Section View in NX-CAD',
      'Enabled real-time cable layout visualization with color-coded data',
      'Led sprint planning & task prioritization in Agile environment',
      'Collaborated with international teams on real-time data retrieval',
      'Introduced Multi-Tiered Labels feature and implemented unit tests',
    ],
    tech: ['C++', 'HTML', 'NX-CAD', 'Object Manager', 'Agile', 'Scrum', 'Unit Testing', 'Enterprise Software'],
  },
  {
    id: 'marketatomy',
    company: 'MarketAtomy LLC',
    role: 'Intern → Part-time Software Engineer',
    period: 'Jan 2020 – Jul 2023',
    location: 'Winter Springs, FL → Remote',
    narrative:
      'Led full-stack web development of a 21-module business health assessment platform for optimizing business growth strategies. Implemented secure user login/registration system with OTP verification & hashing/encryption techniques. Employed PHP PDO with parameterized queries to secure the back end against XSS & SQLi attacks, while managing the MySQL database and generating server-side PDF reports for clients.',
    impact: [
      'Led development of 21-module business health assessment platform',
      'Implemented secure authentication with OTP verification and encryption',
      'Secured back end against XSS & SQL injection attacks',
      'Managed MySQL database and generated server-side PDF reports',
    ],
    tech: ['PHP', 'MySQL', 'PDO', 'JavaScript', 'HTML/CSS', 'jQuery', 'Full-Stack'],
  },
  {
    id: 'coding-for-charity',
    company: 'CodingForCharity',
    role: 'Founder, Executive Director, Full-stack Web Developer',
    period: 'Mar 2020 – Dec 2021',
    location: 'Lake Mary, FL',
    narrative:
      'Founded CodingForCharity, an organization with 70+ members across 8 countries that fundraises for underprivileged children by building websites for businesses/non-profits in exchange for charity donations. Implemented full-stack web development across e-commerce, paywalls, and mobile ordering, developing and managing 40+ websites. Received coverage from prominent local radio and TV stations in recognition of CodingForCharity\'s impact.',
    impact: [
      'Founded organization with 70+ members across 8 countries',
      'Developed and managed 40+ websites for businesses/non-profits',
      'Implemented e-commerce, paywalls, and mobile ordering systems',
      'Received coverage from prominent local radio and TV stations',
    ],
    tech: ['React', 'Firebase', 'Material-UI', 'WordPress', 'E-commerce', 'Payment Integration', 'Product Development'],
  },
];
