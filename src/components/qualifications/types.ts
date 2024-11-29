export interface Qualification {
  title: string;
  issuer: string;
  date: string;
  description?: string;
  score?: string;
}

export interface QualificationsProps {
  qualifications: Qualification[];
}

export interface QualificationCardProps extends Qualification {
  index: number;
}

export interface QualificationHeaderProps {
  title: string;
  issuer: string;
}

export interface QualificationDetailsProps {
  date: string;
  score?: string;
  description: string;
}
