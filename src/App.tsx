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
      title: "Intern Developer",
      company: "Sri Lanka Telecom",
      location: "Sri Lanka",
      duration: "September 2008 – July 2009",
      description: "Contributed to the development and testing of telecom management systems.",
      teamSize: 2,
      projectCount: 1,
      icon: "fa-phone-square",
      responsibilities: [
        "Developed and tested features for telecom management system using C# and ASP.NET",
        "Worked on customer billing management module",
        "Created reusable components for Windows Forms applications",
        "Performed unit testing and debugging to improve system stability"
      ],
      achievements: [
        "Enhanced customer billing module with new features",
        "Improved system reliability through rigorous testing"
      ],
      technologies: [
        "C#",
        "ASP.NET",
        "WinForms",
        "Microsoft SQL Server"
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
