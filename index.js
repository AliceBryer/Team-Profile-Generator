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
        addManager();
      }
      if (answer.action === "add Intern") {
        addIntern();
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

const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the managers name? ",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the id of the manager ",
      },
      {
        type: "input",
        name: "email",
        message: "What is the managers email address? ",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the office number? ",
      },
      {
        type: "list",
        name: "action",
        message: "What would you like to do now?",
        choices: ["add Manager", "add Intern", "add Engineer", "Build website"],
      },
    ])
    .then((answer) => {
      if (answer.action === "add Manager") {
        addManager();
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

const addIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the interns name? ",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the id of the intern ",
      },
      {
        type: "input",
        name: "email",
        message: "What is the interns email address? ",
      },
      {
        type: "input",
        name: "school",
        message: "What school do they attend? ",
      },
      {
        type: "list",
        name: "action",
        message: "What would you like to do now?",
        choices: ["add Manager", "add Intern", "add Engineer", "Build website"],
      },
    ])
    .then((answer) => {
      if (answer.action === "add Manager") {
        addManager();
      }
      if (answer.action === "add Intern") {
        addIntern();
      }
      if (answer.action === "add Engineer") {
        console.log("adding engineer");
      }
      if (answer.action === "Build website") {
        console.log("Building website");
      }
    });
};

const addIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the interns name? ",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the id of the intern ",
      },
      {
        type: "input",
        name: "email",
        message: "What is the interns email address? ",
      },
      {
        type: "input",
        name: "school",
        message: "What school do they attend? ",
      },
      {
        type: "list",
        name: "action",
        message: "What would you like to do now?",
        choices: ["add Manager", "add Intern", "add Engineer", "Build website"],
      },
    ])
    .then((answer) => {
      if (answer.action === "add Manager") {
        addManager();
      }
      if (answer.action === "add Intern") {
        addIntern();
      }
      if (answer.action === "add Engineer") {
        console.log("adding engineer");
      }
      if (answer.action === "Build website") {
        console.log("Building website");
      }
    });
};
