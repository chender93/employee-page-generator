const fs = require('fs');
const { writeFile, copyFile } = require('./src/page-template');
const inquirer = require("inquirer");
const genEmPage = require("./src/page-template");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employeeList = [];


//The function will begin asking about the manager
const managerQuestions = () => {
     inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the manager?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Sorry, but we need a name to continue');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Enter their Employee ID",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Sorry, but we need their ID to continue');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Enter their email address",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Sorry! We need their email address to continue');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "extension",
            message: "What is their office phone?",
            validate: phoneInput => {
                if (phoneInput) {
                    return true;
                } else {
                    console.log('Sorry! We need an office phone to continue!');
                    return false;
                }
            }
        }
    ]).then(mData => {
        console.log("End of the manager questions");
        const manager = new Manager(mData.name, mData.id, mData.email, mData.extension);
        employeeList.push(manager);
        toContinue();
    })
};

//Asks the user how they would like to proceed
const toContinue = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "continue",
            message: "How would you like to proceed? Add another...",
            choices: ["Intern", "Engineer", "I'm finished "],
        }
    ])
        .then(decision => {
            //Decides whether or not to add an inter, engineer, or close
            if (decision.continue === "Intern") {
                internQuestions();
            } else if (decision.continue === "Engineer") {
                engineerQuestions();
            } else if (decision.continue === "I'm finished ") {
                createPage();
            }
        })
};

//Engineer questions Prompts
const engineerQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Sorry, but we need a name to continue');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Enter their Employee ID",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Sorry, but we need your ID to continue');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Enter their email address",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Sorry! We need your email address to continue');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "Enter their GitHub Username",
            validate: gitHubInput => {
                if (gitHubInput) {
                    return true;
                } else {
                    console.log('Sorry! We need a github username to continue!');
                    return false;
                }
            }
        }
    ])
        .then(eData => {
            const engineer = new Engineer(eData.name, eData.id, eData.email, eData.github);
            employeeList.push(engineer);
            toContinue();
        })
};

//Intern question prompts
const internQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Sorry, but we need a name to continue');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Enter their Employee ID",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Sorry, but we need your ID to continue');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Enter their email address",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Sorry! We need your email address to continue');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "school",
            message: "Enter the intern's graduationg school",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Sorry! We need the school info of the intern');
                    return false;
                }
            }
        }
    ]).then(iData => {
        const intern = new Intern(iData.name, iData.id, iData.email, iData.school);
        employeeList.push(intern);
        toContinue();
    })
};

const createPage = () => {
    fs.writeFile('./dist/index.html', genEmPage(employeeList), err => {
        if (err) {
            console.log('Error: ' + err);
            return
        }
        console.log('========== New test file has been created! ==========');
    }
    )
};

managerQuestions();