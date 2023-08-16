const express = require('express');
const router = express.Router();
const PortfolioItem = require('../models/portfolioItem');

// Получение списка портфолио
router.get('/', async (req, res) => {
  try {
    const portfolioItems = await PortfolioItem.find();
    res.json(portfolioItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
