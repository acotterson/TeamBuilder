// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const HTMLGen = require('./src/generateHTML');

// Array of prompts for the user
// Questions that apply to everyone
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

// User choice question
const finalQuestion = [
  {
    type: "list",
    message: "Add team members ",
    name: "teamAdd",
    choices: ["Engineer", "Intern", "Finish building my team."],
  },
];

// Manager questions
const manQuestions = [
  ...genQuestions,
  {
    type: "number",
    name: "officeNum",
    message: "Office number: ",
  },
  ...finalQuestion,
];

// Engineer questions
const engQuestions = [
  ...genQuestions,
  {
    type: "input",
    name: "github",
    message: "Github username: ",
  },
  ...finalQuestion,
];

// Intern questions
const intQuestions = [
  ...genQuestions,
  {
    type: "input",
    name: "school",
    message: "School: ",
  },
  ...finalQuestion,
];

// Write the html data to a file
function writeToFile(fileName, teamHTML) {
  fs.writeFile(fileName, teamHTML, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// Add members to the team until user is finished, then get the html data and send it to be written
function buildTeam(team, choice) {
  console.log(choice);
  if (choice !== "Finish building my team.") {
    console.log(`Please enter ${choice.toLowerCase()} information.`);
    if (choice === "Engineer") {
      addEngineer(team);
    } else {
      addIntern(team);
    }
  } else {
    teamHTML = HTMLGen(team);
    writeToFile("./dist/index.html", teamHTML);
  }
}

// Add an engineer to the team
function addEngineer(team) {
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

// Add an intern to the team
function addIntern(team) {
  inquirer.prompt(intQuestions).then((data) => {
    const intern = new Intern(data.name, data.idNum, data.email, data.school);
    team.push(intern);
    buildTeam(team, data.teamAdd);
  });
}

// Prompt for manager info, add him to team, and then run buildTeam function
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
  });
}

// Function call to initialize app
init();
