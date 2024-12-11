import { ResumeData } from '../types/resume';
import { headerData } from './sections/header';
import { summaryData } from './sections/summary';
import { topSkills } from './sections/skills';
import { experienceData } from './sections/experiences';
import { educationData } from './sections/education';

export const resumeData: ResumeData = {
  header: headerData,
  summary: summaryData,
  topSkills,
  experiences: experienceData,
  education: educationData
};