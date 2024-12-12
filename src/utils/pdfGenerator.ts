import { jsPDF } from 'jspdf';
import { ResumeData } from '../types/resume';

class PDFGenerator {
  private static instance: PDFGenerator;
  private cachedPDF: Uint8Array | null = null;

  private constructor() {}

  static getInstance(): PDFGenerator {
    if (!PDFGenerator.instance) {
      PDFGenerator.instance = new PDFGenerator();
    }
    return PDFGenerator.instance;
  }

  private generatePDF(data: ResumeData): Uint8Array {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    // Set initial position
    let y = 20;
    const margin = 20;
    const pageWidth = doc.internal.pageSize.width;
    const contentWidth = pageWidth - 2 * margin;

    // Helper function to add text and return the new Y position
    const addText = (text: string, fontSize: number, isBold: boolean = false, indent: number = 0): number => {
      doc.setFontSize(fontSize);
      doc.setFont('helvetica', isBold ? 'bold' : 'normal');
      
      const lines = doc.splitTextToSize(text, contentWidth - indent);
      doc.text(lines, margin + indent, y);
      return y + (lines.length * fontSize * 0.3527777778);
    };

    // Header
    y = addText(data.header.name, 24, true);
    y = addText(data.header.title, 16) + 5;

    // Contact Information
    Object.entries(data.header.contact).forEach(([key, value]) => {
      y = addText(`${key}: ${value}`, 10) + 1;
    });
    y += 5;

    // Professional Summary
    y = addText('Professional Summary', 16, true) + 2;
    y = addText(data.summary.professionalOverview.description, 10) + 5;

    if (data.summary.professionalOverview.highlights.length > 0) {
      y = addText('Key Highlights:', 12, true) + 2;
      data.summary.professionalOverview.highlights.forEach(highlight => {
        y = addText(`• ${highlight}`, 10, false, 5) + 2;
      });
    }
    y += 5;

    // Core Competencies
    y = addText('Core Competencies', 16, true) + 2;
    data.coreCompetencies.forEach(comp => {
      y = addText(comp.name, 12, true) + 1;
      if (comp.description) {
        y = addText(comp.description, 10) + 1;
      }
      if (comp.keywords) {
        y = addText(comp.keywords.join(', '), 10) + 2;
      }
    });
    y += 5;

    // Check if we need a new page
    if (y > doc.internal.pageSize.height - 50) {
      doc.addPage();
      y = 20;
    }

    // Experience
    y = addText('Professional Experience', 16, true) + 2;
    data.experiences.forEach(exp => {
      y = addText(exp.company, 12, true) + 1;
      y = addText(`${exp.position} | ${exp.location} | ${exp.startDate} - ${exp.endDate}`, 10, true) + 2;
      
      if (exp.description) {
        y = addText(exp.description, 10) + 2;
      }

      if (exp.achievements) {
        exp.achievements.forEach(achievement => {
          y = addText(`• ${achievement}`, 10, false, 5) + 2;
        });
      }
      y += 3;

      // Check if we need a new page
      if (y > doc.internal.pageSize.height - 50) {
        doc.addPage();
        y = 20;
      }
    });

    // Education
    y = addText('Education', 16, true) + 2;
    data.education.forEach(edu => {
      y = addText(edu.institution, 12, true) + 1;
      y = addText(`${edu.degree}${edu.major ? ` in ${edu.major}` : ''} | ${edu.location}`, 10) + 2;
      
      if (edu.description) {
        y = addText(edu.description, 10) + 2;
      }

      if (edu.achievements) {
        edu.achievements.forEach(achievement => {
          y = addText(`• ${achievement}`, 10, false, 5) + 2;
        });
      }
      y += 3;
    });

    // Qualifications (if they exist and fit on the page)
    if (data.qualifications.length > 0) {
      if (y > doc.internal.pageSize.height - 50) {
        doc.addPage();
        y = 20;
      }

      y = addText('Additional Qualifications', 16, true) + 2;
      data.qualifications.forEach(qual => {
        y = addText(qual.title, 12, true) + 1;
        y = addText(`${qual.issuer} | ${qual.date}`, 10) + 1;
        if (qual.description) {
          y = addText(qual.description, 10) + 2;
        }
        y += 2;
      });
    }

    return new Uint8Array(doc.output('arraybuffer'));
  }

  getPDF(data: ResumeData): Uint8Array {
    if (!this.cachedPDF) {
      this.cachedPDF = this.generatePDF(data);
    }
    return this.cachedPDF;
  }

  clearCache() {
    this.cachedPDF = null;
  }
}

export const pdfGenerator = PDFGenerator.getInstance();
