var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vladimir.patlakha@gmail.com',
    pass: '********'
  }
});

var mailOptions = {
  from: 'vladimir.patlakha@gmail.com',
  to: 'vladimir.patlakha@gmail.com',
  subject: 'Sending e-mail using Node.js',
  text: 'Test exercise'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('E-mail sent: ' + info.response);
  }
});