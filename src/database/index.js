const Sequelize = require('sequelize');
const config    = require( '../../config.js');

const customerInit = require( './models/Customer.js');
const customerAddressInit = require( './models/CustomerAddress.js');

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const Customer = customerInit(sequelize, Sequelize, config.database)
const CustomerAddress = customerAddressInit(sequelize, Sequelize, config.database)

module.exports = {
  sequelize,
  Customer,
  CustomerAddress,
};
