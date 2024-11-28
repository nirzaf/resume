import Header from './components/Header';
import Summary from './components/Summary';
import TopSkills from './components/TopSkills';
import Experience from './components/Experience';
import Education from './components/Education';
import OtherQualifications from './components/OtherQualifications';

const resumeData = {
  header: {
    name: "Mohamed Farook Mohamed Fazrin",
    title: "MSc in Software Engineering",
    location: "Al Sadd, Doha, Qatar",
    phone: "+97433253203",
    mobile: "+94772049123",
    email: "mfmfazrin1986@gmail.com",
    links: {
      github: "github.com/nirzaf",
      linkedin: "linkedin.com/in/mfmfazrin",
      portfolio: "nirzaf.github.io"
    }
  },
  summary: `As a Senior Software Development Specialist at the Primary Health Care Corporation in Qatar, I architect and develop robust, high-concurrency web applications focusing on exceptional user experiences. With over a decade of experience in software engineering, I have consistently delivered innovative solutions across diverse industries, specializing in scalable architectures and performance optimization. My proven track record demonstrates expertise in building enterprise-grade applications that drive business success and technological advancement.

My core expertise encompasses full-stack development, cloud architecture, and agile methodologies, with particular strength in designing distributed systems and microservices. I excel in implementing real-time applications while maintaining clean code practices and mentoring development teams. Passionate about innovation, I bring a strategic approach to solving complex technical challenges and am seeking opportunities to drive transformative projects in a dynamic environment.`,
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
      company: "Primary Health Care Corporation (Qatar)",
      duration: "July 2022 - Present",
      location: "Doha, Qatar",
      project: "Nar'aakom Mobile Application (Backend Services)",
      responsibilities: [
        "Migrated REST APIs to GraphQL, integrated Azure Active Directory for authentication",
        "Optimized query performance with Azure Redis caching",
        "Migrated data from SQL Server to a FHIR database",
        "Developed an Open API system to allow third-party service integrations"
      ],
      technologies: ["GraphQL", "Azure AD", "Redis", "FHIR", "SQL Server"]
    },
    {
      title: "Senior Full-stack Engineer",
      company: "Quadrate Tech Solutions Private Limited",
      duration: "July 2020 - June 2022",
      location: "Colombo, Sri Lanka",
      project: "Hotel ERP (SaaS-based ERP Solution for hotels)",
      responsibilities: [
        "Developed and maintained the administration module, handling user authentication, authorization, and configuration of modules",
        "Deployed a mail service and SMS gateway using Azure Functions and Logic Apps",
        "Increased system scalability by synchronizing legacy data from SQL Server to Cosmos Database",
        "Developed user interfaces using Angular and integrated microservices",
        "Implemented CI/CD pipelines using Azure DevOps"
      ],
      technologies: ["Angular", "Azure Functions", "Cosmos DB", "Service Bus", "RabbitMQ", "SQL Server 2022", "Azure DevOps"]
    },
    {
      title: "Dot NET Engineer",
      company: "Voigue Private Limited",
      duration: "Nov 2019 - June 2020",
      location: "Colombo, Sri Lanka",
      project: "SmartPABX - Cloud-Based Phone System",
      responsibilities: [
        "Developed Backend API with .NET Core",
        "Updated the existing PABX legacy system to the latest version",
        "User interface optimized by converting WinForms to WPF",
        "Enabled Dynamic User interface functions"
      ],
      technologies: [".NET Core 2.1", "AsterNET", "WPF", "C#", "REST API", "XAML", "PABX Asterisk", "MariaDB"]
    },
    {
      title: "Associate Full Stack-Engineer",
      company: "Virtusa Private Limited",
      duration: "Jan 2019 - October 2019",
      location: "Colombo, Sri Lanka",
      project: "McDonald's - Workforce Operations Labor Forecasting System",
      responsibilities: [
        "Developed a web application to forecast labour requirements based on sales data",
        "Implementation of new features, optimizations, bug prioritizing and fixing",
        "Maintained 10/10 client scorecards from project inception till production"
      ],
      technologies: ["Angular 6", "Bootstrap 4.2", ".NET Core 2.0", "Web API", "EF Core 2.0", "AutoMapper", "SQL Server 2017", "Azure Web Jobs"]
    },
    {
      title: "Software Developer",
      company: "Nemico Holdings",
      duration: "Jan 2016 - Dec 2018",
      location: "Colombo, Sri Lanka",
      project: "Inventory Management System for fashion retailers",
      responsibilities: [
        "POS integration for inventory database updates",
        "Implemented cloud-based enterprise inventory management in ASP.NET (4.8)",
        "Migrated reporting system from Crystal Reports to iTextSharp"
      ],
      technologies: ["C#.NET", "ASP.NET 4.8", "SQL Server 2012", "Crystal Reports", "iTextSharp"]
    },
    {
      title: "Backend Developer",
      company: "Olayan (Saudi Arabia)",
      duration: "June 2012 - July 2015",
      location: "Riyadh, Saudi Arabia",
      responsibilities: [
        "Centralized online order-taking process",
        "Improved UX with real-time notification using SignalR",
        "Introduced PDF.js replacing Box View"
      ],
      technologies: [".NET Framework 4.0", "SignalR", "ASP.NET Web API", "SQL Server 2008 R2", "PDF.js"]
    },
    {
      title: "Junior Developer",
      company: "QTS Private Limited",
      duration: "Aug 2009 - April 2012",
      location: "Colombo, Sri Lanka",
      project: "LECO Energy - Field Report Writer/Total Maintenance Service",
      responsibilities: [
        "Developed application for field service engineers",
        "Reverse-engineered Office Info Path 2003",
        "Developed add-ons while maintaining performance",
        "Optimized team efficiency in feature implementations"
      ],
      technologies: ["C#", ".NET Framework", "InfoPath", "SQL Server"]
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
        <Summary text={resumeData.summary} />
        <TopSkills skills={resumeData.topSkills} />
        <Experience experiences={resumeData.experiences} />
        <Education education={resumeData.education} />
        <OtherQualifications qualifications={resumeData.qualifications} />
      </div>
    </div>
  );
}

export default App;
