const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    const users = new Users();

    beforeEach(() => {
        // users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        },{
            id: '2',
            name: 'Jen',
            room: 'React Course'
        },{
            id: '3',
            name: 'Dafni',
            room: 'Node Course'
        },]
    })

    it('should add new user', () => {
        const users = new Users();
        let user = {
            id: '1234',
            name: 'Snir',
            room: 'The Office Fans'
        };
        let resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        let resUser = users.removeUser('1')

        expect(resUser.id).toBe('1');
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        let resUser = users.removeUser('44')

        expect(resUser).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        let resUser = users.getUser('2');

        expect(resUser).toEqual(users.users[1]);
    });

    it('should NOT find user', () => {
        let resUser = users.getUser('22');

        expect(resUser).toBeFalsy();
    });

    it('should return names for node course', () => {
        let userList = users.getUserList('Node Course');

        expect(userList).toEqual(['Mike','Dafni']);
    });

    it('should return names for react course', () => {
        let userList = users.getUserList('React Course');

        expect(userList).toEqual(['Jen']);
    });
})