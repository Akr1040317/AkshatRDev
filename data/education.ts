export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  grade?: string;
  activities?: string[];
  achievements?: string[];
  details?: string[];
}

export const education: Education[] = [
  {
    id: 'uf',
    institution: 'University of Florida, Herbert Wertheim College of Engineering',
    degree: 'Bachelor of Science - CS and minor in Business Administration',
    period: 'Aug 2021 – May 2025',
    location: 'Gainesville, FL',
    grade: 'Senior',
    activities: [
      'Society of Asian Scientists and Engineers',
      'UF Association for Computing Machinery',
      'Indian Student Association',
      'Gator Cricket Club',
      'Gator Awaaz',
    ],
  },
  {
    id: 'seminole',
    institution: 'Seminole High School',
    degree: 'International Baccalaureate Diploma Programme',
    period: '2018 – 2021',
    location: 'Lake Mary, FL',
    grade: '12th',
    activities: [
      'Child Rights and You America Club (President)',
      'Technology Student Association (Fundraising Chair)',
      'CodingForCharity (Founder & Executive Director)',
      'Science National Honor Society (Physics & CS Chairman)',
      'Illuminati Academic Team',
      'Future Business Leaders of America',
      'Varsity Tennis Team',
    ],
    achievements: [
      'Summa Cum Laude',
      'AP Scholar with Distinction',
      '4.61 GPA',
      'SAT: 1520 / ACT: 35',
    ],
  },
];

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  url?: string;
}

export const certifications: Certification[] = [
  {
    id: 'mit-python',
    name: '6.00.1x Introduction to Computer Science and Programming Using Python',
    issuer: 'MITx Courses',
    issueDate: 'Aug 2020',
    credentialId: '419450f84e3b4b439f88c0238b222ad1',
  },
  {
    id: 'ciw-business',
    name: 'Certified Internet Webmaster Business Associate',
    issuer: 'Certification Partners',
    issueDate: '',
  },
];
