export interface WorkExperience {
  title: string;
  company: string;
  location: string;
  duration: string;
  description?: string;
  responsibilities?: string[];
  achievements?: string[];
  technologies?: string[];
  teamSize?: number;
  projectCount?: number;
}

export interface ExperienceProps {
  experiences: WorkExperience[];
} 