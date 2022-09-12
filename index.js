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

    return promptUser();
  });
};

const website = `<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title> TEAM PROFILE</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="/dist/assets/css/styles.css" >
</head>
<body>
  <header>
    <h1 class="title">MY TEAM</h1>
  </header>
<div class="container">
    <section>
      <div class="manager-card">
        <div class="top-card">
          <h2 class="name">Chris Jones</h2>
          <h3 class="job-title">Manager</h3>
        </div>
        <div class="info-container">
          <div class="info-content">ID: 001</div>
          <div class="info-content">
            <a href="mailto: chris@gmail.com">EMAIL: chris@gmail.com </a>
          </div>
          <div class="info-content">01922 447237</div>
        </div>
      </div>
    </section>

    <section>
      <div class="engineer-card">
        <div class="engineer-top-card">
          <h2 class="name">DAVE SMITH</h2>
          <h3 class="job-title">Engineer</h3>
        </div>
        <div class="info-container">
          <div class="info-content">ID: 019</div>
          <div class="info-content">
            <a href="mailto:dave@gmail.com">EMAIL: dave@gmail.com</a>
          </div>
          <div class="info-content">
            <a href="https://github.com/">Github Profile</a>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="intern-card">
        <div class="intern-top-card">
          <h2 class="name"></h2>
          <h3 class="job-title">Intern</h3>
        </div>
        <div class="info-container">
          <div class="info-content"></div>
          <div class="info-content">
            <a href="mailto:molly@gmail.com">EMAIL: molly@gmail.com</a>
          </div>
          <div class="info-content">School: Shire Oak Academy</div>
        </div>
      </div>
    </section>
  </div>
</body>
</html>`;

const buildWebsite = () => {
  fs.writeFile("index.html", website, function (err) {
    if (err) throw err;
    console.log("Your team-profile is ready to view");
  });
};
