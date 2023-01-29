const Engineer = require('../lib/Engineer');

let fumoto = new Engineer('Fumoto', 6, 'fujin@gmail.com', 'fucode');

test('Engineer getRole returns Engineer not Employee', () => {
    expect(fumoto.getRole()).not.toBe('Employee');
    expect(fumoto.getRole()).toBe('Engineer');
    expect(fumoto instanceof Engineer);

    expect(new Engineer(0,0,0,0).getRole()).toBe('Engineer');
});

test('Fumoto github returns the username fucode', () => {
    expect(fumoto.getGithub()).toBe('fucode');
    expect(fumoto.getGithub()).not.toBe('github');
});

test('Different engineers have different properties', () => {
    let kenzie = new Engineer('Kenzie', 8, 'kenzington@yahoomail.com', 'kkenz');

    expect(fumoto).not.toEqual(kenzie);
    expect(kenzie.getName()).not.toBe(fumoto.getName());
    expect(fumoto.getId()).not.toBe(kenzie.getId());
    expect(fumoto.getGithub()).not.toBe(kenzie.getGithub());
    expect(fumoto.getRole()).toBe(kenzie.getRole());
})