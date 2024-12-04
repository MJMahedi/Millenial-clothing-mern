const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema({
    productId: {
        type: Number,
        required: [true, 'Please enter product name'],
        unique: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    session: {
        type: String,
        required: true,
        enum: ["winter", "summer", "fall", "spring", "regular"]
    },
    category: {
        type: String,
        required: true,
        enum: ["Men", "Women", "Kids","Accessories","Couple Goals"]
    },
    subCategory: {
        type: String,
        trim: true
    },
    productType: {
        type: String,
        trim: true
    },
    size: {
        type: [String],
        trim: true
    },
    description: {
        type: [String],
        required: true,
        trim: true
    },
    features: {
        type: [String],
        required: true,
        trim: true
    },
    image: {
        type: [String],
        required: false,
    },
    discount: {
        type: Number,
        min: 0
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    color: {
        type: [String]
    },
    ratings: {
        type: Number,
        min: 0,
        max: 5
    },
    brand: {
        type: String,
        required: true,
        trim: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 1,
    },
},
    {
        timestamps: true,
    }
);


const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;