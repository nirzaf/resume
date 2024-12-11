import React from 'react';
import { SummarySection as SummarySectionType } from '../../types/resume';

interface Props extends SummarySectionType {
  title: string;
}

const SummarySection: React.FC<Props> = React.memo(({ title, text, highlights }) => {
  return (
    <div className="summary-section">
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="highlights">
        {highlights.map((highlight, index) => (
          <div key={index} className="highlight">
            <i className={`fas ${highlight.icon}`}></i>
            <span>{highlight.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
});

SummarySection.displayName = 'SummarySection';

export default SummarySection;
