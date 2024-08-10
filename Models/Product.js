const mongoose = require('mongoose');

// Define the Product schema
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'],
    },
    description: {
        type: String,
        required: [true, 'Product description is required'],
    },
    price: {
        type: Number,
        required: [true, 'Product price is required'],
        validate: {
            validator: function (v) {
                return v > 0; // Must be a positive number
            },
            message: 'Price must be a positive number',
        },
    },
    category: {
        type: String,
        required: [true, 'Product category is required'],
    },
    stock: {
        type: Number,
        required: [true, 'Stock quantity is required'],
        validate: {
            validator: function (v) {
                return v >= 0; // Must be non-negative
            },
            message: 'Stock quantity cannot be negative',
        },
    },
});

// Export the Product model
module.exports = mongoose.model('Product', ProductSchema);
