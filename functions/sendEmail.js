const nodemailer = require('nodemailer');

// Cambia las variables de entorno según sea necesario
const emailUser  = process.env.GMAIL_USER; // Tu correo de Gmail
const emailPass = process.env.GMAIL_PASSWORD; // Tu contraseña de Gmail o contraseña de aplicación

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
            email: emailUser , // Usa el correo de Gmail
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
        service: 'gmail', // Usar el servicio de Gmail
        auth: {
            user: emailUser , // Tu correo de Gmail
            pass: emailPass // Tu contraseña de Gmail o contraseña de aplicación
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
    }
};
