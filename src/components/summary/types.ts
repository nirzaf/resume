export interface Highlight {
  icon: string;
  text: string;
}

export interface SummarySection {
  text: string;
  highlights: Highlight[];
}

export interface SummaryProps {
  professionalOverview: SummarySection;
  coreExpertise: SummarySection;
}

export interface SectionCardProps {
  title: string;
  icon: string;
  gradientFrom: string;
  gradientTo: string;
  darkGradientFrom: string;
  darkGradientTo: string;
  borderColor: string;
  darkBorderColor: string;
  iconGradientFrom: string;
  iconGradientTo: string;
  decorationColor: string;
  section: SummarySection;
  highlightClassName: string;
  highlightIconClassName: string;
}
