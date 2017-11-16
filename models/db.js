var mongoose = require('mongoose');
var chalk = require('chalk');
var readLine = require('readline');
var config = require('../config');


var dbURI = config.database;
mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
    console.log(chalk.green('Mongoose connected to ' + dbURI));
    });

mongoose.connection.on('error',function (err) {
    console.log(chalk.red('Mongoose connection error: ' + err));
    });

mongoose.connection.on('disconnected', function () {
    console.log(chalk.blue('Mongoose disconnected'));
    });

var gracefulShutdown = function (msg, callback) {
        mongoose.connection.close(function () {
            console.log(chalk.cyan('Mongoose disconnected through ' + msg));
            callback();
        });
    };

if (process.platform === "win32"){
    var r1 = readLine.createInterface ({
        input: process.stdin,
        output: process.stdout
    });
    r1.on("SIGINT", function () {
        process.emit("SIGINT");
    });
}

process.on('SIGINT', function (){
    gracefulShutdown('app termination', function(){
        process.exit(0);
    });
});
