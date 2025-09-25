// backend/server.js

// 1. IMPORTS
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const connectDB = require('./config/db');
const Contact = require('./models/Contact');
const { knowledge } = require('./knowledgeBase');

// 2. INITIALIZATION
const app = express();
const PORT = process.env.PORT || 5000;

// 3. DATABASE CONNECTION
connectDB(); // Connect to MongoDB

// 4. MIDDLEWARE
app.use(cors());
app.use(express.json());

// 5. API ROUTES

// --- Contact Form Route ---
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, mobile, subject, message } = req.body;

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

        await newContact.save();

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
            console.log('Email notification sent successfully!');

        } catch (emailError) {
            console.error('Error sending email:', emailError);
        }

        res.status(200).json({ success: 'Message sent and saved successfully!' });

    } catch (error) {
        console.error('Error in /api/contact route:', error);
        res.status(500).json({ error: 'Server error. Please try again later.' });
    }
});

// --- AI Assistant Route ---
app.post('/api/assistant', async (req, res) => {
    // ADDED: Debugging line to check the API key
    console.log("My API Key is:", process.env.GEMINI_API_KEY); 

    const userQuery = req.body.query;

    if (!userQuery) {
        return res.status(400).json({ error: 'Query is required.' });
    }

    try {
        const systemPrompt = `You are a friendly and professional AI assistant for Soumyadip Bhattacharya's portfolio. Your name is Sigma. Your goal is to answer questions about Soumyadip based ONLY on the context provided below. Be conversational and helpful. If the question is outside the context, politely state that you can only answer questions about Soumyadip's professional life and portfolio.

        Context:
        ${knowledge}`;
        
        const apiKey = process.env.GEMINI_API_KEY; 
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

        const payload = {
            contents: [{ parts: [{ text: userQuery }] }],
            systemInstruction: {
                parts: [{ text: systemPrompt }]
            },
        };

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`API call failed with status: ${response.status}`);
        }
        
        const result = await response.json();
        const aiResponse = result.candidates?.[0]?.content?.parts?.[0]?.text;

        if (aiResponse) {
            res.json({ reply: aiResponse });
        } else {
            res.json({ reply: "I'm sorry, I couldn't generate a response at this moment. Please try again." });
        }

    } catch (error) {
        console.error('Error with AI Assistant:', error);
        res.status(500).json({ error: 'Failed to get response from AI assistant.' });
    }
});


// 6. START THE SERVER
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

