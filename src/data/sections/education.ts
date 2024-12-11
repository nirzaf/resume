import { Education } from '../../types/resume';

export const educationData: Education[] = [
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
    ],
    icon: "fa-graduation-cap"
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
    ],
    icon: "fa-graduation-cap"
  }
];
