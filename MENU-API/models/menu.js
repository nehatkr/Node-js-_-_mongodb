const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Dish name is required"],
    trim: true,
    menuLength: [100, "Food name can not be more then 100 characters"],
  }, 
  description: { type: String, trim: true }, 
  price: {
    type: Number,
    required: [true, "Price of the food item is required"],
  }, 
  category: { type: String, required: [true, "Category is also required"] }, 
  isAvailable: { type: Boolean, default: true, required:[false, 'This item is not available'] }, 
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Menu", menuSchema);
