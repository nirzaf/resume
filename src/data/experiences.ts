import { Experience } from '../types/resume';

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
  }
  // ... other experiences
];
