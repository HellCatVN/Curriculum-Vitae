export type Experience = {
  company: string
  role: string
  period: string
  summary: string
  detail?: string[]
  stack?: string[]
  projectUrl?: string
  featured?: boolean
}

export const profile = {
  name: 'Trần Quốc Long',
  handle: 'HellCatVN',
  title: 'Software Engineer & Web Developer',
  email: 'hellcatvn@gmail.com',
  phone: '+84 933 822 406',
  website: 'hellcatvn.com',
  location: 'Ho Chi Minh City, Vietnam',
  linkedin: 'https://www.linkedin.com/in/hellcatvn/',
  facebook: 'https://www.facebook.com/hellcatvn.io',
  twitter: 'https://twitter.com/hellcatvn',
  cv: 'https://www.topcv.vn/xem-cv/A1MCBQQDAAIHUlsCB1RVAwUNW1dfUAJQVgUDVg2642',
}

export const intro =
  'Software engineer focused on building web products end to end — from polished interfaces and APIs to databases, cloud infrastructure, integrations and production support.'

export const legacyAbout =
  'Experienced across the full development cycle for dynamic web projects, with an early focus on HTML5, CSS3, Sass, Less, JSON, XML, Java, JavaScript, jQuery and ReactJS.'

export const experiences: Experience[] = [
  {
    company: 'TalkTV (VNG)',
    role: 'Platform Support Collaborator',
    period: 'Mar 2016 — Jun 2018',
    summary:
      "Managed and supported TalkTV, VNG's online livestream platform and one of the largest livestream platforms in Vietnam at the time.",
    detail: [
      'Supported platform operations and helped manage the livestream experience for users and creators.',
    ],
  },
  {
    company: 'Ventuso',
    role: 'Web Developer',
    period: 'Jun 2017 — Dec 2017',
    summary:
      'Started as an intern, researching Laravel Lumen, JWT authentication and API development while also translating PSD designs into production HTML.',
    detail: [
      'Built delivery-application APIs with JWT authentication.',
      'Researched Laravel ORM patterns and translated PSD designs into responsive HTML.',
    ],
    stack: ['PHP', 'Laravel', 'Lumen', 'JWT', 'HTML/CSS'],
  },
  {
    company: 'Freelance',
    role: 'Web Developer',
    period: 'Feb 2018 — May 2018',
    summary: 'Built e-commerce work with WordPress and WooCommerce.',
    stack: ['WordPress', 'WooCommerce', 'PHP'],
  },
  {
    company: 'TPS Software',
    role: 'Web Developer',
    period: 'Jan 2019 — Present',
    summary:
      'Worked across e-commerce modernization, logistics integration, job-search systems and legacy PHP upgrades.',
    detail: [
      'Built an EC-CUBE4 plugin integrating the Giao Hàng Tiết Kiệm API.',
      'Helped version-up 148 e-commerce sites from PHP 5.1 to PHP 7.2, including Python automation for deprecated APIs.',
      'Contributed to Kyujin, a Django-based job search platform deployed with Docker Compose.',
      'Worked on Traveler, upgrading PHP and integrating APIs across user and admin frontends.',
    ],
    stack: ['PHP', 'EC-CUBE', 'Python', 'Django', 'Docker'],
  },
  {
    company: 'Self Project',
    role: 'Software Engineer — Phoenix Discord Bot',
    period: 'Jan 2020 — Present',
    summary:
      'Built and self-hosted a global text-game Discord bot used by roughly 1,000 users at the time of the original résumé.',
    detail: [
      'Node.js application with MongoDB, cron jobs, i18n and Canvas rendering.',
      'Deployed and operated on AWS EC2.',
    ],
    stack: ['Node.js', 'MongoDB', 'AWS EC2', 'i18next', 'Canvas'],
    projectUrl: 'https://phoenix.hellcatvn.com/',
    featured: true,
  },
  {
    company: 'HIQ.AI',
    role: 'Software Engineer',
    period: 'Apr 2020 — Jun 2020',
    summary:
      'Worked on an internal stock/customer management product and an AI-camera research project.',
    detail: [
      'Internal product stock and customer management with Express.js, Redis and MongoDB.',
      'Image-dataset experiments for gender, age and expression recognition using Keras and Google Colab.',
    ],
    stack: ['Express.js', 'Redis', 'MongoDB', 'Keras', 'Google Colab'],
  },
  {
    company: 'Rockship',
    role: 'Web Developer',
    period: 'Jun 2020 — Sep 2020',
    summary:
      'Contributed to recruiter collaboration and food-ordering products, including project initialization and backend architecture.',
    detail: [
      'Rock Search: fixed bugs and improved API flows using Flask, SQLAlchemy and PostgreSQL.',
      'Food Ordering: initialized the project, designed the database, and built authentication, authorization and APIs with NestJS and TypeORM.',
    ],
    stack: ['Flask', 'NestJS', 'TypeORM', 'PostgreSQL', 'SQLAlchemy'],
  },
  {
    company: 'Self Project',
    role: 'Web Developer — Comicaholic',
    period: 'Jun 2020 — Present',
    summary:
      'Built a comic-reading platform with a React frontend, MongoDB data layer, admin tooling and automated content workflows.',
    detail: [
      'React.js frontend with migration plans toward Next.js server-side rendering.',
      'MongoDB, Ant Design Pro admin, cron-based content automation and multiple image storage providers.',
      'Reverse-engineered image and chat APIs for additional storage and communication options.',
      'Worked with AWS S3, Wasabi and BunnyCDN storage/CDN services.',
    ],
    stack: ['React', 'Next.js', 'MongoDB', 'AWS S3', 'BunnyCDN'],
    projectUrl: 'https://www.comicaholic.com/',
    featured: true,
  },
  {
    company: 'CIMB Bank',
    role: 'Web Developer & Software Engineer',
    period: 'Sep 2020 — Apr 2022',
    summary:
      'Key contributor in a partner-integration stream and later a mobile contributor to the bank application.',
    detail: [
      'Built embedded partner banking experiences with React, MobX and a NestJS/TypeScript backend.',
      'Worked on integrations including TOSS, Finhay, SmartPay and SnailShip.',
      'Contributed Flutter mobile features such as Fund Transfer, Dispute and E-Request.',
    ],
    stack: ['React', 'MobX', 'NestJS', 'TypeScript', 'Flutter'],
    featured: true,
  },
  {
    company: 'NAB — National Australia Bank / NICV',
    role: 'Analyst Engineer',
    period: 'Apr 2022 — Present',
    summary:
      'Analyst Engineer in open banking, translating business requirements into product and platform changes while supporting production systems.',
    detail: [
      'Mini-app development with React, Redux and GraphQL.',
      'Node.js BFF, microservices and serverless services.',
      'Production support and cloud infrastructure across AWS and Azure.',
    ],
    stack: ['React', 'Redux', 'GraphQL', 'Node.js', 'AWS', 'Azure'],
    featured: true,
  },
]

