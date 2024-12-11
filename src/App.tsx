import Header from './components/Header';
import Summary from './components/Summary';
import TopSkills from './components/TopSkills';
import Experience from './components/Experience';
import Education from './components/Education';
import OtherQualifications from './components/OtherQualifications';
import profileImage from './assets/profile.jpg';

export const resumeData = {
  header: {
    name: "Mohamed Fazrin",
    title: "Senior Software Development Specialist",
    profileImage: profileImage,
    contact: {
      email: "mfmfazrin1986@gmail.com",
      mobile: "+94772049123",
      location: "Colombo, Sri Lanka",
      linkedin: "https://linkedin.com/in/mfmfazrin",
      github: "https://github.com/nirzaf",
      portfolio: "https://nirzaf.github.io"
    }
  },
  summary: {
    professionalOverview: {
      text: "As a Senior Software Development Specialist at Primary Health Care Corporation, I architect and develop robust, high-concurrency web applications focusing on exceptional user experiences. With extensive experience in software engineering, I have consistently delivered innovative solutions across diverse industries, specializing in scalable architectures and performance optimization.",
      highlights: [
        {
          icon: "fa-rocket",
          text: "Led development of enterprise-scale healthcare systems"
        },
        {
          icon: "fa-layer-group",
          text: "Specialized in scalable architectures and microservices"
        },
        {
          icon: "fa-chart-line",
          text: "Proven track record of performance optimization"
        }
      ]
    },
    coreExpertise: {
      text: "My expertise encompasses full-stack development, cloud architecture, and agile methodologies, with particular strength in designing distributed systems and microservices. I excel in implementing real-time applications while maintaining clean code practices, leading development teams, and driving technological innovation through strategic solutions.",
      highlights: [
        {
          icon: "fa-code",
          text: "Full-stack development with modern technologies"
        },
        {
          icon: "fa-cloud",
          text: "Cloud architecture and distributed systems"
        },
        {
          icon: "fa-users-gear",
          text: "Team leadership and agile methodologies"
        }
      ]
    }
  },
  topSkills: [
    "React",
    "C#/.NET Core",
    "ASP.NET Core",
    "Angular",
    "Azure Cloud Services",
    "SQL Server",
    "Microservices",
    "REST API",
    "Agile Methodologies",
    "Leadership & Mentoring"
  ],
  experiences: [
    {
      title: "Software Development Specialist",
      company: "Primary Health Care Corporation",
      location: "Qatar",
      duration: "July 2022 – Present",
      description: "Backend development and optimization for the Nar'aakom Mobile Application backend services.",
      teamSize: 8,
      projectCount: 1,
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
      responsibilities: [
        "Managed administration module for authentication and authorization",
        "Handled primary configurations for property-subscribed modules",
        "Deployed mail service and SMS gateway using Azure Functions and Logic Apps",
        "Synchronized legacy data from SQL Server to Cosmos Database via SQL API",
        "Contributed to UI development using Angular",
        "Implemented microservices integration using Azure Service Bus and RabbitMQ",
        "Configured CI/CD pipelines using Azure DevOps",
        "Performed unit testing with xUnit.net"
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
        "Angular Material", "NgRx", "RxJS",
        "TypeScript", "SASS/SCSS", "JWT Auth"
      ]
    },
    {
      title: "Dot NET Engineer",
      company: "Voigue Private Limited",
      location: "Sri Lanka",
      duration: "November 2019 – June 2020",
      description: "Developed SmartPABX, a cloud-based phone system for VoIP services.",
      teamSize: 4,
      projectCount: 1,
      responsibilities: [
        "Developed Backend API with .NET Core",
        "Updated existing PABX legacy system",
        "Optimized UI by converting WinForms to WPF",
        "Implemented dynamic UI functions (call forward, group calls, call parking)",
        "Designed scalable database architecture",
        "Implemented real-time call monitoring features"
      ],
      achievements: [
        "Streamlined VoIP call management through dynamic UI optimizations",
        "Reduced backend response times by 30%",
        "Improved system stability by 40%",
        "Successfully migrated legacy system with zero data loss"
      ],
      technologies: [
        ".NET Core 2.1", "AsterNET", "WPF", "C# 7",
        "REST API", "MariaDB", "JSON", "XAML",
        "Entity Framework Core", "AutoMapper",
        "Prism", "Unity DI", "NLog", "xUnit",
        "Material Design", "TPL"
      ]
    },
    {
      title: "Associate Full Stack-Engineer",
      company: "Virtusa Private Limited",
      location: "Colombo, Sri Lanka",
      duration: "January 2019 – October 2019 (Contract)",
      project: "McDonald's - Workforce Operations Labor Forecasting System",
      teamSize: 5,
      projectCount: 1,
      responsibilities: [
        "Developed web application for labor requirement forecasting using Angular and .NET Core",
        "Implemented predictive analytics using Azure Machine Learning",
        "Optimized data processing reducing forecasting time from 6 months to 5 minutes",
        "Built responsive dashboard with real-time updates using SignalR",
        "Implemented caching strategy with Azure Redis Cache",
        "Set up monitoring and logging with Azure Application Insights"
      ],
      achievements: [
        "Reduced labor forecasting process time from 6 months to 5 minutes",
        "Achieved and maintained 10/10 client satisfaction ratings",
        "Improved forecast accuracy by 35% using machine learning",
        "Reduced infrastructure costs by 40% through optimization"
      ],
      technologies: [
        "Angular 6", "NgBootstrap", "RxJS", "NgRx",
        "Bootstrap 4.2", "Chart.js", "D3.js",
        ".NET Core 2.0", "Entity Framework Core",
        "SQL Server 2017", "Azure Web Jobs",
        "Azure Blob Storage", "Azure Redis Cache",
        "Azure ML.NET", "Azure Application Insights",
        "Jest", "Karma", "Protractor"
      ]
    },
    {
      title: "Software Developer",
      company: "Nemico Holdings",
      location: "Colombo, Sri Lanka",
      duration: "January 2016 – December 2018",
      project: "Enterprise Inventory Management System",
      teamSize: 4,
      projectCount: 1,
      responsibilities: [
        "Integrated POS systems with real-time inventory updates",
        "Implemented cloud-based enterprise inventory management",
        "Developed custom reporting system using iTextSharp",
        "Built RESTful APIs for mobile and web clients",
        "Implemented real-time stock alerts and notifications",
        "Designed and implemented multi-tenant architecture"
      ],
      achievements: [
        "Improved inventory management efficiency by 40%",
        "Successfully migrated reporting system to modern framework",
        "Reduced report generation time by 60%",
        "Implemented successful zero-downtime deployment strategy"
      ],
      technologies: [
        "C#.NET", "ASP.NET MVC 5", "Web API 2",
        "Entity Framework 6", "Dapper", "AutoMapper",
        "SQL Server 2012", "Redis", "Hangfire",
        "iTextSharp", "Crystal Reports",
        "jQuery", "Bootstrap 3", "SignalR",
        "NUnit", "Moq", "Log4net"
      ]
    },
    {
      title: "Backend Developer",
      company: "Olayan",
      location: "Saudi Arabia",
      duration: "June 2012 – July 2015",
      project: "Field Sales Force Automation System",
      teamSize: 5,
      projectCount: 1,
      responsibilities: [
        "Developed centralized order processing system",
        "Implemented real-time notifications using SignalR",
        "Built document viewing system with PDF.js",
        "Designed offline-first architecture for field operations",
        "Implemented geolocation-based territory management",
        "Developed mobile-responsive backend APIs"
      ],
      achievements: [
        "Improved document handling response time by 65%",
        "Enhanced field sales team productivity by 45%",
        "Reduced data sync conflicts by 90%",
        "Achieved 99.9% system availability"
      ],
      technologies: [
        ".NET Framework 4.0", "ASP.NET MVC 4",
        "SignalR", "Web API", "WCF",
        "Entity Framework", "PDF.js", "Knockout.js",
        "SQL Server 2008 R2", "Redis",
        "Bootstrap", "jQuery Mobile",
        "NHibernate", "Unity IoC", "MSMQ"
      ]
    },
    {
      title: "Junior Developer",
      company: "QTS Private Limited",
      location: "Colombo, Sri Lanka",
      duration: "August 2009 – April 2012",
      project: "LECO Energy - Field Service Management System",
      teamSize: 3,
      projectCount: 1,
      responsibilities: [
        "Developed field service application for power maintenance",
        "Implemented custom forms using InfoPath 2003",
        "Built Windows service for automated data synchronization",
        "Developed reporting module for maintenance tracking",
        "Implemented offline data collection system",
        "Created custom Excel add-ins for data analysis"
      ],
      achievements: [
        "Improved maintenance team workflow efficiency by 50%",
        "Reduced paper-based processes by 80%",
        "Decreased data entry errors by 75%",
        "Automated 90% of routine reporting tasks"
      ],
      technologies: [
        "C#.NET", "Windows Forms", "WPF",
        "ADO.NET", "LINQ", "XML",
        "InfoPath 2003", "SharePoint",
        "SQL Server 2005", "Crystal Reports",
        "VSTO", "Excel Interop",
        "Windows Services", "MSMQ"
      ]
    }
  ],  
  education: [
    {
      degree: "Master of Computer Science",
      institution: "University of Colombo School of Computing",
      location: "Colombo, Sri Lanka",
      duration: "2019 - 2021",
      description: "Specialized in Advanced Software Engineering and Distributed Systems. Conducted research on cloud-native architectures and microservices scalability patterns.",
      gpa: "3.8/4.0",
      major: "Software Engineering",
      achievements: [
        "Published research paper on 'Scalable Microservices Architecture Patterns' in IEEE Conference",
        "Led a team of 5 in developing a cloud-native healthcare management system",
        "Received Outstanding Graduate Student Award"
      ],
      honors: [
        "Dean's List - All Semesters",
        "Merit Scholarship Recipient",
        "Best Research Project Award"
      ]
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Colombo",
      location: "Colombo, Sri Lanka",
      duration: "2015 - 2019",
      description: "Comprehensive study of computer science fundamentals with focus on software development and system architecture. Participated in multiple hackathons and coding competitions.",
      gpa: "3.7/4.0",
      major: "Computer Science",
      minor: "Mathematics",
      achievements: [
        "Developed an AI-powered attendance tracking system for the university",
        "Captain of the university programming team",
        "Completed internship at Microsoft Innovation Center"
      ],
      honors: [
        "First Class Honours",
        "Programming Competition Winner 2018",
        "University Innovation Grant Recipient"
      ]
    }
  ],
  qualifications: [
    {
      title: "IELTS (Academic)",
      issuer: "British Council",
      score: "7.5 Average",
      date: "2022"
    },
    {
      title: "Microsoft Azure Developer Associate (AZ-204)",
      issuer: "Microsoft",
      date: "2022"
    },
    {
      title: "Power Automate",
      issuer: "Udemy",
      date: "2023"
    },
    {
      title: "Power Apps",
      issuer: "Udemy",
      date: "2023"
    }
  ]
};

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark">
      <div className="content-wrapper py-8 space-y-8">
        <Header {...resumeData.header} />
        <Summary 
          professionalOverview={resumeData.summary.professionalOverview}
          coreExpertise={resumeData.summary.coreExpertise}
        />
        <TopSkills skills={resumeData.topSkills} />
        <Experience experiences={resumeData.experiences} />
        <Education education={resumeData.education} />
        <OtherQualifications qualifications={resumeData.qualifications} />
      </div>
    </div>
  );
}

export default App;
