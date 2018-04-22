var app = require('./controllers/index');
const config = require( './config.js');

const defaultPortIfUndefined = 3000;

const { serverPort = defaultPortIfUndefined} = config;

const server = app.listen(serverPort, function() {
  console.log('Express server listening on port ' + serverPort);
});


