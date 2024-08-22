const express = require('express');
const router = express.Router();
const path = require('path');
const customerQuery = require('../models/Query');
const nodemailer = require('nodemailer');

// Serve HTML files with the correct path
router.get('/', (req, res, next) => {
    try {
        res.sendFile(path.join(__dirname, '../pages/index.html'));
    } catch (err) {
        next(err); // Pass the error to the global error handler
    }
});

router.get('/services', (req, res, next) => {
    try {
        res.sendFile(path.join(__dirname, '../pages/services.html'));
    } catch (err) {
        next(err); // Pass the error to the global error handler
    }
});

router.get('/history', (req, res, next) => {
    try {
        res.sendFile(path.join(__dirname, '../pages/history.html'));
    } catch (err) {
        next(err); // Pass the error to the global error handler
    }
});

router.get('/contact', (req, res, next) => {
    try {
        res.sendFile(path.join(__dirname, '../pages/contact.html'));
    } catch (err) {
        next(err); // Pass the error to the global error handler
    }
});

router.get('/gallery', (req, res, next) => {
    try {
        res.sendFile(path.join(__dirname, '../pages/gallery.html'));
    } catch (err) {
        next(err); // Pass the error to the global error handler
    }
});

router.get('/review', (req, res, next) => {
    try {
        res.sendFile(path.join(__dirname, '../pages/review.html'));
    } catch (err) {
        next(err); // Pass the error to the global error handler
    }
});

// Handle form submissions and send emails
router.post('/contact', async (req, res, next) => {
    try {
        const query = new customerQuery(req.body);
        const result = await query.save();

        // Setup email transport
        const transporter = nodemailer.createTransport({
            service: 'outlook',
            auth: {
                user: process.env.SERVER_EMAIL,
                pass: process.env.SERVER_EMAIL_PASSWORD
            }
        });

        // Email options
        const mailOptions = {
            from: process.env.SERVER_EMAIL,
            to: process.env.COMPANY_EMAIL,
            subject: `New Query from ${query.fullName}`,
            text: `
            Hello, ${query.fullName} has submitted a query to Mike Phillip Limited with the following details:
            
            Full Name: ${query.fullName}
            Contact Number: ${query.contactNumber}
            Email Address: ${query.emailAddress}
            Site Location: ${query.site_location}
            Specific Location: ${query.specifc_location}
            Query: ${query.query}
            
            Best Regards,
            Nodemailer`
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log("Email Sent: " + info.response);

        res.status(200).send('Query submitted successfully!');
    } catch (error) {
        next(error); // Pass the error to the global error handler
    }
});

module.exports = router;
