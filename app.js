const nodemailer = require('nodemailer');



let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nasreenafathima195@gmail.com', 
    pass: 'Fathimahana123'
  }
});


let mailOptions = {
  from: '<nasreenafathima195@gmail.com>', 
  to: 'nasrinsafeer95@gmail.com', 
  subject: 'Hello from Node.js', 
  text: 'Hello friend! This is a test email from my Node.js application.', // Plain text body
  html: '<b>Hello friend!</b> This is a test email from my Node.js application.' // HTML body content
};

// Send mail with defined transport object
transporter.sendMail(mailOptions,  
    function (err, data) {
    if (err) {
        console.log('Error Occurs');
    } else {
        console.log('Email sent successfully');
    }
});