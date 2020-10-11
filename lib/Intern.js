const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name, id, email, role, school) {
        super();
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.school = school;
    }
};

module.exports = Intern;