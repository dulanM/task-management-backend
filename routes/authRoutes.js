const express = require('express');
const { signup, signin } = require('../controllers/authController');
const router = express.Router();

// POST /api/auth/signup
router.post('/signup', signup);

// POST /api/auth/signin
router.post('/signin', signin);

module.exports = router;
