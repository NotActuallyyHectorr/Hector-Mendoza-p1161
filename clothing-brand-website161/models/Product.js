const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true},
    price: { type: Number, required: true},
    description: String,
    category: String,
    imageUrl: String,
});

MediaSourceHandle.exports = mongoose.model('Product', productSchema);