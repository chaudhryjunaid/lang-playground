// package main

var bluebird = require('bluebird');
var chalk = require('chalk');

var worker = require('./worker');

worker.async1000(function(){
  console.log(chalk.yellow('1000'));
  worker.async3000(function(){
    console.log(chalk.red('3000'));
  });
});

console.log(chalk.green('0'));
