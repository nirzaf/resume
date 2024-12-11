import { Experience } from '../../types/resume';

export const experienceData: Experience[] = [
  {
    company: "Primary Health Care Corporation",
    position: "Software Development Specialist",
    location: "Qatar",
    startDate: "July 2022",
    endDate: "Present",
    description: "Backend development and optimization for the Nar'aakom Mobile Application backend services.",
    achievements: [
      "Reduced query latency by 50% with Azure Redis implementation",
      "Enabled seamless third-party integrations via Open API design",
      "Improved system scalability with CQRS pattern",
      "Achieved 99.9% uptime with monitoring",
      "Migrated REST API to GraphQL with Azure Active Directory integration",
      "Optimized query performance using Azure Redis distributed caching",
      "Migrated data from SQL Server to FHIR resource-type database",
      "Developed system for Open API to enable third-party services integration"
    ],
    technologies: [
      "GraphQL", "Azure Active Directory", "Azure Redis",
      "SQL Server", "FHIR", ".NET Core 6",
      "Entity Framework Core", "Azure Service Bus",
      "SignalR", "Swagger/OpenAPI", "OAuth2/JWT",
      "Docker", "Azure DevOps", "Application Insights"
    ],
    logo: "https://ik.imagekit.io/quadrate/Primary-Health-Care-Corporation.png?updatedAt=1733949029677"
  },
  {
    company: "Quadrate Tech Solutions Private Limited",
    position: "Senior Full-stack Engineer",
    location: "Sri Lanka",
    startDate: "July 2020",
    endDate: "June 2022",
    description: "Led development of Hotel ERP, a SaaS-based ERP solution for hotels.",
    achievements: [
      "Reduced synchronization delays by 70% through optimized Cosmos Database migration",
      "Enhanced deployment efficiency with Azure CI/CD pipeline implementation",
      "Improved application performance with lazy loading",
      "Achieved 40% reduction in processing time",
      "Managed administration module for authentication and authorization",
      "Deployed mail service and SMS gateway using Azure Functions and Logic Apps",
      "Synchronized legacy data from SQL Server to Cosmos Database via SQL API",
      "Implemented microservices integration using Azure Service Bus and RabbitMQ"
    ],
    technologies: [
      ".NET Core 3.1", "C# 9", "Angular 12",
      "Azure Functions", "Azure Logic Apps", "Cosmos DB",
      "Azure Service Bus", "RabbitMQ", "xUnit.net",
      "Angular Material", "NgRx", "RxJS",
      "TypeScript", "SASS/SCSS", "JWT Auth"
    ],
    logo: "https://ik.imagekit.io/quadrate/QTS%20Logo%20Primary.png?updatedAt=1733854434969"
  },
  {
    company: "Voigue Private Limited",
    position: "Dot NET Engineer",
    location: "Sri Lanka",
    startDate: "November 2019",
    endDate: "June 2020",
    description: "Developed SmartPABX, a cloud-based phone system for VoIP services.",
    achievements: [
      "Streamlined VoIP call management through dynamic UI optimizations",
      "Reduced backend response times by 30%",
      "Improved system stability by 40%",
      "Successfully migrated legacy system with zero data loss",
      "Optimized UI by converting WinForms to WPF",
      "Implemented dynamic UI functions for call management",
      "Designed scalable database architecture"
    ],
    technologies: [
      ".NET Core 2.1", "AsterNET", "WPF", "C# 7",
      "REST API", "MariaDB", "JSON", "XAML",
      "Entity Framework Core", "AutoMapper",
      "Prism", "Unity DI", "NLog", "xUnit",
      "Material Design", "TPL"
    ],
    logo: "https://ik.imagekit.io/quadrate/logo-PNG-300x72-1.png?updatedAt=1733949152854"
  },
  {
    company: "Virtusa Private Limited",
    position: "Associate Full-stack Engineer",
    location: "Sri Lanka",
    startDate: "January 2019",
    endDate: "October 2019",
    description: "Developed McDonald's Workforce Operations Labor Forecasting System.",
    achievements: [
      "Developed a web application to forecast labour requirements, improving decision-making time by five minutes versus six months",
      "Implementation of new features, optimizations, bug prioritizing and fixing",
      "Produced detailed technical documentation",
      "Maintained 10/10 client scorecards throughout the project lifecycle"
    ],
    technologies: [
      "Angular 6", "Bootstrap 4.2", ".NET Core 2.0",
      "Web API", "EF Core 2.0", "AutoMapper",
      "SQL Server 2017", "Azure Web Jobs", "Azure Blob Storage",
      "Azure File Storage", "Azure Insights", "Azure Redis Cache",
      "OpenXml", "Visual Studio 2017", "Azure CI/CD"
    ],
    logo: "https://ik.imagekit.io/quadrate/images.jpeg?updatedAt=1733949236783"
  },
  {
    company: "Nemico Holdings",
    position: "Software Developer",
    location: "Sri Lanka",
    startDate: "January 2016",
    endDate: "December 2018",
    description: "Developed inventory management systems for large fashion retailers.",
    achievements: [
      "Integrated POS systems for real-time inventory updates",
      "Migrated reporting systems from Crystal Reports to iTextSharp to save costs",
      "Implemented cloud-based enterprise inventory management in ASP.NET",
      "Fixed bugs and added new features as per Agile methodology"
    ],
    technologies: [
      "C#.NET", "ASP.NET", "Microsoft SQL Server 2012",
      "iTextSharp", "Crystal Reports for Web", "Visual Studio 2015"
    ],
    logo: "https://ik.imagekit.io/quadrate/Nemioc%20Holdings.jpg?updatedAt=1733949381218"
  },
  {
    company: "Olayan",
    position: "Backend Developer",
    location: "Saudi Arabia",
    startDate: "June 2012",
    endDate: "July 2015",
    description: "Centralized the online order-taking process and enhanced field sales force productivity.",
    achievements: [
      "Developed real-time notification features using SignalR",
      "Reduced document viewing response time using PDF.js",
      "Enhanced document handling functionalities by replacing Box View",
      "Improved UX and operational efficiency"
    ],
    technologies: [
      ".NET Framework 4.0", "SignalR", "ASP.NET Web API",
      "PDF.js", "Microsoft Visual Studio 2012", "Microsoft SQL Server 2008 R2"
    ],
    logo: "https://ik.imagekit.io/quadrate/download.png?updatedAt=1733949542846"
  },
  {
    company: "QTS Private Limited",
    position: "Junior Developer",
    location: "Sri Lanka",
    startDate: "August 2009",
    endDate: "April 2012",
    description: "Developed applications to support field service engineers in capturing and synchronizing data.",
    achievements: [
      "Reverse-engineered Office Info Path 2003",
      "Developed add-ons ensuring performance and license compliance",
      "Optimized team's efficiency in feature implementation and bug fixes"
    ],
    technologies: [
      "XML", "Office InfoPath", "C#.NET",
      "ASP.NET", "SQL Server", "Visual Studio"
    ],
    logo: "https://ik.imagekit.io/quadrate/QTS-Logo-%20emposed.png?updatedAt=1722424244082"
  }
];
