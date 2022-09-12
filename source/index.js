// start application
// ask what action user would like to do (add engineer, manager or intern or quit application)
// push answers to an array
// create html from a template

// imports

const fs = require("fs");
const inqurier = require("inquirer");
const Manager = "./lib/manager";
const Intern = "./lib/intern";
const Engineer = "./lib/engineer";

// empty starting array
const employees = [];
