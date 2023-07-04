import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Configurar o transporte de email usando o Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Configurar o email a ser enviado
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL,
      subject: 'Contato do Site de Portfólio',
      text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`,
    };

    try {
      // Enviar o email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email enviado com sucesso!' });
    } catch (error) {
      res.status(500).json({ error: 'Ocorreu um erro ao enviar o email.' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido.' });
  }
}
