export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  details?: string[];
}

export const education: Education[] = [
  {
    id: 'uf',
    institution: 'University of Florida, Herbert Wertheim College of Engineering',
    degree: 'B.S. in Computer Science, Minor in Business Administration, AI Certificate',
    period: 'Aug 2021 – May 2025',
    location: 'Gainesville, FL',
    details: [
      'Computer Science major with focus on software engineering and AI',
      'Business Administration minor',
      'AI Certificate',
    ],
  },
  {
    id: 'seminole',
    institution: 'Seminole High School',
    degree: 'International Baccalaureate Diploma Programme',
    period: '2018 – 2021',
    location: 'Lake Mary, FL',
  },
];

