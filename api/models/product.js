const mongoose = require('mongoose');


const DiscountSchema = mongoose.Schema({
    start: {
        type: Date,
        required: true,
    },
    end: {
        type: Date,
        required: true
    },
    discount: {
        type: Number,
        required: true
    }

})

const ProductSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title : {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },

    price : {
        type: Number,
        required: true
    },
    quantity : {
        type: Number,
        required: true
    },

    discounts: [{
        type: DiscountSchema,
        required: false
    }]
    
})

const Product = module.exports = mongoose.model('Product', ProductSchema);