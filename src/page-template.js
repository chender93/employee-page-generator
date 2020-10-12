function genEmPage(userData) {

    function createManager(manager) {
        return `
        <div class="card m-3" style="width: 18rem;">
            <img src="./images/theyprofile.png" class="card-img-top" alt="...">
            <div class="card-body bg-primary">
                <h5 class="card-title text-light">${manager.getName()}</h5>
                <p class="card-text text-light"><i class="fas fa-user-tie"></i> Team Manager</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee Id: ${manager.getId()}</li>
                <li class="list-group-item"><a href="mailto:${manager.getEmail()}">Contact ${manager.getName()} by Email</a></li>
                <li class="list-group-item">Office Extension: ${manager.officeNumber()}</li>
            </ul>
        </div>
    `
    };

    function createEngineer(engineer) {
        return `
    <div class="card m-3" style="width: 18rem;">
            <img src="./images/theyprofile.png" class="card-img-top" alt="...">
            <div class="card-body bg-success">
                <h5 class="card-title text-light">${engineer.getName()}</h5>
                <p class="card-text text-light"><i class="fas fa-laptop-code"></i> Engineer</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee Id: ${engineer.getId()}</li>
                <li class="list-group-item"><a href="mailto:${engineer.getEmail()}">Contact ${engineer.getName()} by Email</a></li>
                <li class="list-group-item">Visit the<a href="https://github.com/${engineer.getGitHub()}"> GitHub </a>of ${engineer.getName()}</li>
            </ul>
        </div>
    `
    };
    function createIntern(intern) {
        return `
    <div class="card m-3" style="width: 18rem;">
    <img src="./images/theyprofile.png" class="card-img-top" alt="...">
    <div class="card-body bg-info">
        <h5 class="card-title text-light">${intern.getName()}</h5>
        <p class="card-text text-light"><i class="fas fa-graduation-cap"></i> Intern</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Employee Id: ${intern.getId()}</li>
        <li class="list-group-item"><a href="mailto:${intern.getEmail()}">Contact ${intern.getName()} by Email</a></li>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
    </ul>
</div>
    `
    }

    const employeeList = [];
    employeeList.push(userData.filter(employee => employee.getRole() === 'Manager').map(manager => createManager(manager)).join(""))
    employeeList.push(userData.filter(employee => employee.getRole() === 'Engineer').map(engineer => createEngineer(engineer)).join(""))
    employeeList.push(userData.filter(employee => employee.getRole() === 'Intern').map(intern => createIntern(intern)).join(""))

    return employeeList.join("");
};

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
            integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <link rel="icon" type="image/png" href="./images/employee.PNG">
        <script src="https://kit.fontawesome.com/ee54403a5f.js" crossorigin="anonymous"></script>
        <title>Our Employees</title>
    </head>
    
    <body class=bg-secondary>
        <div class="jumbotron jumbotron-fluid bg-info text-light">
            <div class="container">
                <h1 class="display-4">Our Employees</h1>
                <p class="lead">Meet our talented staff here. If you need to contact an employee that isn't listed, feel
                    free to contact us <a href="mailto:chender93@gmail.com">here!</a></p>
            </div>
        </div>
    
        <div class="employee-wrapper">
    
    ${genEmPage(team)}
    
    
        </div>
            <footer class="pt-5">
            <div class="card text-center">
                <div class="card-header">
                    Created to Create
                </div>
                <div class="card-body">
                    <h5 class="card-title">Homework assignment completed by Curtis Henderson</h5>
                    <p class="card-text">If you would like to see my other work, check out my other projects on my
                        portfolio!</p>
                    <a href="https://chender93.github.io/curtishenderson/" class="btn btn-primary">Click Here</a>
                </div>
                <div class="card-footer text-muted">
                    Created October, 2020
                </div>
            </div>
        </footer>
    </body>
    
    </html>
    `;
};