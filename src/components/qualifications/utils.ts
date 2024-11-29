import { Qualification } from './types';

export const getQualificationIcon = (title: string): string => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('aws')) return 'fa-aws';
  if (lowerTitle.includes('google')) return 'fa-google';
  if (lowerTitle.includes('azure')) return 'fa-microsoft';
  if (lowerTitle.includes('scrum') || lowerTitle.includes('agile')) return 'fa-users-cog';
  if (lowerTitle.includes('pmp') || lowerTitle.includes('project')) return 'fa-tasks';
  if (lowerTitle.includes('security')) return 'fa-shield-alt';
  if (lowerTitle.includes('data')) return 'fa-database';
  if (lowerTitle.includes('web')) return 'fa-globe';
  return 'fa-certificate';
};

export const getEnhancedDescription = (qual: Qualification): string => {
  if (qual.description) return qual.description;
  
  const defaultDescriptions: { [key: string]: string } = {
    'AWS Certified Solutions Architect': 'Demonstrated expertise in designing distributed systems and implementing AWS solutions. Proficient in architecting secure and scalable applications using AWS services including EC2, S3, RDS, and Lambda.',
    'Google Cloud Professional': 'Mastery in cloud architecture and implementing Google Cloud solutions. Skilled in designing, developing, and managing applications with a focus on security and scalability.',
    'Microsoft Azure Expert': 'Advanced knowledge in cloud services and Azure architecture. Experienced in implementing enterprise-level solutions using Azure\'s comprehensive suite of services.',
    'Certified Scrum Master': 'Expert in Agile methodologies and Scrum framework implementation. Skilled in facilitating team ceremonies and promoting Agile best practices across development teams.',
    'PMP Certification': 'Comprehensive project management expertise with proven track record in delivering complex technical projects. Proficient in risk management, stakeholder communication, and resource allocation.',
  };

  return defaultDescriptions[qual.title] || 'Demonstrated expertise and proficiency in the field.';
};
