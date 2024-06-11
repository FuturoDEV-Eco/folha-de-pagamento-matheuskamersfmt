import PDFDocument from 'pdfkit';
import fs from 'fs';

function generatePdf(name, cpf, month, grossSalary, inssTax, incomeTax, netSalary, otherDiscounts = 0) {
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(`./folha_pagamento_${name}_mes${month}.pdf`));
    doc.fontSize(12);

    doc.text('--- Folha de Pagamento ---');
    doc.text(`Data de Geração: ${new Date().toLocaleDateString()}`);
    doc.text(`Nome: ${name}`);
    doc.text(`CPF: ${cpf}`);
    doc.text(`--- ---`);
    doc.text(`Salário Bruto: R$ ${grossSalary}`);
    doc.text(`--- ---`);
    doc.text(`INSS: R$ ${inssTax}`);
    doc.text(`Imposto de Renda: R$ ${incomeTax}`);
    doc.text(`Outros descontos: R$ ${otherDiscounts}`);
    doc.text(`--- ---`);
    doc.text(`Salário Líquido: R$ ${netSalary}`);
    doc.end();
}

export default generatePdf;