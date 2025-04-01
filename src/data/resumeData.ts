import { ResumeData } from '../types/resume';
import { headerData } from './sections/header';
import { summaryData } from './sections/summary';
import { coreCompetencies } from './sections/skills';
import { experienceData } from './sections/experiences';
import { educationData } from './sections/education';
import { qualificationsData } from './sections/qualifications';
import { freelanceData } from './sections/freelance';
import { aiDomainsData } from './sections/aiDomains';

export const resumeData: ResumeData = {
  header: headerData,
  summary: summaryData,
  coreCompetencies,
  freelance: freelanceData,
  aiDomains: aiDomainsData,
  experiences: experienceData,
  education: educationData,
  qualifications: qualificationsData
};