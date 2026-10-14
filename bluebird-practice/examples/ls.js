var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var chalk = require('chalk');

fs.readdirAsync('.').then(function(files){
    console.log(chalk.green(files));
}).catch(function(err){
    console.log('Error listing files: ',err.message);
});
