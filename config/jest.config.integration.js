var config = require('./jest.config.js');

console.log('running integration tests');
config.testRegex = "\\.itest\\.js$";
module.exports = config;
