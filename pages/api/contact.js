import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Set up Nodemailer transporter (this example uses Gmail)
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'fuglsetm@gmail.com', // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail app password (not your normal password)
      },
    });

    try {
      // Send email
      await transporter.sendMail({
        from: email,
        to: 'fuglsetm@gmail.com', // Your email to receive messages
        subject: `New Contact Form Message from ${name}`,
        html: `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ message: 'Only POST requests allowed' });
  }
}
