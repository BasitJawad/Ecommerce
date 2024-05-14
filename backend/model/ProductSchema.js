const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    categoryName: { 
        type: String,
        enum: ['ELECTRONICS', 'CLOTHES', 'SHOES']
    }
});

const Category = mongoose.model('Category', categorySchema);

const productPictureSchema = mongoose.Schema({
    image: {
        type: String,
        required: true,
        validate: {
            validator: function(value) {
                // Check if the value ends with one of the specified image file extensions
                return /\.(jpg|jpeg|png)$/i.test(value);
            },
            message: 'Image must be in JPG, JPEG, or PNG format'
        }
    }});

const ProductSchema = mongoose.Schema({
    productName: {
        type: String,
        required: [true, "Product name is required"],
        minlength: [3, "Product name must be at least 3 characters long"],
        trim: true
    },
    UploaderEmail:{
        type: String
    },
    productBrand: {
        type: String,
        enum: [
            'DELL', 'LENOVO', 'APPLE', 'HP', 'ACER', 'TOSHIBA','IPHONE','SAMSUNG','OPPO','REDMI','HUAWEI','TECNO','NOKIA', 'BATA', 'NIKES', 'SETVIS', 'POWER',
            'SPORTS','REEBOK','PUMA', 'KHAADI', 'GUL-AHMAD', 'BONANZA', 'BAREEZ', 'SANA-SAFINAZ'
        ]
    },
    productPrice: {
        type: Number,
        default: 0,
        required: [true, "Product price is required"]
    },
    productAmount: {
        type: Number,
        default: 1,
        required: [true, "Product amount is required"]
    },
    productDescription: {
        type: String,
        maxlength: [3000, "Product description should not exceed 3000 characters"],
        required: [true, "Product description is required"]
    },
    productPictures: [productPictureSchema], // Allow storing an array of product pictures
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = { Category, Product };
