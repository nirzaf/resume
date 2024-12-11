import React from 'react';
import { SummaryData } from '../../types/resume';
import SummarySection from './SummarySection';

const Summary: React.FC<SummaryData> = React.memo(({ professionalOverview, coreExpertise }) => {
  return (
    <section className="summary">
      <SummarySection
        title="Professional Overview"
        {...professionalOverview}
      />
      <SummarySection
        title="Core Expertise"
        {...coreExpertise}
      />
    </section>
  );
});

Summary.displayName = 'Summary';

export default Summary;
