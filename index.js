var express = require('express'),
    app = express(),
    PDFDocument = require ('pdfkit'),
    doc = new PDFDocument,
    port = process.env.PORT || 1313;

const fs = require('fs');

//Head Details
doc.fontSize(14);
doc.text('Kumar Shashwat',{
    width: 410,
    align: 'center'});

doc.fontSize(14);
doc.fillColor('blue').text('allblue.shasha@gmail.com', {
    link: 'mailto:allblue.shasha@gmail.com',
    width: 410,
    underline: true,
    align: 'center'});

doc.fillColor('black').text('+91-7599243144', {
    width: 410,
    align: 'center'});
    
doc.moveDown(1.5);

//Education Details
// A loop will be followed with the number of entries getting added up into the given list.
doc.text('Education');
// Degree, Year, College, Grade
doc.fontSize(10);
doc.text('Bachelor\'s in Technology, Computer Science and Engineering', {underline: true, continued: true});
doc.text('2015-2019', {align: 'right', underline: false});
doc.text('National Institute of Technology, Hamirpur');
doc.text('Grade: 8.11/10');

doc.moveDown(1.0);
doc.text('Class 12 - Physics, Chemistry and Maths', {underline: true, continued: true});
doc.text('2013-2015', {align: 'right', underline: false});
doc.text('Jaipuria School, Ghaziabad');
doc.text('Grade: 94/100',);

//Honors
doc.moveDown(1.5);
//Name of the honor, Year, Description
doc.fontSize(14).text('Honors');
doc.fontSize(10);
doc.text("Head Boy of Jaipuria School", {underline: true, continued: true});
doc.text('2015', {align: 'right', underline: false});
doc.text('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', {align: 'justify'});

//Experience
// Name of the Org, Position, time of service and description
doc.moveDown(1.5);
doc.fontSize(14).text('Experience');
doc.fontSize(10).text("Google", {underline: true, continued: true});
doc.text('05/2015 - 08/2015', {align: 'right', underline: false});
doc.text('Google Summer of Code student at Amahi');
doc.text('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', {align: 'justify'});

doc.moveDown(0.5);
doc.fontSize(10).text("Google", {underline: true, continued: true});
doc.text('05/2015 - 08/2015', {align: 'right', underline: false});
doc.text('Google Summer of Code student at Amahi');
doc.text('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', {align: 'justify'});

doc.moveDown(0.5);
doc.fontSize(10).text("Google", {underline: true, continued: true});
doc.text('05/2015 - 08/2015', {align: 'right', underline: false});
doc.text('Google Summer of Code student at Amahi');
doc.text('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', {align: 'justify'});

// SKILLS
// Skill
doc.moveDown(1.5);
doc.fontSize(14).text('Skills', {underline: true});
doc.fontSize(10);
doc.text('Java', {align: 'left', continued: true});
doc.text('Android', {align: 'center', continued: true});
doc.text('Web development', {align: 'right'});
doc.moveDown(0.5);
doc.text('JavaScript', {align: 'left', continued: true});
doc.text('Microsoft Office', {align: 'center', continued: true});
doc.text('SQL', {align: 'right'});
doc.moveDown(0.5);
doc.text('C plus plus', {align: 'left', continued: true});
doc.text('Machine Learning', {align: 'center', continued: true});
doc.text('Python', {align: 'right'});

// PROJECT
// Name, date, description and link
doc.moveDown(1.5);
doc.fontSize(14).text('Projects')
doc.fontSize(10).text('Sunshine', {underline: true, continued: true});
doc.text('06/2017 - 07/2017', {underline: false, align: 'right'});
doc.fillColor('blue').text('https://github.com/octacode/sunshine', {underline: true, link: 'https://github.com/octacode/Sunshine'});
doc.fillColor('black').text('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', {align: 'justify'});

doc.moveDown(0.5);
doc.text('Moviebuzz', {underline: true, continued: true});
doc.text('07/2017 - 09/2017', {underline: false, align: 'right'});
doc.fillColor('blue').text('https://github.com/octacode/Moviezz', {underline: true, link: 'https://github.com/octacode/Moviezz'});
doc.fillColor('black').text('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', {align: 'justify'});

//PROFILE LINKS
doc.moveDown(3)
doc.fontSize(14).text("Profile", {align:'center'});
doc.moveDown(0.5);
doc.fontSize(10).fillColor('blue').text('GitHub: https://github.com/octacode', {align:'center', underline: true, link: 'https://github.com/octacode'});
doc.moveDown(0.5);
doc.text('LinkedIn: https://google.com', {align:'center', underline: true, link: 'https://github.com/octacode'});
doc.moveDown(0.5);
doc.text('Twitter: https://google.com', {align:'center', underline: true, link: 'https://github.com/octacode'});
doc.moveDown(0.5);
doc.text('Facebook: https://google.com', {align:'center', underline: true, link: 'https://github.com/octacode'});

doc.pipe(fs.createWriteStream('testing.pdf'));

doc.end();

/*app.listen(port, function(){
    console.log('Server sunn rha hai...'+port)
});
*/
