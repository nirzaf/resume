import { FC } from 'react';

interface SummaryProps {
  text: string;
}

const Summary: FC<SummaryProps> = ({ text }) => {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-3 text-blue-600">Summary</h2>
      <div className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
        {text}
      </div>
    </section>
  );
};

export default Summary;
