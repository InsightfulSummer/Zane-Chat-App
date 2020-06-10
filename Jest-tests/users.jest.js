const UsersDB = require('../utils/users');

describe("UsersDB", () => {
  test("addUser/getUser", () => {
    usersDB.addUser(user);
    usersDB.getUser(5).toBe(user);
  })
})
