const engineerQuestions = [
    {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
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
    type: "number",
    name: "id",
    message: "Enter your Employee ID",
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
    message: "Enter your email address",
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
    message: "Enter your GitHub Username",
    validate: gitHubInput => {
        if (gitHubInput) {
            return true;
        } else {
            console.log('Sorry! We need a github username to continue!');
            return false;
        }
    }
}
];