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
      className="absolute top-4 right-4 z-20 px-4 py-2 bg-[#0607E1] text-white rounded-lg hover:bg-[#0506c4] transition-colors duration-200 flex items-center gap-2 shadow-lg"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      Download PDF
    </button>
  );
};
