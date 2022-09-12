const inquirer = require("inquirer");
const fs = require("fs");

//  array of questions for the user input
const promptUser = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: ["add Manager", "add Intern", "add Engineer", "Build website"],
      },
    ])
    .then((answer) => {
      if (answer.action === "add Manager") {
        console.log("adding manager");
      }
      if (answer.action === "add Intern") {
        console.log("adding intern");
      }
      if (answer.action === "add Engineer") {
        console.log("adding engineer");
      }
      if (answer.action === "Build website") {
        console.log("Building website");
      }
    });
};

promptUser();
