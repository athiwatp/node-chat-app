class Users {
  constructor() {
    this.users = [];
  }
  addUser(id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }
  removeUser(id) {
    var removedUser;
    this.users = this.users.filter((user) => {
      var isEqual = user.id === id;
      if(isEqual) {
        removedUser = user;
      }
      return !isEqual;
    });
    return removedUser;
  }
  getUser(id) {
    var user = this.users.filter((user) => user.id === id);
    return user[0];
  }
  getUserList(room) {
    var filteredUsers = this.users.filter((user) => user.room === room);
    var usernames = filteredUsers.map((user) => user.name);
    return usernames;
  }
}

module.exports = {Users};
