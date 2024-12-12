import { FC } from 'react';
import { pdfGenerator } from '../../utils/pdfGenerator';
import { resumeData } from '../../data/resumeData';

export const DownloadButton: FC = () => {
  const handleDownload = async () => {
    try {
      console.log('Starting PDF generation...');
      
      // Get the PDF data
      const pdfData = await pdfGenerator.getPDF(resumeData);
      
      // Create a blob from the PDF data
      const blob = new Blob([pdfData], { type: 'application/pdf' });
      
      // Create a download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${resumeData.header.name.replace(/\s+/g, '_')}_Resume.pdf`;
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up
      window.URL.revokeObjectURL(url);
      
      console.log('PDF download completed');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="absolute top-4 right-4 z-20 p-3 bg-[#0607E1] text-white rounded-full hover:bg-[#0506c4] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 group"
      title="Download Resume PDF"
    >
      <svg
        className="w-6 h-6 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
    </button>
  );
};
