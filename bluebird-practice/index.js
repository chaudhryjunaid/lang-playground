// package main

var Promise = require('bluebird');
var _ = require('lodash');
var glob = Promise.promisify(require('glob'));
var chalk = require('chalk');

glob('examples/*',{stat:true,nodir:true}).then(function(files){
    var modules ={};
    _.forEach(files,function(f){
        console.log(chalk.yellow('Running module '+f ));
        f = './'+f;
        modules[f]=require(f);
    });
    return modules;
}).catch(function(err){
    console.log(chalk.red('Error globbing files: '+ err.message));
});
