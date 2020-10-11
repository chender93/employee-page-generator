class Manager {
    constructor(name, id, email, number) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.number = number;
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
    officeNumber() {
        return this.extension;
    }
};

module.exports = Manager;