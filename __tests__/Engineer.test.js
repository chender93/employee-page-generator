const { TestScheduler } = require('jest');
const Engineer = require('../lib/Engineer.js');

test('confirms engineer info is correct', () => {
    const engineer = new Engineer("Curtis", 215, "chender93@gmail.com", "chender93");

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})