import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: './sendgrid.env' });
dotenv.config(); // Also check for .env file

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Configure SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// API endpoint for contact form
app.post('/api/contact', async (req, res) => {
  const { name, email, company, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Name, email, and message are required'
    });
  }

  const msg = {
    to: 'info@bluesci.ca',
    from: 'moehaija@gmail.com',
    replyTo: email,
    subject: `New Contact Form Submission from ${name}`,
    text: `
Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}

Message:
${message}
    `,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || 'Not provided'}</p>
      <hr>
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent successfully');
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('SendGrid Error:', error);
    if (error.response) {
      console.error('Error body:', error.response.body);
    }
    res.status(500).json({
      success: false,
      error: 'Failed to send email. Please try again later.'
    });
  }
});

// Serve static files from the dist folder in production
app.use(express.static(path.join(__dirname, 'dist')));

// Handle client-side routing - serve index.html for all non-API routes (Express 5 syntax)
app.get('/{*splat}', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
