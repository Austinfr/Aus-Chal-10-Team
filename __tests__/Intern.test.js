const Intern = require('../lib/Intern');

let brett = new Intern('Brett', 3, 'bretth@hotmail.com', 'Yale University');

test('Intern returns Intern for getRole not Employee', () => {
    expect(brett.getRole()).not.toBe('Employee');
    expect(brett.getRole()).toBe('Intern');
    expect(brett instanceof Intern);
    
})

test('Brett is an intern from Yale', () => {
    expect(brett.getSchool()).toBe('Yale University');
    expect(brett.getName()).toBe('Brett');

})

test('Brett and Clark have the same school but different ids', () => {
    let clark = new Intern('Clark', 2, 'c@duke.com', 'Yale University');

    expect(clark.getId()).not.toBe(brett.getId());
    expect(clark.getSchool()).toBe(brett.getSchool());
    expect(clark).not.toEqual(brett);
    expect(clark.getName()).not.toBe(brett.getName());
})