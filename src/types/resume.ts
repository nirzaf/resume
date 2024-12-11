export interface Contact {
  email: string;
  mobile: string;
  location: string;
  linkedin: string;
  github: string;
  portfolio: string;
}

export interface HeaderData {
  name: string;
  title: string;
  profileImage: string;
  contact: Contact;
}

export interface Highlight {
  icon: string;
  text: string;
}

export interface SummarySection {
  text: string;
  highlights: Highlight[];
}

export interface SummaryData {
  professionalOverview: SummarySection;
  coreExpertise: SummarySection;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  teamSize: number;
  projectCount: number;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  description: string;
  courses: string[];
}

export interface ResumeData {
  header: HeaderData;
  summary: SummaryData;
  topSkills: string[];
  experiences: Experience[];
  education: Education[];
}
