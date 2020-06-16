const usersDB = require("../utils/users")();

const user1 = {
  id: 5,
  name: 'Zane'
}

describe('UsersDB', () => {

    test('test if constructor/getUsersArray is working properly', () => {
      var emptyArray = [];
      expect(usersDB.getUsersArray()[0]).toBe(undefined);
    });

    test('test if getUsersArrayLength is working properly', () => {
      expect(usersDB.getUsersArrayLength()).toBe(0);
    });

    test('test getUser by id', () => {
      usersDB.addUser(user1);
      expect(usersDB.getUser(5)).toBe(user1);
    });
});
