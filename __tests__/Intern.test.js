const { TestScheduler } = require('jest');
const Intern = require('../lib/Intern.js');

test('confirms intern info is correct', () => {
    const intern = new Intern("Curtis", 215, "curtis@gmail", "Intern", "New School");

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.role).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})