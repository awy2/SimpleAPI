const Sequelize = require('sequelize');
const config    = require( '../config.js');

const customerInit = require( './Customer.js');
const customerAddressInit = require( './CustomerAddress.js');
console.log(config)
const sequelize = new Sequelize(config.database, config.username, config.password, config);

customerInit(sequelize, Sequelize, config.database)
//customerAddressInit(sequelize, Sequelize, config.database)

sequelize.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

module.exports = sequelize;
