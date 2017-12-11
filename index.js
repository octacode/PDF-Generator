var express = require('express'),
    app = express(),
    PDFDocument = require ('pdfkit'),
    doc = new PDFDocument,
    port = process.env.PORT || 1313;

const fs = require('fs');

//Head Details
doc.text('Kumar Shashwat');
doc.moveDown(0.5);
doc.text('allblue.shasha@gmail.com');
doc.moveDown(0.5);
doc.text('+91-7599243144');
doc.moveDown(0.5);


//Education Details
// A loop will be followed with the number of entries getting added up into the given list.
doc.text('Education');
doc.moveDown(0.5);
doc.text('Bachelor\'s in Technology, Computer Science and Engineering');
doc.moveDown(0.1);
doc.text('National Institute of Technology, Hamirpur');
doc.text('Grade: 8.11/10'+'year: 2015-2019');
doc.moveDown(0.2);
doc.text('Class 12 - Physics, Chemistry and Maths');
doc.moveDown(0.1);
doc.text('Jaipuria School, Ghaziabad');
doc.text('Grade: 94/100'+'year: 2013');

doc.moveDown(1.5);
doc.text('Experience');
doc.moveDown(0.5);
doc.text('Google Summer of Code student at Amahi');
doc.text('05/2015-08/2015')
//A loop will be followed with adding the points in it.
doc.moveDown(0.1);
doc.text('-> Built an android app from scratch.');
doc.moveDown(0.1);
doc.text('-> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

doc.pipe(fs.createWriteStream('testing.pdf'));

doc.end();

app.listen(port, function(){
    console.log('Server sunn rha hai...'+port)
});
