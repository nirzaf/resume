export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies?: string[];
}

export interface WorkExperienceProps {
  experiences: Experience[];
}

export interface ExperienceItemProps extends Experience {
  index: number;
}
