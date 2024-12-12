import getIconUrl from 'tech-stack-icons';

export interface Technology {
  name: string;
  icon: string;
}

// Helper function to create a technology object with fallback icon handling
export const createTech = (name: string): Technology => {
  const normalizedName = name.toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .replace('dotnet', 'dot-net')
    .replace('nodejs', 'node-js')
    .replace('nextjs', 'next-js')
    .replace('reactjs', 'react')
    .replace('vuejs', 'vue')
    .replace('aspnet', 'dot-net');

  // Try to get icon from tech-stack-icons
  let icon: string;
  try {
    const techStackIcon = getIconUrl({ name: normalizedName });
    icon = typeof techStackIcon === 'string' ? techStackIcon : '';
  } catch {
    icon = '';
  }

  // Fallback to devicons if tech-stack-icons doesn't have the icon
  if (!icon) {
    icon = `https://raw.githubusercontent.com/devicons/devicon/master/icons/${normalizedName}/${normalizedName}-original.svg`;
  }

  return {
    name,
    icon
  };
};

// Frontend Technologies
export const frontendTech = {
  react: createTech('React'),
  typescript: createTech('TypeScript'),
  javascript: createTech('JavaScript'),
  html5: createTech('HTML5'),
  css3: createTech('CSS3'),
  tailwind: createTech('Tailwind CSS'),
  nextjs: createTech('Next.js'),
  redux: createTech('Redux'),
  materialui: createTech('Material-UI'),
  bootstrap: createTech('Bootstrap'),
};

// Backend Technologies
export const backendTech = {
  nodejs: createTech('Node.js'),
  dotnet: createTech('.NET Core'),
  csharp: createTech('C#'),
  python: createTech('Python'),
  java: createTech('Java'),
  graphql: createTech('GraphQL'),
  postgresql: createTech('PostgreSQL'),
  mongodb: createTech('MongoDB'),
  redis: createTech('Redis'),
  mysql: createTech('MySQL'),
};

// Cloud & DevOps Technologies
export const cloudTech = {
  azure: createTech('Azure'),
  docker: createTech('Docker'),
  kubernetes: createTech('Kubernetes'),
  aws: createTech('AWS'),
  jenkins: createTech('Jenkins'),
  git: createTech('Git'),
  github: createTech('GitHub'),
  gitlab: createTech('GitLab'),
};

// Testing Technologies
export const testingTech = {
  jest: createTech('Jest'),
  cypress: createTech('Cypress'),
  selenium: createTech('Selenium'),
  postman: createTech('Postman'),
};

// Group all technologies
export const technologies = {
  frontend: Object.values(frontendTech),
  backend: Object.values(backendTech),
  cloud: Object.values(cloudTech),
  testing: Object.values(testingTech),
};
