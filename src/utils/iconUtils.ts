export const getCompanyIcon = (company: string): string => {
  const companyLower = company.toLowerCase();
  if (companyLower.includes('microsoft')) return 'fa-microsoft';
  if (companyLower.includes('google')) return 'fa-google';
  if (companyLower.includes('amazon')) return 'fa-aws';
  if (companyLower.includes('apple')) return 'fa-apple';
  if (companyLower.includes('facebook')) return 'fa-facebook';
  if (companyLower.includes('twitter')) return 'fa-twitter';
  if (companyLower.includes('linkedin')) return 'fa-linkedin';
  if (companyLower.includes('github')) return 'fa-github';
  return 'fa-building';
}; 