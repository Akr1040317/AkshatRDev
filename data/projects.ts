export interface Project {
  id: string;
  name: string;
  tagline: string;
  category: 'featured' | 'labs';
  stack: string[];
  problem: string;
  solution: string;
  highlights: string[];
  outcome: string;
  media?: {
    type: 'image' | 'video';
    url: string;
    alt?: string;
  }[];
  links?: {
    live?: string;
    github?: string;
    demo?: string;
  };
}

export const projects: Project[] = [
  {
    id: 'hive',
    name: 'Hive - Spell Intelligently',
    tagline: 'iOS app and web platform reshaping spelling education through intelligent, pattern-based learning',
    category: 'featured',
    stack: ['Swift', 'iOS', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Google Cloud Functions', 'GPT-4 API', 'Merriam-Webster API'],
    problem: 'Students needed a modern, intelligent approach to spelling education that goes beyond rote memorization, focusing on patterns, roots, and language origins.',
    solution: 'Built Hive\'s iOS app and web platform with 60+ pattern-based lessons and quizzes. Integrated Merriam-Webster API with GPT-4 for sentence generation, explanations, and feedback. Developed Next.js/Tailwind educator dashboard with custom list-creation tools and an SLM-based tutor prototype for adaptive coaching.',
    highlights: [
      'Used by 600+ students and piloted with multiple school districts',
      '60+ pattern-based lessons on roots, patterns, and language origins',
      'Partnership with Merriam-Webster, integrating API with GPT-4',
      'Optimized backend using API pagination, caching, lazy instantiation',
      'Prototyping SLM-based tutor for adaptive coaching',
    ],
    outcome: 'Successfully scaled to 600+ students, established partnership with Merriam-Webster, and piloted with multiple school districts. The platform is reshaping how students approach spelling and modern literacy.',
    media: [
      {
        type: 'image',
        url: '/projects/hive-app.png',
        alt: 'Hive iOS app interface',
      },
      {
        type: 'image',
        url: '/projects/hive-web.png',
        alt: 'Hive web platform dashboard',
      },
    ],
    links: {
      live: 'https://hivespelling.com',
    },
  },
  {
    id: 'prepcenter-uae',
    name: 'PrepCenter™ UAE',
    tagline: 'Official studying platform for Spelling Bee Championship UAE',
    category: 'featured',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Google Cloud Functions'],
    problem: 'The Spelling Bee Championship UAE needed an official technology and education partner platform for hundreds of competitors to study effectively with round-based word lists and analytics.',
    solution: 'Engineered PrepCenter™ as the official studying platform with round-based word lists, four study modes (practice, quiz, flashcard, test), comprehensive analytics, and leaderboards. Built to support hundreds of competitors simultaneously.',
    highlights: [
      'Official technology & education partner for Spelling Bee Championship UAE',
      'Four study modes: practice, quiz, flashcard, and test',
      'Round-based word lists aligned with competition structure',
      'Analytics dashboard and leaderboards for competitors',
      'Scalable architecture supporting hundreds of users',
    ],
    outcome: 'Successfully deployed as the official platform for the Spelling Bee Championship UAE, serving hundreds of competitors with comprehensive study tools and analytics.',
    media: [
      {
        type: 'image',
        url: '/projects/prepcenter-dashboard.png',
        alt: 'PrepCenter UAE dashboard',
      },
      {
        type: 'image',
        url: '/projects/prepcenter-study.png',
        alt: 'PrepCenter study modes',
      },
    ],
    links: {
      live: 'https://prepcenter.uae',
    },
  },
  {
    id: 'gathr',
    name: 'Gathr',
    tagline: 'Campus involvement app connecting clubs and students',
    category: 'featured',
    stack: ['Swift', 'iOS', 'Firebase', 'Firebase Authentication', 'Google Analytics', 'FCM'],
    problem: 'Students at UF struggled to discover and engage with campus clubs and organizations, while clubs had difficulty reaching students.',
    solution: 'Launched an iOS app with a social media-like interface connecting clubs and students. Integrated Firebase Authentication with GatorLink login for UF-student-only access, implemented push notifications via FCM, and integrated Google Analytics to track events and optimize engagement.',
    highlights: [
      '700+ UF students and 60+ organizations within first 3 weeks',
      '20,000+ views on social media campaigns',
      'GatorLink integration for secure UF-student-only access',
      'Push notifications via Firebase Cloud Messaging',
      'Google Analytics integration for engagement tracking',
    ],
    outcome: 'Gained 700+ UF students, 60+ organizations, and 20,000+ views on social media campaigns within the first 3 weeks. Successfully enhanced campus engagement and community trust.',
    media: [
      {
        type: 'image',
        url: '/projects/gathr-app.png',
        alt: 'Gathr iOS app interface',
      },
      {
        type: 'video',
        url: '/projects/gathr-demo.mp4',
        alt: 'Gathr app demo video',
      },
    ],
    links: {
      live: 'https://getgathr.app',
    },
  },
  {
    id: 'internify',
    name: 'Internify',
    tagline: 'Job and internship search engine for students',
    category: 'featured',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'MERN Stack'],
    problem: 'Students found it difficult to discover and track internship opportunities across multiple platforms.',
    solution: 'Led a team in developing a web application using the MERN stack. Utilized external Search APIs to populate MongoDB with real-time job postings from LinkedIn, Indeed, and ZipRecruiter. Designed a user dashboard with job filtering, application-progress tracking, and login/registration capabilities.',
    highlights: [
      'MERN stack (MongoDB, Express, React, Node.js)',
      'Real-time job aggregation from LinkedIn, Indeed, ZipRecruiter',
      'Advanced filtering and search capabilities',
      'Application progress tracking dashboard',
      'Secure user authentication and registration',
    ],
    outcome: 'Successfully created a centralized platform for students to discover and track internship opportunities from multiple sources in one place.',
    media: [
      {
        type: 'image',
        url: '/projects/internify-dashboard.png',
        alt: 'Internify dashboard',
      },
      {
        type: 'image',
        url: '/projects/internify-search.png',
        alt: 'Internify job search interface',
      },
    ],
    links: {
      github: '#',
    },
  },
  {
    id: 'marketatomy',
    name: 'MarketAtomy Business Health Assessment',
    tagline: '21-module business health assessment platform',
    category: 'featured',
    stack: ['PHP', 'MySQL', 'PDO', 'JavaScript', 'HTML/CSS', 'jQuery'],
    problem: 'Businesses needed a comprehensive platform to assess their health across multiple dimensions and optimize growth strategies.',
    solution: 'Led full-stack web development of a 21-module business health assessment platform. Implemented secure user login/registration with OTP verification and hashing/encryption. Employed PHP PDO with parameterized queries to secure against XSS & SQLi attacks, managed MySQL database, and generated server-side PDF reports for clients.',
    highlights: [
      '21 comprehensive assessment modules',
      'Secure authentication with OTP verification',
      'XSS & SQL injection protection via PHP PDO',
      'Server-side PDF report generation',
      'Data analysis and visualization',
    ],
    outcome: 'Delivered a comprehensive platform enabling businesses to assess their health across 21 dimensions and optimize growth strategies with detailed analytics.',
    media: [
      {
        type: 'image',
        url: '/projects/marketatomy-dashboard.png',
        alt: 'MarketAtomy assessment dashboard',
      },
      {
        type: 'image',
        url: '/projects/marketatomy-report.png',
        alt: 'Sample business health report',
      },
    ],
    links: {
      live: 'https://marketatomy.com/bhc',
    },
  },
  {
    id: 'coding-for-charity',
    name: 'CodingForCharity',
    tagline: 'Connecting developers with nonprofits through web development',
    category: 'featured',
    stack: ['React', 'Firebase', 'Material-UI', 'WordPress', 'E-commerce', 'Payment Integration'],
    problem: 'Nonprofits needed websites but lacked budget, while developers wanted to contribute to meaningful causes.',
    solution: 'Founded CodingForCharity, an organization with 70+ members across 8 countries. Built a platform connecting developers with nonprofits, developing websites in exchange for charity donations. Implemented full-stack web development across e-commerce, paywalls, and mobile ordering, developing and managing 40+ websites.',
    highlights: [
      '70+ members across 8 countries',
      '40+ websites developed and managed',
      'E-commerce and payment integration',
      'Mobile ordering systems',
      'Received coverage from local radio and TV stations',
    ],
    outcome: 'Successfully fundraised for underprivileged children by developing 40+ websites for businesses/non-profits. Received recognition from prominent local radio and TV stations for the organization\'s impact.',
    media: [
      {
        type: 'image',
        url: '/projects/cfc-website.png',
        alt: 'CodingForCharity website',
      },
      {
        type: 'image',
        url: '/projects/cfc-projects.png',
        alt: 'CodingForCharity projects showcase',
      },
    ],
    links: {
      live: 'https://codingforcharityorg.com',
    },
  },
];
