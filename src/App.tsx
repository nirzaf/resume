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
        "Developing system for Open API to enable third-party services integration"
      ],
      achievements: [
        "Reduced query latency by 50% with Azure Redis implementation",
        "Enabled seamless third-party integrations via Open API design"
      ],
      technologies: [
        "GraphQL",
        "Azure Active Directory",
        "Azure Redis",
        "SQL Server",
        "FHIR",
        ".NET Core"
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
        "Implemented microservices integration using Azure Service Bus and RabbitMQ (Pub-Sub pattern)",
        "Configured CI/CD pipelines using Azure DevOps",
        "Performed unit testing with xUnit.net"
      ],
      achievements: [
        "Reduced synchronization delays by 70% through optimized Cosmos Database migration",
        "Enhanced deployment efficiency with Azure CI/CD pipeline implementation"
      ],
      technologies: [
        ".NET Core 3.1 & above",
        "C# 9 & above",
        "Angular 12",
        "Azure Functions",
        "Azure Logic Apps",
        "Cosmos DB",
        "Azure Service Bus",
        "RabbitMQ",
        "xUnit.net"
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
        "Implemented dynamic UI functions (call forward, group calls, call parking)"
      ],
      achievements: [
        "Streamlined VoIP call management through dynamic UI optimizations",
        "Reduced backend response times by 30%"
      ],
      technologies: [
        ".NET Core 2.1",
        "AsterNET",
        "WPF",
        "C# (7)",
        "REST API",
        "MariaDB",
        "JSON"
      ]
    },
    {
      title: "Associate Full Stack-Engineer",
      company: "Virtusa Private Limited",
      location: "Sri Lanka",
      duration: "January 2019 – October 2019 (Contract)",
      description: "Developed a web application for McDonald's workforce operations labor forecasting system.",
      teamSize: 5,
      projectCount: 1,
      responsibilities: [
        "Developed web application for labor requirement forecasting",
        "Improved decision-making process from 6 months to 5 minutes",
        "Implemented new features and optimizations",
        "Maintained client satisfaction with high scorecards",
        "Handled bug prioritization, fixing, and technical documentation"
      ],
      achievements: [
        "Reduced labor forecasting process time to minutes",
        "Achieved and maintained 10/10 client satisfaction ratings"
      ],
      technologies: [
        "Angular 6",
        "Bootstrap 4.2",
        ".NET Core 2.0",
        "SQL Server 2017",
        "Azure Web Jobs",
        "Azure Blob and File Storage",
        "Azure Redis Cache",
        "Azure Insights"
      ]
    },
    {
      title: "Software Developer",
      company: "Nemico Holdings",
      location: "Sri Lanka",
      duration: "January 2016 – December 2018",
      description: "Implemented and optimized inventory management solutions for large fashion retailers.",
      teamSize: 4,
      projectCount: 1,
      responsibilities: [
        "Integrated POS for inventory database updates",
        "Fixed bugs using Agile methodology",
        "Implemented new user privileges",
        "Retrofitted legacy product management tools",
        "Implemented cloud-based enterprise inventory management",
        "Migrated reporting system from Crystal Reports to iTextSharp"
      ],
      achievements: [
        "Improved inventory management efficiency by 40%",
        "Successfully migrated reporting systems to modern frameworks"
      ],
      technologies: [
        "C#.NET",
        "Microsoft SQL Server 2012",
        "ASP.NET",
        "iTextSharp",
        "Crystal Report for Web"
      ]
    },
    {
      title: "Backend Developer",
      company: "Olayan",
      location: "Saudi Arabia",
      duration: "June 2012 – July 2015",
      description: "Enhanced field sales force productivity with centralized online order processing systems.",
      teamSize: 5,
      projectCount: 1,
      responsibilities: [
        "Centralized online order-taking process",
        "Increased field sales force productivity",
        "Implemented real-time notification feature using SignalR",
        "Replaced Box View with PDF.js for document viewing",
        "Reduced response time by average of one minute per document"
      ],
      achievements: [
        "Improved document handling and response time",
        "Enhanced productivity of field sales teams"
      ],
      technologies: [
        ".NET Framework 4.0",
        "SignalR",
        "ASP.NET Web API",
        "PDF.js",
        "Microsoft SQL Server 2008 R2"
      ]
    },
    {
      title: "Junior Developer",
      company: "QTS Private Limited",
      location: "Sri Lanka",
      duration: "August 2009 – April 2012",
      description: "Developed field service applications and optimized middleware for power turbine maintenance.",
      teamSize: 3,
      projectCount: 1,
      responsibilities: [
        "Developed field service application for power turbine maintenance",
        "Reverse-engineered Office InfoPath 2003 XML implementation",
        "Developed add-ons while maintaining performance",
        "Optimized team efficiency for feature implementations"
      ],
      achievements: [
        "Improved maintenance team workflows",
        "Developed popular add-ons for enterprise use"
      ],
      technologies: [
        "C#.NET",
        "PL/SQL",
        "Microsoft Excel 2003",
        "Microsoft Visual Studio 2008"
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
