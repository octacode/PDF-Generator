var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    expressSanitizer = require('express-sanitizer'),
    PDFDocument = require ('pdfkit'),
    AWS = require('aws-sdk'),
    doc = new PDFDocument,
    s3 = new AWS.S3(),
    nodemailer = require('nodemailer'),
    port = process.env.PORT || 1313;

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());

const fs = require('fs');

app.get('/', (req, res)=>{
    res.render('new.ejs');
    /*
    var transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: 'internkart123@gmail.com',
          pass: 'W!qXV?*#Av7Gd&Mu'
        }
      });

      const mailOptions = {
        from: 'internkart123@gmail.com',
        to: 'allblue.shasha@gmail.com',
        subject: 'Testing it out',
        html: '<h1>Kaizoku Ou Ni Ore Wa Naru</h1>'
      };

      transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
      });
      */
});

app.post('/', (req, res)=>{

    var name = req.body.pdf.name,
        email_id = req.body.pdf.email_id,
        contact_no = req.body.pdf.contact_no,
        edu_name = req.body.pdf.edu_name,
        edu_year = req.body.pdf.edu_year,
        edu_college = req.body.pdf.edu_college,
        edu_grade = req.body.pdf.edu_grade,
        honor_name = req.body.pdf.honor_name,
        honor_year = req.body.pdf.honor_year,
        honor_desc = req.sanitize(req.body.pdf.honor_desc),
        exp_name = req.body.pdf.exp_name,
        exp_position = req.body.pdf.exp_position,
        exp_year = req.body.pdf.exp_year,
        exp_desc = req.sanitize(req.body.pdf.exp_desc),
        skills = req.body.pdf.skills,
        project_name = req.body.pdf.project_name,
        project_year = req.body.pdf.project_year,
        project_link = req.body.pdf.project_link,
        project_desc = req.sanitize(req.body.pdf.project_desc),
        linkedin = req.body.pdf.linkedin,
        github = req.body.pdf.github,
        twitter = req.body.pdf.twitter,
        facebook = req.body.pdf.facebook;


    //Head Details
    doc.fontSize(14);
    doc.text(name, {
        width: 410,
        align: 'center'});

    doc.fontSize(14);
    doc.fillColor('blue').text(email_id, {
        link: 'mailto:allblue.shasha@gmail.com',
        width: 410,
        underline: true,
        align: 'center'});

    doc.fillColor('black').text(contact_no.toString(), {
        width: 410,
        align: 'center'});

    doc.moveDown(1.5);

    //Education Details
    // A loop will be followed with the number of entries getting added up into the given list.
    doc.text('Education');
    // Degree, Year, College, Grade
    doc.fontSize(10);
    doc.text(edu_name, {underline: true, continued: true});
    doc.text(edu_year, {align: 'right', underline: false});
    doc.text(edu_college);
    doc.text('Grade: '+edu_grade);

    //Honors
    doc.moveDown(1.5);
    //Name of the honor, Year, Description
    doc.fontSize(14).text('Honors');
    doc.fontSize(10);
    doc.text(honor_name, {underline: true, continued: true});
    doc.text(honor_year, {align: 'right', underline: false});
    doc.text(honor_desc, {align: 'justify'});

    //Experience
    // Name of the Org, Position, time of service and description
    doc.moveDown(1.5);
    doc.fontSize(14).text('Experience');
    doc.fontSize(10).text(exp_name, {underline: true, continued: true});
    doc.text(exp_year, {align: 'right', underline: false});
    doc.text(exp_position);
    doc.text(exp_desc, {align: 'justify'});

    // SKILLS
    // Skill
    doc.moveDown(1.5);
    doc.fontSize(14).text('Skills', {underline: true});
    doc.fontSize(10);
    doc.text(skills, {align: 'center'});

    // PROJECT
    // Name, date, description and link
    doc.moveDown(1.5);
    doc.fontSize(14).text('Projects')
    doc.fontSize(10).text(project_name, {underline: true, continued: true});
    doc.text(project_year, {underline: false, align: 'right'});
    doc.fillColor('blue').text(project_link, {underline: true, link: project_link});
    doc.fillColor('black').text(project_desc, {align: 'justify'});

    //PROFILE LINKS
    doc.moveDown(3)
    doc.fontSize(14).text("Profile", {align:'center'});
    doc.moveDown(0.5);
    doc.fontSize(10).fillColor('blue').text('GitHub: '+github, {align:'center', underline: true, link: github});
    doc.moveDown(0.5);
    doc.text('LinkedIn: ' + linkedin , {align:'center', underline: true, link: linkedin});
    doc.moveDown(0.5);
    doc.text('Facebook: ' + facebook, {align:'center', underline: true, link: facebook});

    doc.end();

    var params = {
      Key : email_id+'.pdf',
      Body : doc,
      Bucket: 'resume-testf6342644-c9a5-40aa-821d-4ce624747f38',
      ContentType : 'application/pdf'
    }
    s3.upload(params, function(err, data) {
      if(err)
        console.log(err);
      else {
        console.log("Successfully uploaded data");
//Do the insertion into db here and conflict strategy as REPLACE.
        console.log(data.location);
        res.render('complete.ejs');
      }
    });
    // s3.upload(params, (err, res)=>{
    //     res.render('complete.ejs');
    // });
});

app.listen(port, function(){
    console.log('Server sunn rha hai...'+port)
});
