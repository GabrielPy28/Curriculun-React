require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors({ origin: '*' }));

const key = process.env.SENDGRID_API_KEY

app.use(express.json());

app.post('/send-email', async (req, res) => {
    const { subject, body } = req.body;

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
        res.status(200).json({'Email enviado': info.messageId})
    } catch (error) {
        res.status(500).json({'Error al enviar el email': error});
    };

});

app.listen(3001, () => {
    console.log(`Server is running on port 3001`);
});