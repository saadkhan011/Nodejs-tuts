// jshint esversion:6
console.log("Hello world");

// repl is read evaluation print loop 
// repl allows you to write in the console using node 
// try this write node in terminal and then write js code 

// file system is an enternal module of node
const fs = require("fs");
// it will make a copy of file1 in file2
fs.copyFileSync("file1.txt", "file2.txt");

// npm packages is an external module 
// before usimg any package internal or external we need to write like this 
const superhero = require('superhero-name-library');
var name = superhero.random();
console.log(name);