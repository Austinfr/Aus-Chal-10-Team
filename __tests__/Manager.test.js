const Manager = require('../lib/Manager');

let scott = new Manager('Scott', 1, 'mscott@dundermifflin.com', 1);
let jim = new Manager('Jim', 2, 'jhalpert@dundermifflin.com', 2);

test('Manager returns Manager for the role',  () => {
    expect(scott.getRole()).not.toBe('Employee');
    expect(scott.getRole()).toBe('Manager');
    expect(scott instanceof Manager);

    expect(jim.getRole()).not.toBe('Employee');
    expect(jim.getRole()).toBe('Manager');
    expect(jim instanceof Manager);
})

test('Scott and Jim have different offices', () => {
    expect(scott.getOfficeNumber()).not.toBe(jim.getOfficeNumber());
})

test('Can still use Employee methods on managers', () => {
    expect(scott.getName()).toBe('Scott');
    expect(jim.getName()).toBe('Jim');
    
    expect(scott.getId()).not.toBe(jim.getId());
    expect(jim.getEmail()).not.toBe('mscott@dundermifflin.com');
    expect(scott.getEmail()).toBe('mscott@dundermifflin.com');
})