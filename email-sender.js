const nodemailer = require("nodemailer");
require("dotenv").config()
const EMAIL=process.env.EMAIL
const PWD=process.env.PWD
 let transporter = nodemailer.createTransport({
   host: "smtp-mail.outlook.com",
   port: 587,
   auth: {
     user: EMAIL ,// generated ethereal user
     pass: PWD, // generated ethereal password
   },
 });
 const mailOptions={
    from: `"GMC Contact" <${EMAIL}>`,
    to:"horchaniwided@gmail.com",
    subject:"test email",
    text:" test"
 }
 transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error)
    }
    else {
        console.log("Email sent : " + info.response)
    }
    }
)