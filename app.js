const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const cors = require('cors');


const productsRoutes = require('./api/routes/product');
const transRoutes = require('./api/routes/transaction');

mongoose.connect('mongodb://localhost:27017/cocoshop', {useNewUrlParser: true});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/', productsRoutes)
app.use('/', transRoutes)


app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  });
  
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message
      }
    });
  });
  
  module.exports = app;