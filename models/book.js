const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: [true, "Book Name Is Required"],
    trim: true,
    maxLength: [100, "Book Name Cannot Be More Than 100 Characters"],
  },
  author: {
    type: String,
    required: [true, "Author Name Is Required"],
    trim: true,
  },
  genre: {
    type: String,
    trim: true,
  },
  publishedYear: {
    type: Number,
    min: [1000, "Year Cannot Be Less Than 1000"],
    max: [new Date().getFullYear(), "Year Cannot Be In The Future"],
  },
  price: {
    type: Number,
    required: [true, "Price Is Required"],
    min: [0, "Price Cannot Be Negative"],
  },
  stock: {
    type: Number,
    required: [true, "Stock Quantity Is Required"],
    min: [0, "Stock Cannot Be Negative"],
  },
  description: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("books", bookSchema);
