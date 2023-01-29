const Engineer = require('../lib/Engineer');

let fumoto = new Engineer('Fumoto', 6, 'fujin@gmail.com', 'fucode');

test('Engineer getRole returns Engineer not Employee', () => {
    expect(fumoto.getRole()).not.toBe('Employee');
    expect(fumoto.getRole()).toBe('Engineer');
    expect(fumoto instanceof Engineer);

    expect(new Engineer(0,0,0,0).getRole()).toBe('Engineer');
});

test('');