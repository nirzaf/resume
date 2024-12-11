import Header from './components/Header';
import Summary from './components/Summary';
import TopSkills from './components/TopSkills';
import Experience from './components/Experience';
import Education from './components/Education';
import OtherQualifications from './components/OtherQualifications';
import profileImage from './assets/profile.jpg';
import { experienceData } from './data/sections/experiences';

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
  experiences: experienceData,
  education: [
    {
      degree: "MSc in Software Engineering",
      institution: "Kingston University",
      location: "London, United Kingdom",
      description: "Advanced study in software engineering principles, focusing on enterprise software architecture and cloud computing.",
      major: "Software Engineering",
      gpa: "Distinction",
      achievements: [
        "Specialized in Cloud Computing and Distributed Systems",
        "Research focus on Microservices Architecture",
        "Advanced Software Design Patterns",
        "Enterprise Application Development"
      ],
      honors: [
        "Academic Excellence Award",
        "Research Publication in Software Architecture"
      ]
    },
    {
      degree: "BE in Software Engineering",
      institution: "London Metropolitan University",
      location: "London, United Kingdom",
      description: "Comprehensive study of software engineering fundamentals with emphasis on practical application development.",
      major: "Software Engineering",
      gpa: "First Class Honours",
      achievements: [
        "Full Stack Development",
        "Database Management Systems",
        "Software Testing and Quality Assurance",
        "Agile Development Methodologies"
      ],
      honors: [
        "Dean's List for Academic Excellence",
        "Best Final Year Project Award"
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
