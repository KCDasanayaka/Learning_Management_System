// authController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const Admin = require('../models/Admin'); // adjust path as necessary

// Function to generate a JWT token with an expiration time and role information
const generateToken = (admin) => {
  return jwt.sign(
    { id: admin._id, role: 'admin' },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
};

// Set up nodemailer transporter (for future use, e.g., in forgot password functionality)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Combined and enhanced login function
exports.login = async (req, res) => {
  const { adminNumber, password } = req.body;

  // Input validation
  if (!adminNumber || !password) {
    return res.status(400).json({ message: 'Admin number and password are required' });
  }

  try {
    // Check if admin exists
    const admin = await Admin.findOne({ adminNumber });
    if (!admin) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare the provided password with the hashed password stored in the database
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token including the admin's role
    const token = generateToken(admin);

    // Respond with token and minimal admin information
    return res.status(200).json({
      token,
      admin: {
        id: admin._id,
        adminNumber: admin.adminNumber,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};


exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(404).json({ message: 'Email not found' });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: admin.email,
      subject: 'Your Password',
      text: `Your password is: ${admin.password}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ message: 'Error sending email' });
      } else {
        res.json({ message: 'Password sent to email' });
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};