const Employee = require('../lib/Employee');

let randal = new Employee('Randal', 2, 'jk@freemail.com');
let jessica = new Employee('Jessica', 5, 'i@me.com')

test('Employee\'s name is Randal', () => {
    expect(randal.getName()).toBe('Randal');
})

test('Employee Randal\'s email is jk@freemail.com', () => {
    expect(randal.getEmail()).toBe('jk@freemail.com');
})

test('Employee Randal\'s role is Employee', () => {
    expect(randal.getRole()).toBe('Employee');
})

test('Jessica and Randal have different Ids', () => {
    expect(jessica.getId()).not.toBe(randal.getId());
})

test('Randal and Jessica are different Employees', () => {
    expect(randal).not.toEqual(jessica);
    expect(randal.getName()).not.toBe(jessica.getName());
    expect(randal.getRole()).toBe(jessica.getRole());
})