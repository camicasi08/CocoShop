const mongoose = require('mongoose');

const TransactionSchema =  mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    total : {
        type: Number,
        required: true
    },
    date: {
        type: Date
    },
    products: [{
        _id: {
            type: String
        },
        quantity:{
            type: Number
        },
        total:{
            type: Number
        },
        price:{
            type: Number
        }
    }]
    
})

const Transaction = module.exports = mongoose.model('Transaction', TransactionSchema);