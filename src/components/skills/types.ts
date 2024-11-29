export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface SkillsProps {
  skills: SkillCategory[];
}

export interface SkillCategoryCardProps extends SkillCategory {}

export interface SkillTagProps {
  skill: string;
}

export interface SkillGridProps {
  skills: SkillCategory[];
}
