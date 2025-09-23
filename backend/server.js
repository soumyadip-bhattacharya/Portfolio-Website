
// backend/server.js

// 1. IMPORTS
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const connectDB = require('./config/db');
const Contact = require('./models/Contact');

// 2. INITIALIZATION
const app = express();
const PORT = process.env.PORT || 5000;

// 3. DATABASE CONNECTION
connectDB(); // Connect to MongoDB

// 4. MIDDLEWARE
app.use(cors());
app.use(express.json()); // This is crucial for parsing JSON request bodies

// --- REMOVED: The first app.listen() call was here. It's an error to start the server twice. ---

// 5. API ROUTES
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, mobile, subject, message } = req.body;

        // --- ADDED: Basic validation ---
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Name, email, and message are required fields.' });
        }

        const newContact = new Contact({
            name,
            email,
            mobile,
            subject,
            message
        });

        // Save the form submission to the database
        await newContact.save();

        // --- MODIFIED: Updated Nodemailer logic to use async/await ---
        // This makes error handling for just the email part cleaner.
        try {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            const mailOptions = {
                from: `"${name}" <${email}>`,
                to: process.env.EMAIL_USER,
                subject: `Portfolio Contact: ${subject || 'No Subject'}`,
                html: `
                    <h2>New Message from Portfolio Contact Form</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Mobile:</strong> ${mobile || 'Not provided'}</p>
                    <hr>
                    <h3>Message:</h3>
                    <p>${message}</p>
                    <p>---</p>
                    <p>This message has been saved to the database.</p>
                `,
            };

            await transporter.sendMail(mailOptions);
        } catch (emailError) {
            // If the email fails to send, log the error but don't fail the entire request.
            // The data is already saved to the database.
            console.error('Error sending email:', emailError);
        }

        // Send a success response to the client
        res.status(200).json({ success: 'Message sent and saved successfully!' });

    } catch (error) {
        console.error('Error in /api/contact route:', error);
        res.status(500).json({ error: 'Server error. Please try again later.' });
    }
});

// 6. START THE SERVER (This is the only place it should be)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});