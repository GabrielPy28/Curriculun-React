const nodemailer = require('nodemailer');
const key = process.env.SENDGRID_API_KEY

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed'
        };
    }

    const { subject, body } = JSON.parse(event.body);

    const msg = {
        to: {
            email: 'gabrielparenas27@gmail.com',
            name: 'Gabriel Piñero'
        },
        from: {
            email: 'webportafolio3@gmail.com',
            name: 'Portafolio Web'
        },
        subject: subject,
        content: [
            {
                type: 'text/html',
                charset: 'utf-8',
                value: body
            }
        ]
    };

    let transporter = nodemailer.createTransport({
        host: 'smtp.sendgrid.net', // Aquí va el servidor SMTP, como 'smtp.gmail.com' para Gmail
        port: 587, // Aquí va el puerto SMTP, como 465 para SSL o 587 para TLS
        secure: false, // Utiliza SSL (true) o TLS (false)
        auth: {
            user: 'apikey', // Aquí va tu correo electrónico
            pass: key // Aquí va tu contraseña
        }
    });

    let mailOptions = {
        from: msg.from.email,
        to: msg.to.email,
        subject: msg.subject,
        html: msg.content[0].value
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        return {
            statusCode: 200,
            body: JSON.stringify({'Email enviado': info.messageId})
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({'Error al enviar el email': error.message})
        };
    };

};