const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name, id, email, school) {
        super();
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
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
    getSchool() {
        return this.school;
    }
};

module.exports = Intern;