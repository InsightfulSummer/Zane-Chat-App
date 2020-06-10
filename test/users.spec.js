const usersDB = require("../utils/users")();

describe('UsersDB', () => {

    test('test if constructor/getUsersArray is working properly', () => {
      var emptyArray = [];
      expect(usersDB.getUsersArray()[0]).toBe(undefined);
    });

    test('test if getUsersArrayLength is working properly', () => {
      expect(usersDB.getUsersArrayLength()).toBe(0);
    });

    test('test getUser by id', () => {
      expect(usersDB.getUser(5)).toBeFalsy();
    });
});
