const express = require("express");
const router = express.Router();


const ProductController = require('../controllers/products');

router.post('/products', ProductController.create);
router.get('/products', ProductController.findAll);
router.get('/products/:id', ProductController.findById );
router.put('/products/:id', ProductController.update);
router.delete('/products/:id', ProductController.delete);
//router.post('/login', UserController.login);

module.exports = router;