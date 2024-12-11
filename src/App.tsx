// src/App.tsx
import React from 'react';
import MainLayout from './components/layout/MainLayout';
import Header from './components/Header';
import Summary from './components/Summary';
import TopSkills from './components/TopSkills';
import Experience from './components/Experience';
import Education from './components/Education';
import OtherQualifications from './components/OtherQualifications';
import { resumeData } from './data/resumeData';

const App: React.FC = () => {
  return (
    <MainLayout>
      <Header {...resumeData.header} />
      <Summary 
        professionalOverview={resumeData.summary.professionalOverview}
        coreExpertise={resumeData.summary.coreExpertise}
      />
      <TopSkills skills={resumeData.topSkills} />
      <Experience experiences={resumeData.experiences} />
      <Education education={resumeData.education} />
      <OtherQualifications qualifications={resumeData.qualifications} />
    </MainLayout>
  );
};

export default App;