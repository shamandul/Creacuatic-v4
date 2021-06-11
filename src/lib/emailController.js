const nodemailer = require('nodemailer');

exports.sendEmail=(req, res)=>{
    var transporter = nodemailer.createTransport({
        service: 'mail.webweaver.es',
        port: 465,
        secure: true,
        auth: {
            user: 'soporte@webweaver.es',
            pass: 'Sp28#/*@'
        }
    });
    // Definimos el email
    var mailOptions = {
        from: 'Soporte Webweaver',
        to: 'shamandul@gmail.com',
        subject: 'Asunto',
        text: 'Contenido del email'
    };
// Enviamos el email
    transporter.sendMail(mailOptions, function(error, info){
        if (error){
            console.log(error);
            //res.send(500, error.message);
        } else {
            console.log("Email sent");
            //res.status(200).jsonp(req.body);
        }
    });
};