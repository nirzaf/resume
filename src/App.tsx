// src/App.tsx
import React from 'react';
import MainLayout from './components/layout/MainLayout';
import Header from './components/Header';
import Summary from './components/Summary';
import { CoreCompetencies } from './components/skills/CoreCompetencies';
import { Experience } from './components/Experience';
import Education from './components/Education';
import OtherQualifications from './components/OtherQualifications';
import FreelanceExpertise from './components/FreelanceExpertise';
import { resumeData } from './data/resumeData';
import { freelanceData } from './data/freelanceData';

const App: React.FC = () => {
  return (
    <MainLayout>
      <Header {...resumeData.header} />
      <Summary 
        professionalOverview={resumeData.summary.professionalOverview}
        coreExpertise={resumeData.summary.coreExpertise}
      />
      <FreelanceExpertise freelanceData={freelanceData} />
      <CoreCompetencies competencies={resumeData.coreCompetencies} />
      <Experience experiences={resumeData.experiences} />
      <Education education={resumeData.education} />
      <OtherQualifications qualifications={resumeData.qualifications} />
    </MainLayout>
  );
};

export default App;