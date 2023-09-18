// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
require('dotenv').config();
import { createTransport } from "nodemailer";

export default async function handler(req, res) {

  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const transporter = createTransport({
      service: 'Gmail',
      auth: {
        user: 'frontlabsamsterdam@gmail.com',
        pass: process.env.APP_PASSWORD
      }
    });

    const mailOptions = {
      from: 'frontlabsamsterdam@gmail.com',
      to: 'frontlabsamsterdam@gmail.com',
      subject: 'New form submission',
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'An error occurred while sending the email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
