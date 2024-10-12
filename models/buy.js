const mongoose = require('mongoose');

const buySellItemSchema = new mongoose.Schema({
    itemName: { type: String, required: true },  // General name of the item
    category: { 
        type: String, 
        enum: ['Book', 'Drafter', 'Sheet Holder', 'Lab Coat', 'Calculator', 'Other'], 
        required: true 
    }, // Defines the type of item
    description: { type: String },  // General description of the item
    price: { type: Number, required: true },  // Price of the item
    condition: { 
        type: String, 
        enum: ['New', 'Like New', 'Used', 'Damaged'], 
        required: true 
    },  // Condition of the item

    // Specific fields for certain categories
    // Book-specific fields
    title: { type: String },  // Applicable to books
    author: { type: String },  // Applicable to books
    edition: { type: String },  // Applicable to books
    course: { type: String },  // For books related to specific courses

    // Drafter-specific fields
    brand: { type: String },  // Applicable to drafters, calculators, etc.
    material: { type: String },  // Applicable to drafters, sheet holders, etc.

    // Lab Coat-specific fields
    size: { type: String },  // Applicable to lab coats
    color: { type: String },  // Applicable to lab coats

    // General seller information
    sellerName: { type: String, required: true },  // Seller's name
    sellerContact: { type: String, required: true },  // Seller's contact info
    sellerEmail: { type: String, required: true },  // Seller's email
    location: { type: String, required: true },  // Seller's location
    image: { type: String, default: 'no-image.jpg' },  // Image of the item

    // General posting information
    postedDate: { type: Date, default: Date.now },  // Date when the item was posted
    isSold: { type: Boolean, default: false }  // Status to check if the item is sold
});

const BuySellItem = mongoose.model('BuySellItem', buySellItemSchema);
module.exports = BuySellItem;
