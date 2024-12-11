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
  contact: Contact;
  profileImage: string;
}

export interface Highlight {
  icon: string;
  text: string;
}

export interface SummarySection {
  description: string;
  highlights: string[];
}

export interface SummaryData {
  professionalOverview: SummarySection;
  coreExpertise: SummarySection;
}

export interface SummaryProps {
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
  description: string;
  major?: string;
  gpa?: string;
  achievements?: string[];
  honors?: string[];
  icon?: string;
}

export interface Qualification {
  title: string;
  issuer: string;
  date: string;
  description?: string;
  score?: string;
}

export interface CoreCompetency {
  name: string;
  description: string;
  icon: string;
}

export interface ResumeData {
  header: HeaderData;
  summary: SummaryData;
  coreCompetencies: CoreCompetency[];
  experiences: Experience[];
  education: Education[];
  qualifications: Qualification[];
}
