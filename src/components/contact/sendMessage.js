import axios from 'axios';

async function sendEmail(toEmail, name, subject, content) {
	try {
		const htmlContent =
		`
			<html>
				<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #1a1a1a;">
					<div style="background-color: #1a1a1a; width: 100%; height: 100%; padding: 40px;">
						<div style="background-color: #2c2c2c; max-width: 600px; margin: 0 auto; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);">
							<h1 style="color: #ffffff; margin: 0 0 20px; font-size: 28px; text-align: center; border-bottom: 2px solid #444444; padding-bottom: 10px;">Mensaje Recibido</h1>
							
							<h3 style="color: #ffffff; margin: 20px 0 10px; font-size: 20px;">Datos del Remitente:</h3>
							<ul style="list-style-type: none; padding: 0;">
								<li style="margin-bottom: 10px;">
									<strong style="color: #ffffff;">Nombre:</strong>
									<p style="color: #cccccc; font-size: 16px; margin: 0;">${name}</p>
								</li>
								<li>
									<strong style="color: #ffffff;">Email:</strong>
									<p style="color: #cccccc; font-size: 16px; margin: 0;">${toEmail}</p>
								</li>
							</ul>

							<h3 style="color: #ffffff; margin: 20px 0 10px; font-size: 20px;">Asunto:</h3>
							<p style="color: #cccccc; font-size: 16px; margin: 0 0 20px;">${subject}</p>

							<div style="background-color: #333333; border-radius: 5px; padding: 15px; border-left: 4px solid #007BFF; color: #cccccc; margin-bottom: 20px;">
								<p style="margin: 0; text-align: left; font-size: 16px;">${content}</p>
							</div>

							<footer style="text-align: center; margin-top: 20px; font-size: 14px; color: #999999;">
								<p>Este mensaje fue enviado desde tu portafolio web.</p>
							</footer>
						</div>
					</div>
				</body>
			</html>
		`;

		const response = await axios.post(
			'https://portfolio-web-python.netlify.app/.netlify/functions/sendEmail',
			{
				subject: 'New Message From Web Portfolio',
				body: htmlContent,
			}, 
			{
				headers: {
					'Content-Type': 'application/json',
					'charset':'UTF-8'
				},
			}
		);

		if (response.status === 200) {
			alert('Mensaje Enviado Exitosamente');
		} else {
			alert('Ocurrio un Error al Enviar el Mensaje')
			throw new Error('Error sending email');
		}
	} catch (error) {
		console.error('Error:', error);
	}
	

	
};


export { sendEmail };