export const education = [
  {
    title: 'Computer Science',
    org: 'International University',
    period: 'Aug 2014 — Present',
    text: 'Completed computer-science coursework and built a thesis platform for a streaming community using ReactJS, Socket.io and ExpressJS.',
  },
  {
    title: 'Self Study',
    org: 'PHP',
    period: 'Dec 2016 — Present',
    text: 'Started with PHP syntax, then built projects with PHP and moved from plain PHP to CodeIgniter.',
  },
  {
    title: 'Self Study',
    org: 'Linux',
    period: 'Jun 2017 — Present',
    text: 'Learned Ubuntu, Kubuntu and CentOS installation, Linux commands, SSH deployment and VPS administration.',
  },
  {
    title: 'Self Study',
    org: 'NodeJS',
    period: 'Jan 2018 — Present',
    text: 'Started NodeJS with ExpressJS and continued into ReactJS.',
  },
]

export const skillGroups = [
  {
    label: 'Frontend',
    skills: ['React', 'Next.js', 'Redux', 'MobX', 'HTML5', 'CSS3', 'Sass', 'Less', 'JavaScript', 'jQuery', 'Flutter'],
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'NestJS', 'Express', 'GraphQL', 'PHP', 'Laravel', 'Lumen', 'CodeIgniter', 'Django', 'Flask', 'Java'],
  },
  {
    label: 'Data',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'TypeORM', 'SQLAlchemy', 'JSON', 'XML'],
  },
  {
    label: 'Cloud & Delivery',
    skills: ['AWS', 'Azure', 'Docker', 'Linux', 'Serverless', 'Production Support'],
  },
]

export const interests = [
  'Music',
  'Gaming',
  'Photography',
  'Football',
  'Traveling',
  'Movies',
]

export const interestsIntro =
  'Country music is my favorite. I enjoy football, movies, gaming, sports and spending time on activities that keep me fresh for work.'
