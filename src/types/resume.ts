import { Competency } from '../components/skills/CoreCompetencies';

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
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
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

export interface ResumeData {
  header: HeaderData;
  summary: SummaryData;
  coreCompetencies: Competency[];
  experiences: Experience[];
  education: Education[];
  qualifications: Qualification[];
}
