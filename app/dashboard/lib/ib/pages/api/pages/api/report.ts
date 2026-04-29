import { PDFDocument, StandardFonts } from "pdf-lib";

export default async function handler(req, res) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  page.drawText("SmartComp AI Report", { x: 50, y: 700, size: 20, font });
  page.drawText(Salary: ${req.query.salary}, { x: 50, y: 650, size: 14, font });

  const pdfBytes = await pdfDoc.save();

  res.setHeader("Content-Type", "application/pdf");
  res.send(Buffer.from(pdfBytes));
