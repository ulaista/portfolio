const mongoose = require('mongoose');

const portfolioItemSchema = new mongoose.Schema({
  title: String,
  description: String,
});

module.exports = mongoose.model('PortfolioItem', portfolioItemSchema);
