const Employee = require('../lib/Employee.js');

test('ensures the employee info is correct', () => {
    const employee = new Employee("Curtis", 215, "chender93@gmail.com", "He");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.pronoun).toEqual(expect.any(String));
})