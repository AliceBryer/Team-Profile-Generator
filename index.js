const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./library/Manager");
const Intern = require("./library/Intern");
const Engineer = require("./library/Engineer");

const managerQuestionArray = [
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
];
const internQuestionArray = [
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
];
const engineerQuestionArray = [
  {
    type: "input",
    name: "name",
    message: "What is the engineers name? ",
  },
  {
    type: "input",
    name: "id",
    message: "Enter the id of the engineer ",
  },
  {
    type: "input",
    name: "email",
    message: "What is the engineers email address? ",
  },
  {
    type: "input",
    name: "github",
    message: "What is their Github username? ",
  },
];

// empty array to push answers into
const managersArray = [];
const internArray = [];
const engineerArray = [];

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
        addEngineer();
      }
      if (answer.action === "Build website") {
        buildWebsite();
      }
    });
};

promptUser();

const addManager = () => {
  inquirer.prompt(managerQuestionArray).then((answers) => {
    answers = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    managersArray.push(answers);

    console.log(managersArray);
    return promptUser();
  });
};

const addIntern = () => {
  inquirer.prompt(internQuestionArray).then((answers) => {
    answers = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );
    internArray.push(answers);
    console.log(internArray);
    return promptUser();
  });
};

const addEngineer = () => {
  inquirer.prompt(engineerQuestionArray).then((answers) => {
    answers = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    engineerArray.push(answers);
    console.log(engineerArray);
    return promptUser();
  });
};

const buildWebsite = () => {
  console.log("buildingWebsite123");
  //   //   fs.writeFileSync("index.html", generateHTML(answers))
  //   //     .then(() => console.log("successfully index.html."))
  //   //     .catch((err) => console.error(err));
};
