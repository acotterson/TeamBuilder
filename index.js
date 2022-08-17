const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const { buildFailureTestResult } = require("@jest/test-result");

// Array of prompts for the user
const genQuestions = [
  {
    type: "input",
    name: "name",
    message: "Name: ",
  },
  {
    type: "number",
    name: "idNum",
    message: "ID number: ",
  },
  {
    type: "input",
    name: "email",
    message: "Email: ",
  },
];

const finalQuestion = [
  {
    type: "list",
    message: "Add team members ",
    name: "teamAdd",
    choices: ["Engineer", "Intern", "Finish building my team."],
  },
];

const manQuestions = [
  ...genQuestions,
  {
    type: "number",
    name: "officeNum",
    message: "Office number: ",
  },
  ...finalQuestion,
];

const engQuestions = [
  ...genQuestions,
  {
    type: "input",
    name: "github",
    message: "Github username: ",
  },
  ...finalQuestion,
];

const intQuestions = [
  ...genQuestions,
  {
    type: "input",
    name: "school",
    message: "School: ",
  },
  ...finalQuestion,
];

// Write the readme data to a file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

function buildTeam(team, choice){
    console.log(choice);
    if (choice !== "Finish building my team.") {
        console.log(`Please enter ${choice.toLowerCase()} information.`);
        if (choice === "Engineer") {
            addEngineer(team);
        } else{
            addIntern(team);
        }
    } else {
        console.log(team);
    }
}

function addEngineer(team){
    inquirer.prompt(engQuestions).then((data) => {
        const engineer = new Engineer(
          data.name,
          data.idNum,
          data.email,
          data.github
        );
        team.push(engineer);
        buildTeam(team, data.teamAdd);
      });
}

function addIntern(team){
    inquirer.prompt(intQuestions).then((data) => {
        const intern = new Intern(
          data.name,
          data.idNum,
          data.email,
          data.school
        );
        team.push(intern);
        buildTeam(team, data.teamAdd);
      });
}

// Prompt for user input, use MDGen to format the readme with the data, then use writeToFile to create the readme file
function init() {
  const team = [];
  console.log("Please enter manager information.");
  inquirer.prompt(manQuestions).then((data) => {
    const manager = new Manager(
      data.name,
      data.idNum,
      data.email,
      data.officeNum
    );
    team.push(manager);
    buildTeam(team, data.teamAdd);

    // markdownData = MDGen(rawData);
    // writeToFile("./sample/README.md", markdownData);
  });
}

// Function call to initialize app
init();
