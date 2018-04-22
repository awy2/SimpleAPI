
var express = require('express');
var CustomerController = require('./Customer');
var CustomerAddressController = require('./CustomerAddress');
var app = express();

app.use('/customers', CustomerController);
//app.use('/customersAddress', CustomerAddressController);

module.exports = app;
