const { TestScheduler } = require('jest');
const Manager = require('../lib/Manager.js');

test('confirms manager info is correct', () => {
    const manager = new Manager("Curtis", 215, "curtis@gmail.com", 152);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.extension).toEqual(expect.any(Number));
})