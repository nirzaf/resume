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
  icon?: string;
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
  icon?: string;
  courses?: string[];
}

export interface Qualification {
  title: string;
  issuer: string;
  date: string;
  description?: string;
  score?: string;
}

export interface ResumeData {
  header: HeaderData;
  summary: SummaryData;
  topSkills: string[];
  experiences: Experience[];
  education: Education[];
  qualifications: Qualification[];
}
