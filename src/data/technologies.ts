export interface Technology {
  name: string;
  icon: string;
}

// Helper function to create a technology object with icon handling
export const createTech = (name: string): Technology => {
  // We're now using devicon CSS classes in the component,
  // so we don't need to provide actual image URLs here.
  // The TechStack component will handle the icon display based on the technology name.
  
  // Just return the name, and the icon field can be empty
  // since we'll use the name to look up the appropriate devicon class
  return {
    name,
    icon: ''
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
  angular: createTech('Angular'),
  vuejs: createTech('Vue.js'),
  svelte: createTech('Svelte'),
  jquery: createTech('jQuery'),
  sass: createTech('SASS'),
  webpack: createTech('Webpack'),
  vite: createTech('Vite'),
  storybook: createTech('Storybook'),
  figma: createTech('Figma'),
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
  aspnet: createTech('ASP.NET'),
  entityframework: createTech('Entity Framework'),
  dapper: createTech('Dapper'),
  grpc: createTech('gRPC'),
  nunit: createTech('NUnit'),
  xunit: createTech('xUnit'),
  serilog: createTech('Serilog'),
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
  terraform: createTech('Terraform'),
  azuredevops: createTech('Azure DevOps'),
  prometheus: createTech('Prometheus'),
  grafana: createTech('Grafana'),
  elasticsearch: createTech('Elasticsearch'),
  rabbitmq: createTech('RabbitMQ'),
};

// Database Technologies
export const databaseTech = {
  sqlserver: createTech('SQL Server'),
  postgresql: createTech('PostgreSQL'),
  mongodb: createTech('MongoDB'),
  redis: createTech('Redis'),
  mysql: createTech('MySQL'),
  oracle: createTech('Oracle'),
  cassandra: createTech('Cassandra'),
  cosmosdb: createTech('Cosmos DB'),
  dynamodb: createTech('DynamoDB'),
};

// Testing Technologies
export const testingTech = {
  jest: createTech('Jest'),
  cypress: createTech('Cypress'),
  selenium: createTech('Selenium'),
  postman: createTech('Postman'),
  rtl: createTech('React Testing Library'),
  mocha: createTech('Mocha'),
  chai: createTech('Chai'),
  mstest: createTech('MSTest'),
};

// Architecture & Tools
export const architectureTech = {
  microservices: createTech('Microservices'),
  ddd: createTech('DDD'),
  cqrs: createTech('CQRS'),
  eventdriven: createTech('Event-Driven'),
  oauth: createTech('OAuth 2.0'),
  jwt: createTech('JWT'),
  swagger: createTech('Swagger'),
  openapi: createTech('OpenAPI'),
};

// Group all technologies
export const technologies = {
  frontend: Object.values(frontendTech),
  backend: Object.values(backendTech),
  cloud: Object.values(cloudTech),
  database: Object.values(databaseTech),
  testing: Object.values(testingTech),
  architecture: Object.values(architectureTech),
};
