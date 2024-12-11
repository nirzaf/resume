import React from 'react';
import { ResumeData } from '../../types/resume';
import Header from '../Header';
import Summary from '../Summary';
import TopSkills from '../TopSkills';
import Experience from '../Experience';
import Education from '../Education';
import OtherQualifications from '../OtherQualifications';

interface MainLayoutProps {
  data: ResumeData;
}

const MainLayout: React.FC<MainLayoutProps> = React.memo(({ data }) => {
  const { header, summary, topSkills, experiences, education } = data;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        <Header {...header} />
        <Summary {...summary} />
        <TopSkills skills={topSkills} />
        <Experience experiences={experiences} />
        <Education education={education} />
        <OtherQualifications />
      </div>
    </div>
  );
});

MainLayout.displayName = 'MainLayout';

export default MainLayout;
