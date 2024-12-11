import { ResumeData } from '../types/resume';
import profileImage from '../assets/profile.jpg';

export const resumeData: ResumeData = {
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
  experiences: [/* ... your existing experiences array ... */],
  education: [/* ... your existing education array ... */]
};
