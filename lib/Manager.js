const Employee = require("./Employee");

class  Manager extends Employee {
    constructor(name, id, email, number) {
        super(name, id, email);
        this.number = number;
    }
    getRole() {
        return "Manager"
    }
    officeNumber() {
        return this.number;
    }
};

module.exports = Manager;