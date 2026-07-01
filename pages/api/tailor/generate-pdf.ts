import { NextApiRequest, NextApiResponse } from 'next';
import PDFDocument from 'pdfkit';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { tailoredSummary, highlightedSkills, matchedProjects, matchedCertifications } = req.body;

  try {
    const doc = new PDFDocument({
      size: 'A4',
      margin: 40,
      bufferPages: true,
    });

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="Md_Ghazanfar_Alam_Tailored_Resume.pdf"');

    doc.pipe(res);

    // Color Palette
    const primaryColor = '#10B981'; // Emerald Green
    const secondaryColor = '#06B6D4'; // Cyan
    const darkColor = '#0F172A'; // Dark slate
    const grayColor = '#475569'; // Slate gray

    // Header
    doc.fillColor(darkColor).font('Helvetica-Bold').fontSize(22).text('MD GHAZANFAR ALAM', { align: 'center' });
    doc.fillColor(primaryColor).font('Helvetica-Bold').fontSize(11).text('Associate Engineer - Emerging Technologies', { align: 'center' });
    doc.moveDown(0.2);
    
    // Contact Info
    doc.fillColor(grayColor).font('Helvetica').fontSize(8.5).text(
      'Email: ghazanfaralam642786@gmail.com   |   LinkedIn: linkedin.com/in/mdghazanfar   |   GitHub: github.com/mdghazanfar',
      { align: 'center' }
    );
    doc.moveDown(0.6);

    // Helper to draw section header
    const drawSectionHeader = (title: string) => {
      doc.moveDown(0.5);
      doc.fillColor(primaryColor).font('Helvetica-Bold').fontSize(11).text(title.toUpperCase());
      // Draw a line below the title
      const y = doc.y + 1;
      doc.strokeColor('#E2E8F0').lineWidth(0.75).moveTo(40, y).lineTo(555, y).stroke();
      doc.moveDown(0.4);
    };

    // Summary Section
    if (tailoredSummary) {
      drawSectionHeader('Professional Summary');
      doc.fillColor(darkColor).font('Helvetica').fontSize(9.5).text(tailoredSummary, { align: 'justify', lineGap: 3 });
      doc.moveDown(0.5);
    }

    // Skills Section
    if (highlightedSkills && highlightedSkills.length > 0) {
      drawSectionHeader('Highlighted Skills');
      doc.fillColor(darkColor).font('Helvetica-Bold').fontSize(9.5).text('Technologies: ', { continued: true });
      doc.font('Helvetica').text(highlightedSkills.join(', '));
      doc.moveDown(0.5);
    }

    // Projects Section
    if (matchedProjects && matchedProjects.length > 0) {
      drawSectionHeader('Relevant Projects');
      matchedProjects.forEach((proj: any, idx: number) => {
        // Project Title & Role
        doc.fillColor(darkColor).font('Helvetica-Bold').fontSize(10).text(proj.title, { continued: true });
        doc.fillColor(grayColor).font('Helvetica').fontSize(9).text(`  -  ${proj.role}`, { align: 'left' });
        
        // Tech Stack
        if (proj.tech) {
          doc.fillColor(secondaryColor).font('Helvetica-Oblique').fontSize(8.5).text(`Technologies: ${proj.tech}`);
        }
        doc.moveDown(0.15);

        // Bullet points
        if (proj.highlights && proj.highlights.length > 0) {
          proj.highlights.forEach((bullet: string) => {
            doc.fillColor(darkColor).font('Helvetica').fontSize(9).text(`•  ${bullet}`, {
              indent: 12,
              paragraphGap: 2,
              align: 'justify'
            });
          });
        }
        
        doc.moveDown(0.4);
      });
    }

    // Certifications Section
    if (matchedCertifications && matchedCertifications.length > 0) {
      drawSectionHeader('Highlighted Certifications');
      matchedCertifications.forEach((cert: string) => {
        doc.fillColor(darkColor).font('Helvetica').fontSize(9).text(`•  ${cert}`, {
          indent: 12,
          paragraphGap: 2
        });
      });
    }

    doc.end();
  } catch (err: any) {
    console.error('PDF Generation error:', err);
    if (!res.headersSent) {
      return res.status(500).json({ error: 'Failed to generate tailored PDF.' });
    }
  }
}
