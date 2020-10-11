const inquirer = require("inquirer");
//The function will begin asking about the manager
const managerQuestions = [
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
        type: "list",
        name: "pronoun",
        message: "What are their preferred pronouns?",
        choices: ["He/Him,", "She/Her", "They/Them"]
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
        name: "github",
        message: "What is their office phone?",
        validate: gitHubInput => {
            if (gitHubInput) {
                return true;
            } else {
                console.log('Sorry! We need an office phone to continue!');
                return false;
            }
        }
    }
];
//Once the manager's info is given, we will move on to other employees
const employeeQuestions = [
    {
        type: "list",
        name: "continue",
        message: "How would you like to proceed? Add another...",
        choices: ["Intern", "Engineer", "I'm finished "],
        validate: function (choice) {
            //Need to find a way to validate this option to I can close the app
            if (choice.continue === "Intern") {
                internQuestions();
            } else if (choice.continue === "Engineer") {
                engineerQuestions();
            } else if (choice.continue === "I'm finished ") {
                console.log("This will close need to close the app");
                return;
            }
        }
    },
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
        type: "list",
        name: "pronoun",
        message: "What are their preferred pronouns?",
        choices: ["He/Him,", "She/Her", "They/Them"]
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
    }
];

//After the employee information is filled out, we'll determine if the Engineer/Intern question will appear
const engineerQuestions = () => {
    inquirer.prompt([
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
    ]);
};

const internQuestions = () => {
    inquirer.prompt([
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
    ]);
};

//I have progress with the function, but still need to add the generate file function
const employeeInput = employeeList => {
    //Starts with the manager
    inquirer.prompt(managerQuestions)
        .then(mData => {
            //We continue to the employee
            inquirer.prompt(employeeQuestions)
            .then(eData => {
                console.table(mData);
                console.table(eData);
            })
        })
};

employeeInput();