// package main

var bluebird = require('bluebird');
var chalk = require('chalk');

var worker = require('./lib/worker');

worker.async100(function(){
  console.log(chalk.yellow('100'));
  worker.async300(function(){
    console.log(chalk.red('300'));
  });
});

console.log(chalk.green('0'));
