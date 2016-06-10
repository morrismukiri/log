'use strict'


var chalk = require('chalk');

var log = function () {

	var log=this.m = this.messsage = function (message) {
		console.log(message);
		return this;
	};
	this.error=this.e= function (message) {
		log(chalk.bgRed.bold('ERROR:')+' '+ chalk.red.bold(message));
		return this;
	};
	this.warning=this.w= function (message) {
		log(chalk.bgYellow.bold('WARNING:')+' '+ chalk.yellow.bold(message));
		return this;
	};
	this.info=this.i=function (message) {
	log(chalk.bgCyan.bold('INFO:')+' '+chalk.cyan.italic(message));
	return this;
	}
	this.success=this.s=function (message) {
	log(chalk.bgGreen.bold('SUCCESS:')+' '+chalk.green(message));
	return this;
	}
	
}
module.exports= new log();