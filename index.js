const app = require('./src/controllers/index');
const db = require('./src/database');
const config = require( './config.js');

const defaultPortIfUndefined = 3000;

db.sequelize.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

const { serverPort = defaultPortIfUndefined} = config;

const server = app.listen(serverPort, () => {
  console.log('Express server listening on port ' + serverPort);
});


