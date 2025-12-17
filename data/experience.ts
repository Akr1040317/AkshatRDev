export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  employmentType?: 'Full-time' | 'Part-time' | 'Internship' | 'Self-employed';
  narrative: string;
  impact: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    id: 'honeywell',
    company: 'Honeywell Aerospace',
    role: 'Software Engineer',
    period: 'Jun 2025 – Present',
    location: 'Phoenix, Arizona, United States',
    employmentType: 'Full-time',
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
    company: 'Hive Education LLC',
    role: 'Co-Founder & Lead Developer',
    period: 'Jun 2023 – Present',
    location: 'Lake Mary, Florida, United States',
    employmentType: 'Self-employed',
    narrative:
      'Co-founded Hive to reshape spelling education through intelligent, pattern-based learning. Built Hive\'s iOS app and web platform used by 500+ students and piloted with multiple school districts, delivering 60+ pattern-based lessons and quizzes on roots, patterns, and language origins. Established partnership with Merriam-Webster, integrating API with GPT-4 for sentence generation, explanations, and feedback. Engineered PrepCenter™, the official studying platform and technology & education partner for the Spelling Bee Championship UAE, with round-based word lists, four study modes, analytics, and leaderboards for hundreds of competitors. Developed a Next.js/Tailwind educator dashboard, optimized backend using API pagination, caching, lazy instantiation, Firebase, and Google Cloud Functions, and added custom list-creation tools while prototyping an SLM-based tutor for adaptive coaching.',
    impact: [
      'Built iOS app and web platform used by 500+ students, piloted with multiple school districts',
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
      'Digital Marketing',
      'REST APIs',
      'CloudKit',
      'React.js',
      'Custom GPTs',
      'Product Strategy',
      'Team Leadership',
    ],
  },
  {
    id: 'siemens',
    company: 'Siemens Digital Industries Software',
    role: 'Part-time Software Engineer → Software Engineering Intern',
    period: 'May 2024 – Dec 2024',
    location: 'Milford, Ohio, United States → Remote',
    employmentType: 'Part-time',
    narrative:
      'Started as Software Engineering Intern and transitioned to Part-time Software Engineer. Developed a customer-facing feature in NX-CAD using C++ and HTML rendering to modernize the 2D Cross-Section View, enabling real-time cable layout visualization with color-coded data for industrial engineering projects. Led sprint planning & task prioritization in a scrum-based Agile environment, collaborating with international teams to develop & integrate real-time data retrieval using Object Manager & C++, improving data accuracy & cost efficiency. Addressed production bugs in NX Cable Router\'s label rendering system, introduced Multi-Tiered Labels feature, and implemented unit tests to ensure reliability.',
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
    id: 'gathr',
    company: 'Gathr',
    role: 'Co-Founder, iOS Developer, Head of Marketing',
    period: 'Apr 2024 – Nov 2024',
    location: 'Gainesville, Florida, United States',
    employmentType: 'Self-employed',
    narrative:
      'Launched an iOS app to enhance student engagement by connecting clubs and students through a social media-like interface, gaining 700+ UF students, 60+ organizations, and 20,000+ views on social media campaigns within first 3 weeks.',
    impact: [
      'Launched iOS app connecting clubs and students',
      'Gained 700+ UF students and 60+ organizations within first 3 weeks',
      'Achieved 20,000+ views on social media campaigns',
    ],
    tech: ['Swift', 'iOS', 'Firebase', 'Social Media Marketing', 'Software Development'],
  },
  {
    id: 'marketatomy',
    company: 'MarketAtomy LLC',
    role: 'Software Engineer',
    period: 'Jun 2022 – Jul 2023',
    location: 'Winter Springs, Florida, United States',
    employmentType: 'Part-time',
    narrative:
      'Led full-stack web development of a 21-module business health assessment platform for optimizing business growth strategies. Implemented secure user login/registration system with OTP verification & hashing/encryption techniques. Employed PHP PDO with parameterized queries to secure the back end against XSS & SQLi attacks, while managing the MySQL database and generating server-side PDF reports for clients.',
    impact: [
      'Led development of 21-module business health assessment platform',
      'Implemented secure authentication with OTP verification and encryption',
      'Secured back end against XSS & SQL injection attacks',
      'Managed MySQL database and generated server-side PDF reports',
    ],
    tech: ['PHP', 'JavaScript', 'HTML', 'MySQL', 'CSS'],
  },
  {
    id: 'coding-for-charity',
    company: 'CodingForCharity',
    role: 'Founder, Executive Director, Full-stack Web Developer',
    period: 'Mar 2020 – Dec 2021',
    location: 'Lake Mary, Florida, United States',
    employmentType: 'Self-employed',
    narrative:
      'Founded CodingForCharity, an organization with 70+ members across 8 countries that fundraises for underprivileged children by asking businesses/non-profits for charity donations in return for developing websites. Implemented full-stack web development, with a focus on e-commerce, payment integration, and mobile ordering, leading to the successful development and management of over 40 websites. Received coverage from prominent local radio and TV stations in recognition of CodingForCharity\'s work.',
    impact: [
      'Founded organization with 70+ members across 8 countries',
      'Developed and managed 40+ websites for businesses/non-profits',
      'Implemented e-commerce, paywalls, and mobile ordering systems',
      'Received coverage from prominent local radio and TV stations',
    ],
    tech: ['React', 'Firebase', 'Material-UI', 'WordPress', 'E-commerce', 'Payment Integration', 'Full-Stack Development', 'Project Management'],
  },
  {
    id: 'marketatomy-intern',
    company: 'MarketAtomy LLC',
    role: 'Software Developer Intern',
    period: 'Jan 2020 – May 2021',
    location: 'Winter Springs, Florida, United States',
    employmentType: 'Internship',
    narrative:
      'Led the full-stack web development of a 21-module business health assessment platform for optimizing business growth strategies. Implemented a secure user login/registration system with OTP verification & hashing/encryption techniques. Employed PHP PDO with parameterized queries to secure the back-end against XSS & SQLi attacks, while managing the MySQL database and conducting data analysis to generate server-side PDF reports for clients.',
    impact: [
      'Led development of 21-module business health assessment platform',
      'Implemented secure authentication with OTP verification and encryption',
      'Secured back end against XSS & SQL injection attacks',
      'Managed MySQL database and generated server-side PDF reports',
    ],
    tech: ['HTML', 'CSS', 'PHP', 'PhpMyAdmin', 'MySQL', 'Bootstrap'],
  },
];
