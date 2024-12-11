import { FC } from 'react';
import { SummaryProps } from '../../types/resume';
import { SummarySection } from './SummarySection';

const Summary: FC<SummaryProps> = ({ professionalOverview, coreExpertise }) => {
  return (
    <section className="summary">
      <SummarySection
        title="Professional Overview"
        section={professionalOverview}
      />
      <SummarySection
        title="Core Expertise"
        section={coreExpertise}
      />
    </section>
  );
};

Summary.displayName = 'Summary';

export default Summary;
