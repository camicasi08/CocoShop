const express = require("express");
const router = express.Router();


const TransactionController = require('../controllers/transactions');

router.post('/transactions', TransactionController.create);
router.get('/transactions', TransactionController.findAll);

//router.post('/login', UserController.login);

module.exports = router;