const inquirer = require("inquirer");
const employeeQuestions = require("./lib/questions");
const mangerQuestions = require("./lib/questions");
const internQuestions = require("./lib/questions");
const engineerQuestions = require("./lib/questions");

const start = () => {
    inquirer.prompt(mangerQuestions).then(data => {
        inquirer.prompt(employeeQuestions). then(employeeData => {
            console.log(data);
            console.log(employeeData);
        })
    });
};

start();