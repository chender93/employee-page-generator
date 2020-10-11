const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super();
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }
    getRole() {
        return "Engineer"
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getGitHub() {
        return this.github;
    }
};

module.exports = Engineer;