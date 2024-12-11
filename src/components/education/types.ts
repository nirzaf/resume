export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  description?: string;
  achievements?: string[];
  gpa?: string;
  major?: string;
  minor?: string;
  honors?: string[];
}

export interface EducationProps {
  education: EducationItem[];
}

export interface EducationCardProps extends EducationItem {
  index: number;
}

export interface SectionTitleProps {
  title: string;
}

export interface EducationGridProps {
  education: EducationItem[];
}
