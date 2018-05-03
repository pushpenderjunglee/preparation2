

function mail(userid,pass,text)
{
    const nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: userid,
               pass: pass
           }
       });

    let mailOptions = {
        from: userid,
        to: 'pushpender1239@gmail.com', 
        subject: 'Testing', 
        text: text,
        html: '<b>Hello world?</b>'
    };

    // const mailOptions = {
    //     from: 'sender@email.com', // sender address
    //     to: 'to@email.com', // list of receivers
    //     subject: 'Subject of your email', // Subject line
    //     html: '<p>Your html here</p>'// plain text body
    //   };
      transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
          console.log("!!!!!!! Mail Sent........");
     });

    }
    module.exports=mail();