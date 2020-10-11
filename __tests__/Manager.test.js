const { TestScheduler } = require('jest');
const Manager = require('../lib/Manager.js');

test('confirms manager info is correct', () => {
    const manager = new Manager("Curtis", 152, "chender93@gmail.com", 512);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.number).toEqual(expect.any(Number));
})