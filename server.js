require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors({ origin: '*' }));

// Cambia las variables de entorno según sea necesario
const emailUser  = process.env.GMAIL_USER; // Tu correo de Gmail
const emailPass = process.env.GMAIL_PASSWORD; // Tu contraseña de Gmail o contraseña de aplicación

app.use(express.json());

app.post('/send-email', async (req, res) => {
    const { subject, body } = req.body;

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
        res.status(200).json({'Email enviado': info.messageId});
    } catch (error) {
        res.status(500).json({'Error al enviar el email': error});
    }
});

app.listen(3001, () => {
    console.log(`Server is running on port 3001`);
});
