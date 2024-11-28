import { FC } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface SummaryProps {
  text: string;
}

const Summary: FC<SummaryProps> = ({ text }) => {
  const { elementRef, isVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: '-50px',
  });

  // Split text into sections for two columns
  const sections = splitIntoSections(text);

  return (
    <section className="mb-8">
      <div
        ref={elementRef}
        className={`transform transition-all duration-700 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Professional Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="card p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <i className={`fas ${getSectionIcon(index)} text-2xl text-blue-500 dark:text-blue-300`}></i>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                    {getSectionTitle(index)}
                  </h3>
                  <div className="prose prose-sm dark:prose-invert">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                      {section}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper functions for enhanced content
const splitIntoSections = (text: string): string[] => {
  const paragraphs = text.split('\n\n').filter(p => p.trim());
  
  // If we have exactly two paragraphs, use them as is
  if (paragraphs.length === 2) return paragraphs;
  
  // If we have one paragraph, split it roughly in half at a sentence boundary
  if (paragraphs.length === 1) {
    const sentences = paragraphs[0].match(/[^.!?]+[.!?]+/g) || [];
    const midPoint = Math.ceil(sentences.length / 2);
    return [
      sentences.slice(0, midPoint).join(' '),
      sentences.slice(midPoint).join(' ')
    ];
  }
  
  // If we have more paragraphs, combine them into two balanced sections
  const midPoint = Math.ceil(paragraphs.length / 2);
  return [
    paragraphs.slice(0, midPoint).join('\n\n'),
    paragraphs.slice(midPoint).join('\n\n')
  ];
};

const getSectionTitle = (index: number): string => {
  const titles = [
    'Professional Overview',
    'Core Expertise'
  ];
  return titles[index] || 'Additional Information';
};

const getSectionIcon = (index: number): string => {
  const icons = [
    'fa-user-tie',
    'fa-star'
  ];
  return icons[index] || 'fa-info-circle';
};

export default Summary;
