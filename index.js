var express = require('express'),
    app = express(),
    PDFDocument = require ('pdfkit'),
    doc = new PDFDocument,
    port = process.env.PORT || 1313;

const path = require('path'),
      fs = require('fs');

// Add content here

doc.pipe(fs.createWriteStream('testing.pdf'));

doc.end();

app.listen(port, function(){
    console.log('Server sunn rha hai...'+port)
});
