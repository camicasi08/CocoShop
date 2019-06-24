const mongoose = require('mongoose');
const Product = require('../models/product');

exports.create = (req, res, next) => {
    console.log('CREATE PRODUCT');
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        discounts: req.body.discounts,
        quantity: req.body.quantity,
      
    })

    product
        .save()
        .then(result => {
            console.log(result)
            res.status(201).json({
                message: 'Product created'
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
    Product.find({})
    .exec()
    .then(products => {
        if(products.length>0){
            return res.status(200).json(products)
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

exports.findById = (req, res, next) => {
    let id = req.params.id
    Product.findOne({_id: mongoose.Types.ObjectId(id)})
    .exec()
    .then(product=> {
        if(product){
            return res.status(200).json(product)
        }else{
            return res.status(200).json({})
        }
    })
    .catch( err => {
        res.status(500).json({
            error: err
        })
    })
}

exports.update = (req, res, next) =>{
    let id = req.params.id
    Product.findByIdAndUpdate({_id: mongoose.Types.ObjectId(id)}, {$set:req.body})
    .then( result=> {
        console.log(result)
        res.status(201).json({
            message: 'Product updated'
        })
    })
    .catch(error => {
        res.status(500).json({
            error: err
        })
    }) 

}

exports.delete = (req, res, next) => {
    let id = req.params.id
    Product.remove({_id: mongoose.Types.ObjectId(id)})
    .then(result => {
        res.status(200).json({
            message: 'Product deleted'
        })
    })
    .catch(error => {
        res.status(500).json({
            error: err
        })
    }) 
}
