import axios from 'axios';

async function sendEmail(toEmail, name, subject, content) {
	try {
		const htmlContent =
		`
			<html>
				<body>
					<div style="background-color: #f5f5f5; width: 100%; height: 100%; padding: 20px;">
						<div style="background-color: #fff; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 5px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
							<h1 style="color: #444; font-family: sans-serif; margin: 0 0 20px; font-size: 24px; 
                            text-decoration: underline;">Message Content</h1>
                            <div>
                                <h3 style="color: #444; font-family: sans-serif;">Datos:</h3>
                                <ul>
                                    <li><p style="color: #666; font-family: sans-serif; font-size: 16px; ">Name: ${name}</p>
                                    </li>
                                    <li><p style="color: #666; font-family: sans-serif; font-size: 16px;">Email: ${toEmail}</p></li>
                                </ul>
                            </div>
                            <h3 style="color: #444; font-family: sans-serif;">Subject:</h3>
                            <p style="color: #666; font-family: sans-serif; font-size: 16px; margin: 0 0 20px;">${subject}</p>
                            <div style="background-color: #fff; border-radius: 5px; box-shadow: 0 0 10px rgba(0,0,0,0.1); border-style: inset; color: #666;">
                                <p style="color: #666;  text-align: center; font-family: sans-serif; font-size: 16px; margin: 20px;"> ${content}</p>
                            </div>							
						</div>
					</div>
			</html>
		`;

		const response = await axios.post(
			'https://portfolio-web-python.netlify.app/api/send-email', 
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
