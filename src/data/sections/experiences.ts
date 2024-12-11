import { Experience } from '../../types/resume';

export const experienceData: Experience[] = [
  {
    title: "Software Development Specialist",
    company: "Primary Health Care Corporation",
    location: "Qatar",
    duration: "July 2022 – Present",
    description: "Backend development and optimization for the Nar'aakom Mobile Application backend services.",
    teamSize: 8,
    projectCount: 1,
    icon: "fa-laptop-code",
    responsibilities: [
      "Migrating REST API to GraphQL with Azure Active Directory integration",
      "Optimizing query performance using Azure Redis distributed caching",
      "Migrating data from SQL Server to FHIR resource-type database",
      "Developing system for Open API to enable third-party services integration",
      "Implementing real-time notifications using SignalR",
      "Designing microservices architecture with Azure Service Bus"
    ],
    achievements: [
      "Reduced query latency by 50% with Azure Redis implementation",
      "Enabled seamless third-party integrations via Open API design",
      "Improved system scalability with CQRS pattern",
      "Achieved 99.9% uptime with monitoring"
    ],
    technologies: [
      "GraphQL", "Azure Active Directory", "Azure Redis",
      "SQL Server", "FHIR", ".NET Core 6",
      "Entity Framework Core", "Azure Service Bus",
      "SignalR", "Swagger/OpenAPI", "OAuth2/JWT",
      "Docker", "Azure DevOps", "Application Insights"
    ]
  },
  {
    title: "Senior Full-stack Engineer",
    company: "Quadrate Tech Solutions Private Limited",
    location: "Sri Lanka",
    duration: "July 2020 – June 2022",
    description: "Led development of Hotel ERP, a SaaS-based ERP solution for hotels.",
    teamSize: 6,
    projectCount: 1,
    icon: "fa-hotel",
    responsibilities: [
      "Managed administration module for authentication and authorization",
      "Handled primary configurations for property-subscribed modules",
      "Deployed mail service and SMS gateway using Azure Functions and Logic Apps",
      "Synchronized legacy data from SQL Server to Cosmos Database via SQL API",
      "Contributed to UI development using Angular",
      "Implemented microservices integration using Azure Service Bus and RabbitMQ"
    ],
    achievements: [
      "Reduced synchronization delays by 70% through optimized Cosmos Database migration",
      "Enhanced deployment efficiency with Azure CI/CD pipeline implementation",
      "Improved application performance with lazy loading",
      "Achieved 40% reduction in processing time"
    ],
    technologies: [
      ".NET Core 3.1", "C# 9", "Angular 12",
      "Azure Functions", "Azure Logic Apps", "Cosmos DB",
      "Azure Service Bus", "RabbitMQ", "xUnit.net",
      "Angular Material", "NgRx", "RxJS"
    ]
  }
];
