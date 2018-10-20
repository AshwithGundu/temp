const nodemailer = require('nodemailer');

let nm = (req, res) => {
     const output = `<p> got </p>
    <h1>HELLO</h1>
    <ul>
    <li>  Email - ID: ${req.body.email}</li>
    <li> Message : ${req.body.Message}</li>
    </ul>`
    console.log('request sent to server')
    nodemailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'g.ashwith@gmail.com',
                pass: '919191aaaa'
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: '"GUNDU" <g.ashwith@gmail.com>', // sender address
            to: 'g.ashwith@gmail.com', // list of receivers
            subject: 'Hello ✔', // Subject line
            text: 'Hello world?', // plain text body
            html: output // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            res.sendStatus(200);
           
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        });
    });
}

module.exports.nm = nm