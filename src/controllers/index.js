
const express = require('express');
const Customer = require('./Customer');
const CustomerAddress = require('./CustomerAddress');
const app = express();

app.use('/customers', Customer.router);
app.use('/customersAddress', CustomerAddress.router);

module.exports = app;
