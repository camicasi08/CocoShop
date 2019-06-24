const mongoose = require('mongoose');
const Transaction = require('../models/transaction');



exports.create = (req, res, next) => {
    console.log('CREATE TRANSACTION');
    const transaction = new Transaction({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        total: req.body.total,
        products: req.body.products,
        date: new Date().toISOString(),
    })

    transaction
        .save()
        .then(result => {
            console.log(result)
            res.status(201).json({
                message: 'TRASNSACTION created'
            })
        })
        .catch( err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
}

exports.findAll = (req, res, next) => {
    Transaction.find({})
    .exec()
    .then(transactions => {
        if(transactions.length>0){
            return res.status(200).json(transactions)
        }else{
            return res.status(200).json([])
        }
    })
    .catch( err => {
        res.status(500).json({
            error: err
        })
    })
}
