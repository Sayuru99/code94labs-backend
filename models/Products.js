const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    sku: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
});

module.exports = Product = mongoose.model('product', ProductSchema);