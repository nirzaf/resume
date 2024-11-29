export const getEducationIcon = (degree: string): string => {
  const degreeType = degree.toLowerCase();
  if (degreeType.includes('master')) return 'fa-user-graduate';
  if (degreeType.includes('bachelor')) return 'fa-graduation-cap';
  if (degreeType.includes('diploma')) return 'fa-certificate';
  if (degreeType.includes('phd')) return 'fa-microscope';
  return 'fa-university';
};
