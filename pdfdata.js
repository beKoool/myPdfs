const fs = require('fs');
const path = require('path');
const pdfDir = './pdfs';

const pdfData = [];

fs.readdirSync(pdfDir).forEach(file => {
    if (file.endsWith('.pdf')) {
        const fileName = file.replace('.pdf', ''); // Remove the ".pdf" extension
        const [grade, subject, desc] = fileName.split('_'); // Split the filename by underscores

        const title = {
            grade,
            subject,
            desc
        };
        const link = `pdfs/${file}`;
        pdfData.push({ title, link });
    }
});

const jsonData = JSON.stringify(pdfData, null, 2);
fs.writeFileSync('pdfData.json', jsonData);
