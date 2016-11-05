const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'JavaScript'
    }, {
      id: '2',
      name: 'Jen',
      room: 'Python'
    }, {
      id: '3',
      name: 'Tom',
      room: 'JavaScript'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Alex',
      room: 'Main'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var removedUser = users.removeUser('1');
    expect(removedUser.name).toBe('Mike');
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    var removedUser = users.removeUser('111');
    expect(removedUser).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var user = users.getUser('1');
    expect(user.name).toBe('Mike');
  });

  it('should not find user', () => {
    var user = users.getUser('111');
    expect(user).toNotExist();
  });

  it('should return names for JavaScript course', () => {
    var usernames = users.getUserList('JavaScript');
    expect(usernames).toEqual(['Mike', 'Tom']);
  });

  it('should return names for Python course', () => {
    var usernames = users.getUserList('Python');
    expect(usernames).toEqual(['Jen']);
  });
});
