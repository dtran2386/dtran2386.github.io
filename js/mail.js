var nodemailer = require('nodemailer'),
  fs = require('fs');
  express = require('express');
var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'dtranrules@gmail.com',
    pass: 'Vietnam86!'
  }
});

console.log('created');
fs.readFile("./test.log", function(err, data) {
  transporter.sendMail({
    from: from,
    to: 'dtranrules@gmail.com',
    subject: subject,
    text: text,
    attachments: [{'filename': 'test.log', 'content': data}],
  });
});



// fs.readFile("./test.log", function(err, data) {
//   transporter.sendMail({
//     from: 'dtranrules@gmail.com',
//     to: 'dtranrules@gmail.com',
//     subject: 'Send Email Using Node.js',
//     text: 'Node.js New world for me',
//     attachments: [{'filename': 'test.log', 'content': data}],
//   });
// });
