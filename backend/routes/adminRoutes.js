// adminRoutes.js
const express = require('express');
const router = express.Router();
const { Price, Area, Admin } = require('./models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authMiddleware = require('./authMiddleware'); // Middleware untuk validasi JWT

// --- Login Admin ---
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username });

  if (!admin || !(await bcrypt.compare(password, admin.password))) {
    return res.status(401).json({ error: "Username atau password salah!" });
  }

  const token = jwt.sign({ id: admin._id }, 'SECRET_KEY', { expiresIn: '1h' });
  res.json({ token });
});

// --- CRUD Harga (Protected Routes) ---
router.get('/prices', authMiddleware, async (req, res) => {
  const prices = await Price.find();
  res.json(prices);
});

router.post('/prices', authMiddleware, async (req, res) => {
  const newPrice = new Price(req.body);
  await newPrice.save();
  res.status(201).json(newPrice);
});

// --- CRUD Area Coverage ---
router.get('/areas', authMiddleware, async (req, res) => {
  const areas = await Area.find();
  res.json(areas);
});

router.post('/areas', authMiddleware, async (req, res) => {
  const newArea = new Area(req.body);
  await newArea.save();
  res.status(201).json(newArea);
});

module.exports = router;